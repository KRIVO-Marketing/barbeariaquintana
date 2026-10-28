"use client";

import Script from "next/script";
import { useEffect } from "react";
import { useConsent } from "./ConsentProvider";
import { track } from "@/lib/track";
import { GA_ID, WHATSAPP } from "@/lib/data";

const SECTIONS = ["servicos", "clube", "agendar", "avaliacoes", "faq"];

/** Classifica cliques em links importantes sem precisar marcar cada um. */
function autoEvent(a: HTMLAnchorElement): [string, string] | null {
  const href = a.getAttribute("href") ?? "";
  if (href.startsWith("tel:")) return ["contact", "telefone"];
  if (href.includes(`wa.me/${WHATSAPP}`)) return ["lead", "whatsapp"];
  if (href.includes("instagram.com")) return ["click_instagram", "instagram"];
  if (href.includes("maps/dir")) return ["click_directions", "como_chegar"];
  if (href.includes("g.page") && href.includes("/review")) return ["click_review", "avaliar_google"];
  return null;
}

/**
 * Dispara os eventos do site no dataLayer, só depois do consentimento.
 * O GA4 é carregado aqui (gtag.js), só com o aceite de estatísticas. O Meta Pixel fica no GTM
 * (container GTM-N777QPFQ), respeitando o Consent Mode. Não crie uma tag GA4 no GTM: duplicaria as visitas.
 */
export function Analytics() {
  const { consent } = useConsent();
  const analytics = !!consent?.analytics;
  const active = !!consent?.analytics || !!consent?.marketing;

  useEffect(() => {
    if (!active) return;
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element).closest<HTMLElement>("[data-track], a[href]");
      if (!el) return;
      const label = el.dataset.trackLabel;
      if (el.dataset.track) {
        track(el.dataset.track, { label });
        return;
      }
      const hit = autoEvent(el as HTMLAnchorElement);
      if (hit) track(hit[0], { label: label ?? hit[1] });
    };
    document.addEventListener("click", onClick);

    const seen = new Set<string>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (!en.isIntersecting || seen.has(en.target.id)) continue;
          seen.add(en.target.id);
          track("view_section", { section: en.target.id });
        }
      },
      { threshold: 0.35 },
    );
    for (const id of SECTIONS) {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    }
    return () => {
      document.removeEventListener("click", onClick);
      io.disconnect();
    };
  }, [active]);

  if (!analytics) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">{`
        gtag('js', new Date());
        gtag('config', '${GA_ID}');
      `}</Script>
    </>
  );
}
