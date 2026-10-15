import { ArrowPill } from "./ArrowPill";
import { MapEmbed } from "./MapEmbed";
import { INSTAGRAM_URL, MAPS_DIRECTIONS_URL, PHONE_LABEL, PHONE_TEL } from "@/lib/data";

const ROW =
  "flex justify-between gap-4 border-t border-line-dark py-[18px] text-base text-cream transition-colors hover:text-terra-light";

export function Location() {
  return (
    <section id="local" className="px-3 pb-3">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] overflow-hidden rounded-3xl bg-ink text-cream">
        <div className="flex flex-col gap-9 px-[clamp(24px,4vw,64px)] py-[clamp(40px,6vw,88px)]">
          <h2 className="m-0 font-caslon text-[clamp(36px,4.8vw,66px)] font-normal leading-[1.04] tracking-[-0.01em] text-cream">
            Terça a sexta, das 8h às 19h. <span className="text-terra-light">Sábado, das 8h às 17h.</span>
          </h2>
          <div className="flex flex-col">
            <a href={MAPS_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className={ROW}>
              <address className="not-italic">Av. Nossa Senhora da Consolação, 821 · Jardim Aurélia</address>
              <span aria-hidden="true">↗</span>
            </a>
            <a href={`tel:${PHONE_TEL}`} className={ROW}>
              <span>{PHONE_LABEL}</span>
              <span aria-hidden="true">↗</span>
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={`${ROW} border-b`}>
              <span>@barbearia_quintana</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
          <ArrowPill tone="light" href="#agendar" className="self-start">
            Agendar horário
          </ArrowPill>
        </div>
        <MapEmbed />
      </div>
    </section>
  );
}
