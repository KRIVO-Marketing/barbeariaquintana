import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { ArrowPill } from "./ArrowPill";
import { ReviewsCarousel } from "./ReviewsCarousel";
import { Star, Stars } from "./Stars";
import { GOOGLE_PLACE_URL, GOOGLE_REVIEW_URL, RATING, REVIEWS } from "@/lib/data";

export function Reviews() {
  return (
    <section id="avaliacoes" className="mx-auto max-w-[1200px] px-6 py-[clamp(80px,10vw,140px)]">
      <div className="flex flex-wrap items-end justify-between gap-7">
        <Reveal className="flex flex-col gap-5">
          <div className="flex items-center gap-3.5">
            <Stars size={26} gap="gap-1" label={`Nota ${RATING.value} de 5`} />
            <span className="text-[15px] font-medium text-ink">{RATING.value}</span>
          </div>
          <SectionTitle lead="Opiniões de clientes da Barbearia Quintana no Google."
            dim={`Nota ${RATING.value} em ${RATING.count} avaliações.`}
            className="max-w-[18em] text-balance" />
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
      <Reveal>
        <ReviewsCarousel reviews={REVIEWS} />
      </Reveal>
    </section>
  );
}
