import { HeaderNav } from "./HeaderNav";
import { ArrowPill } from "./ArrowPill";
import { Photo } from "./Photo";
import { HERO_VIDEO, IMAGES } from "@/lib/data";

export function Hero() {
  return (
    <section id="topo" className="p-3">
      <div className="relative flex min-h-[min(880px,calc(100svh-24px))] flex-col overflow-hidden rounded-3xl bg-hero-bg">
        <div className="absolute inset-0">
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
            <Photo src={IMAGES.hero} alt="Barbeiro atendendo um cliente na cadeira" sizes="100vw" priority />
          )}
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(42,33,27,0.45)_0%,rgba(42,33,27,0)_62%)] sm:bg-[linear-gradient(90deg,rgba(42,33,27,0.45)_0%,rgba(42,33,27,0)_62%)]" />

        <HeaderNav />

        <div className="pointer-events-none relative mt-auto flex max-w-[900px] flex-col gap-5 px-[clamp(16px,3vw,40px)] pb-[clamp(24px,4vw,48px)] sm:gap-[clamp(20px,2.4vw,28px)]">
          <h1 className="m-0 text-balance font-caslon text-[clamp(44px,7.6vw,120px)] font-normal leading-none tracking-[-0.015em] text-cream [text-shadow:0_1px_16px_rgba(42,33,27,0.35)]">
            O ofício do avô, com hora marcada.
          </h1>
          <p className="m-0 max-w-[30em] text-[clamp(16px,1.3vw,19px)] leading-[1.55] text-cream [text-shadow:0_1px_12px_rgba(42,33,27,0.5)]">
            Barbearia Quintana. Corte e barba no Jardim Aurélia, em Campinas, desde 2016.
          </p>
          <div className="pointer-events-auto flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
