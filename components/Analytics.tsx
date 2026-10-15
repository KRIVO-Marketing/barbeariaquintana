"use client";

import Script from "next/script";
import { useEffect } from "react";
import { useConsent } from "./ConsentProvider";
import { track } from "@/lib/track";
import { GA_ID, META_PIXEL_ID, WHATSAPP } from "@/lib/data";

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
 * Carrega GA4 e Meta Pixel só depois do consentimento e dispara os eventos do site.
 * Sem os IDs em .env (NEXT_PUBLIC_GA_ID / NEXT_PUBLIC_META_PIXEL_ID), não carrega nada.
 */
export function Analytics() {
  const { consent } = useConsent();
  const analytics = !!consent?.analytics && !!GA_ID;
  const marketing = !!consent?.marketing && !!META_PIXEL_ID;
  const active = analytics || marketing;

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

  return (
    <>
      {analytics && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            window.gtag = function(){ dataLayer.push(arguments); };
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { anonymize_ip: true });
          `}</Script>
        </>
      )}
      {marketing && (
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${META_PIXEL_ID}');
          fbq('track', 'PageView');
        `}</Script>
      )}
    </>
  );
}
