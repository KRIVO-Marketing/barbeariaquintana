"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowPill } from "./ArrowPill";
import { cn } from "@/lib/cn";

const NAV = [
  ["#historia", "História"],
  ["#servicos", "Serviços"],
  ["#clube", "Clube"],
  ["#avaliacoes", "Avaliações"],
  ["#faq", "Dúvidas"],
];

/** Cabeçalho do hero: nav no desktop, menu hambúrguer no mobile/tablet. */
export function HeaderNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = matchMedia("(min-width: 1024px)");
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className="pointer-events-none relative z-30 flex items-center justify-between gap-3 px-[clamp(16px,3vw,40px)] py-[clamp(16px,2.4vw,28px)]">
        <a href="#topo" onClick={close} className="pointer-events-auto flex items-center gap-3 text-cream hover:text-cream">
          <Image src="/logo-q.png" alt="Barbearia Quintana" width={40} height={40} priority className="block size-10 rounded-full" />
          <span className="font-rye text-[22px] font-normal tracking-[0.02em]">Quintana</span>
        </a>

        <nav aria-label="Principal" className="pointer-events-auto hidden gap-9 text-[15px] lg:flex">
          {NAV.slice(0, 4).map(([href, label]) => (
            <a key={href} href={href} className="text-cream transition-opacity hover:text-cream hover:opacity-70">
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#agendar"
          className="pointer-events-auto hidden min-h-[46px] flex-none items-center whitespace-nowrap rounded-full bg-cream px-[18px] text-[15px] font-medium text-ink transition-colors hover:bg-sand-hover hover:text-ink lg:flex"
        >
          Agendar horário
        </a>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((o) => !o)}
          className="pointer-events-auto relative flex size-[46px] flex-none items-center justify-center rounded-full bg-cream text-ink transition-colors hover:bg-sand-hover lg:hidden"
        >
          <span aria-hidden="true" className="relative block h-3.5 w-5">
            <span
              className={cn(
                "absolute left-0 h-0.5 w-5 rounded bg-ink transition-all duration-300",
                open ? "top-1.5 rotate-45" : "top-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1.5 h-0.5 w-5 rounded bg-ink transition-opacity duration-200",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 h-0.5 w-5 rounded bg-ink transition-all duration-300",
                open ? "top-1.5 -rotate-45" : "top-3",
              )}
            />
          </span>
        </button>
      </header>

      <div
        id="menu-mobile"
        aria-hidden={!open}
        inert={!open}
        className={cn(
          "absolute inset-0 z-20 flex flex-col bg-ink/95 px-[clamp(16px,3vw,40px)] pb-[clamp(24px,4vw,48px)] pt-24 backdrop-blur-md transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav aria-label="Menu" className="flex flex-col">
          {NAV.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={close}
              className="border-b border-line-dark py-5 font-caslon text-[clamp(32px,8vw,48px)] leading-none text-cream hover:text-terra-light"
            >
              {label}
            </a>
          ))}
        </nav>
        <ArrowPill tone="light" href="#agendar" onClick={close} className="mt-auto justify-between sm:self-start">
          Agendar horário
        </ArrowPill>
      </div>
    </>
  );
}
