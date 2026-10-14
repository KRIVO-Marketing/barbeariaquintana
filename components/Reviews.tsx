import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { ArrowPill } from "./ArrowPill";
import { Star, Stars } from "./Stars";
import { GOOGLE_PLACE_URL, GOOGLE_REVIEW_URL, REVIEWS } from "@/lib/data";

export function Reviews() {
  return (
    <section id="avaliacoes" className="mx-auto max-w-[1200px] px-6 py-[clamp(80px,10vw,140px)]">
      <div className="flex flex-wrap items-end justify-between gap-7">
        <Reveal className="flex flex-col gap-5">
          <div className="flex items-center gap-3.5">
            <Stars size={26} gap="gap-1" label="Nota 4,9 de 5" />
            <span className="text-[15px] font-medium text-ink">4,9</span>
          </div>
          <SectionTitle lead="Nota 4,9 no Google." dim="Em 44 avaliações." className="max-w-[14em]" />
        </Reveal>
        <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:flex-wrap">
          <a
            href={GOOGLE_PLACE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-12 flex-none items-center justify-center whitespace-nowrap rounded-full border border-ink px-[22px] text-[15px] font-medium text-ink transition-colors hover:bg-ink hover:text-cream"
          >
            Ver no Google
          </a>
          <ArrowPill
            tone="dark"
            size="sm"
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            icon={<Star size={18} fill="#FCFAF7" />}
            className="justify-between"
          >
            Deixar minha avaliação
          </ArrowPill>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-10 sm:mt-16">
        {REVIEWS.map((r) => (
          <Reveal key={r.name}>
            <figure className="m-0 flex flex-col gap-6 border-t border-line pt-6">
              <Stars size={18} gap="gap-[3px]" label="5 de 5 estrelas" />
              <blockquote className="m-0 text-pretty font-caslon text-2xl leading-[1.35] text-ink">
                “{r.text}”
              </blockquote>
              <figcaption className="text-sm text-muted">{r.name} · Google</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
