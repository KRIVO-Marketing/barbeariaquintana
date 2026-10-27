import { HeaderNav } from "./HeaderNav";
import { ArrowPill } from "./ArrowPill";
import { Photo } from "./Photo";
import { HERO_VIDEO, IMAGES } from "@/lib/data";

export function Hero() {
  return (
    <section id="topo" className="p-3">
      <div className="relative flex min-h-[min(880px,calc(100svh-24px))] flex-col overflow-hidden rounded-3xl bg-ink sm:bg-hero-bg">
        <div className="anim-kenburns absolute inset-x-0 top-0 h-[78%] sm:inset-0 sm:h-auto">
          {HERO_VIDEO ? (
            <video
              src={HERO_VIDEO}
              autoPlay
              muted
              loop
              playsInline
              className="block size-full object-cover"
            />
          ) : (
            <Photo src={IMAGES.hero} alt="Fachada da Barbearia Quintana, no Jardim Aurélia, em Campinas" position="36% 50%" sizes="(max-width:640px) 250vw, 100vw" priority />
          )}
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[82%] bg-[linear-gradient(180deg,rgba(42,33,27,0)_45%,rgba(42,33,27,0.82)_78%,#2a211b_95%)] sm:hidden" />
        <div className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(0deg,rgba(30,23,18,0.82)_0%,rgba(30,23,18,0.55)_34%,rgba(30,23,18,0)_62%)] sm:block" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-[linear-gradient(180deg,rgba(30,23,18,0.5)_0%,rgba(30,23,18,0)_100%)]" />

        <HeaderNav />

        <div className="relative mt-auto flex max-w-[1100px] flex-col gap-5 px-[clamp(16px,3vw,40px)] pb-[clamp(24px,3.2vw,40px)] sm:gap-[clamp(14px,1.6vw,20px)]">
          <h1 style={{ "--d": "0.3s" } as React.CSSProperties} className="anim-rise m-0 text-balance font-caslon text-[clamp(34px,4.4vw,64px)] font-normal leading-[1.05] tracking-[-0.015em] text-cream [text-shadow:0_1px_16px_rgba(42,33,27,0.35)]">
            Barbearia em Campinas, com corte e barba na hora marcada.
          </h1>
          <p style={{ "--d": "0.5s" } as React.CSSProperties} className="anim-rise m-0 max-w-[30em] text-[clamp(16px,1.3vw,19px)] leading-[1.55] text-cream [text-shadow:0_1px_12px_rgba(42,33,27,0.5)]">
            Na Barbearia Quintana, no Jardim Aurélia, você escolhe o serviço e agenda pelo WhatsApp, sem fila.
          </p>
          <div style={{ "--d": "0.65s" } as React.CSSProperties} className="anim-rise pointer-events-auto flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ArrowPill tone="light" href="#agendar" className="justify-between sm:justify-start">
              Agendar pelo WhatsApp
            </ArrowPill>
            <a
              href="#servicos"
              className="flex min-h-[54px] flex-none items-center justify-center whitespace-nowrap rounded-full border border-cream/60 px-[26px] text-base font-medium text-cream transition-colors hover:border-cream hover:bg-cream/10 hover:text-cream"
            >
              Ver serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
