import { Reveal } from "./Reveal";
import { CLUB_PLANS, CLUB_RULES, PHONE_LABEL, WHATSAPP, brl } from "@/lib/data";

const waLink = (plan: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Olá! Tenho interesse no ${plan}, do Clube Quintana.`)}`;

export function Club() {
  return (
    <section id="clube" className="p-3">
      <div className="rounded-3xl bg-ink px-[clamp(20px,4vw,64px)] py-[clamp(56px,7vw,104px)] text-cream">
        <div className="mx-auto max-w-[1200px]">
          <Reveal>
            <p className="m-0 text-[13px] uppercase tracking-[0.18em] text-terra-light">Pacotes mensais</p>
            <h2 className="m-0 mt-4 font-rye text-[clamp(40px,7vw,88px)] font-normal uppercase leading-[1.02] tracking-[0.01em]">
              Clube Quintana
            </h2>
            <p className="m-0 mt-5 max-w-[34em] text-base leading-[1.6] text-faint sm:text-lg">
              Mais praticidade, frequência e economia para quem faz da barbearia parte da sua rotina.
            </p>
          </Reveal>

          <Reveal>
            <ul className="m-0 mt-12 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-4 p-0 sm:mt-16">
              {CLUB_PLANS.map((p) => (
                <li key={p.id} className="flex flex-col gap-6 rounded-2xl border border-line-dark p-6 sm:p-8">
                  <div className="flex flex-col gap-1.5">
                    <h3 className="m-0 font-caslon text-[26px] font-normal leading-[1.1]">{p.name}</h3>
                    <span className="text-[15px] text-faint">{p.items}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[34px] font-medium leading-none tracking-[-0.02em]">{brl(p.price)}</span>
                    <span className="text-[13px] text-muted">Validade: {p.validity}</span>
                  </div>
                  {p.perk && (
                    <span className="text-[13px] leading-[1.5] text-terra-light">
                      Inclui uma sobrancelha de cortesia ou uma epilação.
                    </span>
                  )}
                  <a
                    href={waLink(p.name)}
                    data-track="select_club_plan"
                    data-track-label={p.id}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex min-h-[46px] items-center justify-center rounded-full border border-cream/40 px-5 text-[15px] font-medium text-cream transition-colors hover:bg-cream hover:text-ink"
                  >
                    Quero este pacote
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <div className="mt-12 rounded-2xl bg-sand p-6 text-ink sm:mt-16 sm:p-10">
              <h3 className="m-0 font-caslon text-[clamp(26px,3vw,36px)] font-normal leading-[1.1]">
                Como funciona o clube
              </h3>
              <ol className="m-0 mt-8 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-8 p-0">
                {CLUB_RULES.map((r, i) => (
                  <li key={r.t} className="flex flex-col gap-3">
                    <span className="flex size-9 items-center justify-center rounded-full bg-terra text-[15px] font-medium text-cream">
                      {i + 1}
                    </span>
                    <h4 className="m-0 text-lg font-medium">{r.t}</h4>
                    <p className="m-0 text-base leading-[1.6] text-soft">{r.d}</p>
                  </li>
                ))}
              </ol>
              <p className="m-0 mt-8 border-t border-line pt-6 text-base text-soft">
                Dúvidas sobre o clube?{" "}
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-ink underline underline-offset-4 hover:text-terra-dark"
                >
                  Chame no WhatsApp {PHONE_LABEL}
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
