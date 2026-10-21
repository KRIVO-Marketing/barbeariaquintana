import { Photo } from "./Photo";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { IMAGES, PILLARS } from "@/lib/data";

export function History() {
  return (
    <section id="historia" className="mx-auto max-w-[1200px] px-6 py-[clamp(80px,10vw,140px)]">
      <Reveal>
        <SectionTitle
          lead="De avô para neto."
          dim="Uma barbearia no Jardim Aurélia desde 2016."
          className="max-w-[16em] text-balance"
        />
      </Reveal>
      <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-start gap-12 sm:mt-16">
        <Reveal className="grid grid-cols-2 gap-3">
          <figure className="m-0 flex flex-col gap-2.5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Photo src={IMAGES.avo} alt="Ambiente clássico de barbearia" sizes="(min-width:1200px) 290px, (min-width:940px) 25vw, 45vw" />
            </div>
          </figure>
          <figure className="m-0 mt-12 flex flex-col gap-2.5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Photo src={IMAGES.antes} alt="Interior de barbearia tradicional" sizes="(min-width:1200px) 290px, (min-width:940px) 25vw, 45vw" />
            </div>
          </figure>
        </Reveal>
        <div className="flex flex-col gap-10">
          <Reveal as="p" className="m-0 max-w-[32em] text-pretty text-lg leading-[1.65] text-body">
            A Barbearia Quintana começou na cadeira do avô. Ele foi barbeiro no Jardim Aurélia por muitos anos, e foi
            ali, vendo o ofício de perto, que João Navero Quintana aprendeu a cuidar de gente. João fez o curso de
            barbeiro aos 13 anos e, aos 16, em 2016, abriu a própria barbearia em Campinas.
          </Reveal>
          <Reveal as="p" className="m-0 max-w-[32em] text-pretty text-base leading-[1.65] text-soft">
            Do avô, ele herdou a cadeira, as tesouras e outros itens antigos. Tudo fica exposto no espaço, para quem
            quiser ver de perto como era o ofício de antigamente. Sentar na Quintana é também uma pequena imersão
            nostálgica.
          </Reveal>
          <Reveal as="p" className="m-0 max-w-[32em] text-pretty text-base leading-[1.65] text-soft">
            Hoje a Barbearia Quintana atende no Jardim Aurélia, em Campinas, de terça a sexta, das 8h às 19h, e aos
            sábados, das 8h às 17h, sempre com hora marcada. Corte de cabelo R$ 60 (R$ 50 na máquina nº 0), barba R$ 60 e
            pacotes mensais no Clube Quintana.
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
