import { Photo } from "./Photo";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { IMAGES, PILLARS } from "@/lib/data";

export function History() {
  return (
    <section id="historia" className="mx-auto max-w-[1200px] px-6 py-[clamp(80px,10vw,140px)]">
      <Reveal>
        <SectionTitle
          lead="Aprendido na cadeira do avô."
          dim="Feito do mesmo jeito desde 2016."
          className="max-w-[16em] text-balance"
        />
      </Reveal>
      <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-start gap-12 sm:mt-16">
        <Reveal className="grid grid-cols-2 gap-3">
          <figure className="m-0 flex flex-col gap-2.5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Photo src={IMAGES.avo} alt="Retrato do avô na parede da barbearia" sizes="(min-width:1200px) 290px, (min-width:940px) 25vw, 45vw" />
            </div>
            <figcaption className="text-[13px] text-muted">O avô, na parede da barbearia</figcaption>
          </figure>
          <figure className="m-0 mt-12 flex flex-col gap-2.5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Photo src={IMAGES.antes} alt="A sala antes da reforma" sizes="(min-width:1200px) 290px, (min-width:940px) 25vw, 45vw" />
            </div>
            <figcaption className="text-[13px] text-muted">A sala, antes da reforma</figcaption>
          </figure>
        </Reveal>
        <div className="flex flex-col gap-10">
          <Reveal as="p" className="m-0 max-w-[32em] text-pretty text-lg leading-[1.65] text-body">
            João Navero Quintana guardou do avô a navalha afiada, a toalha quente e a conversa sem pressa. Em
            2016 reformou uma sala vazia na Av. Nossa Senhora da Consolação e abriu a própria barbearia.
          </Reveal>
          <div className="hidden grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-7 sm:grid">
            {PILLARS.map((p) => (
              <Reveal key={p.t} className="flex flex-col gap-2.5 border-t border-line pt-5">
                <h3 className="m-0 text-[17px] font-medium text-ink">{p.t}</h3>
                <p className="m-0 text-sm leading-[1.55] text-muted">{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
