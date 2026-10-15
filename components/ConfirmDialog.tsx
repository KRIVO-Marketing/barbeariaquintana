"use client";

import { useEffect, useRef } from "react";

/** Aviso antes de abrir o WhatsApp: o horário escolhido é só uma preferência. */
export function ConfirmDialog({
  open,
  onClose,
  href,
  details,
}: {
  open: boolean;
  onClose: () => void;
  href: string;
  details: string;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dlg = ref.current;
    if (!dlg) return;
    if (open && !dlg.open) {
      dlg.showModal();
      document.documentElement.style.overflow = "hidden";
    } else if (!open && dlg.open) {
      dlg.close();
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-labelledby="confirm-title"
      aria-describedby="confirm-desc"
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      className="m-auto w-[calc(100%-32px)] max-w-[440px] rounded-3xl border-0 bg-cream p-0 text-ink shadow-[0_24px_64px_rgba(42,33,27,0.35)] backdrop:bg-ink/60 backdrop:backdrop-blur-sm"
    >
      <div className="flex flex-col gap-5 p-6 sm:p-8">
        <div className="flex flex-col gap-3">
          <h2 id="confirm-title" className="m-0 font-caslon text-[28px] font-normal leading-[1.1] tracking-[-0.01em]">
            Antes de enviar
          </h2>
          <p id="confirm-desc" className="m-0 text-base leading-[1.6] text-soft">
            O horário que você escolheu é uma preferência. O João confirma pelo WhatsApp, e se ele já estiver
            ocupado por outra pessoa, ele pode propor outro horário.
          </p>
        </div>
        <p className="m-0 rounded-2xl bg-sand px-4 py-3 text-sm leading-[1.5] text-body">{details}</p>
        <div className="flex flex-col gap-2.5 sm:flex-row-reverse">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex min-h-[52px] flex-1 items-center justify-center rounded-full bg-ink px-6 text-[15px] font-medium text-cream transition-colors hover:bg-ink-hover hover:text-cream"
          >
            Entendi, abrir WhatsApp
          </a>
          <button
            type="button"
            onClick={onClose}
            autoFocus
            className="min-h-[52px] flex-1 rounded-full border border-ink px-6 text-[15px] font-medium text-ink transition-colors hover:bg-ink hover:text-cream"
          >
            Voltar e ajustar
          </button>
        </div>
      </div>
    </dialog>
  );
}
