"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useConsent } from "./ConsentProvider";
import { cn } from "@/lib/cn";

const BTN = "flex min-h-[46px] items-center justify-center rounded-full px-5 text-[15px] font-medium transition-colors";
const BTN_DARK = cn(BTN, "bg-ink text-cream hover:bg-ink-hover");
const BTN_LINE = cn(BTN, "border border-ink bg-transparent text-ink hover:bg-ink hover:text-cream");

function Toggle({
  id,
  label,
  desc,
  checked,
  onChange,
  locked,
}: {
  id: string;
  label: string;
  desc: string;
  checked: boolean;
  onChange?: (v: boolean) => void;
  locked?: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-4 border-t border-line-soft py-4">
      <div className="flex flex-col gap-1">
        <label htmlFor={id} className="text-base font-medium text-ink">
          {label}
        </label>
        <p className="m-0 text-sm leading-[1.5] text-soft">{desc}</p>
      </div>
      <input
        id={id}
        type="checkbox"
        role="switch"
        checked={checked}
        disabled={locked}
        onChange={(e) => onChange?.(e.target.checked)}
        className="mt-1 size-5 flex-none accent-[#c86d51] disabled:opacity-60"
      />
    </div>
  );
}

function Panel() {
  const { consent, panelOpen, closePanel, save } = useConsent();
  const ref = useRef<HTMLDialogElement>(null);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const dlg = ref.current;
    if (!dlg) return;
    if (panelOpen && !dlg.open) {
      setAnalytics(consent?.analytics ?? false);
      setMarketing(consent?.marketing ?? false);
      dlg.showModal();
    } else if (!panelOpen && dlg.open) dlg.close();
  }, [panelOpen, consent]);

  return (
    <dialog
      ref={ref}
      aria-labelledby="cookie-panel-title"
      onClose={closePanel}
      onClick={(e) => e.target === ref.current && closePanel()}
      className="m-auto w-[calc(100%-32px)] max-w-[520px] rounded-3xl border-0 bg-cream p-0 text-ink shadow-[0_24px_64px_rgba(42,33,27,0.35)] backdrop:bg-ink/60 backdrop:backdrop-blur-sm"
    >
      <div className="flex flex-col gap-4 p-6 sm:p-8">
        <h2 id="cookie-panel-title" className="m-0 font-caslon text-[28px] font-normal leading-[1.1]">
          Preferências de cookies
        </h2>
        <p className="m-0 text-base leading-[1.6] text-soft">
          Escolha quais cookies você autoriza. Você pode mudar isso quando quiser. Saiba mais na{" "}
          <Link href="/politica-de-cookies" className="underline underline-offset-4">
            Política de Cookies
          </Link>
          .
        </p>
        <div>
          <Toggle
            id="ck-nec"
            label="Necessários"
            desc="Guardam sua escolha de cookies. Sem eles o site não lembra da sua decisão."
            checked
            locked
          />
          <Toggle
            id="ck-ana"
            label="Estatísticas"
            desc="Google Analytics: mostram como o site é usado (páginas vistas, cliques em agendar e WhatsApp)."
            checked={analytics}
            onChange={setAnalytics}
          />
          <Toggle
            id="ck-mkt"
            label="Marketing"
            desc="Pixel da Meta: mede o resultado de anúncios no Instagram e Facebook."
            checked={marketing}
            onChange={setMarketing}
          />
        </div>
        <div className="flex flex-col gap-2.5 sm:flex-row-reverse">
          <button type="button" className={cn(BTN_DARK, "sm:flex-1")} onClick={() => save({ analytics, marketing })}>
            Salvar escolhas
          </button>
          <button
            type="button"
            className={cn(BTN_LINE, "sm:flex-1")}
            onClick={() => save({ analytics: true, marketing: true })}
          >
            Aceitar todos
          </button>
        </div>
      </div>
    </dialog>
  );
}

export function CookieBanner() {
  const { consent, ready, openPanel, save } = useConsent();
  const show = ready && !consent;

  return (
    <>
      {show && (
        <div
          role="region"
          aria-label="Aviso de cookies"
          className="fixed inset-x-3 bottom-3 z-50 mx-auto flex max-w-[440px] flex-col gap-3 rounded-2xl border border-line bg-cream p-4 shadow-[0_16px_48px_rgba(42,33,27,0.25)] sm:left-4 sm:right-auto sm:mx-0"
        >
          <p className="m-0 text-sm leading-[1.5] text-soft">
            Usamos cookies para entender o uso do site e medir anúncios. Os não essenciais só ficam ativos se você
            aceitar.{" "}
            <Link href="/politica-de-cookies" className="text-ink underline underline-offset-4">
              Saiba mais
            </Link>
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              className={cn(BTN_DARK, "min-h-[40px] flex-1 px-3 text-sm")}
              onClick={() => save({ analytics: true, marketing: true })}
            >
              Aceitar
            </button>
            <button
              type="button"
              className={cn(BTN_LINE, "min-h-[40px] flex-1 px-3 text-sm")}
              onClick={() => save({ analytics: false, marketing: false })}
            >
              Recusar
            </button>
            <button
              type="button"
              className={cn(BTN_LINE, "min-h-[40px] flex-1 px-3 text-sm")}
              onClick={openPanel}
            >
              Ajustar
            </button>
          </div>
        </div>
      )}
      <Panel />
    </>
  );
}
