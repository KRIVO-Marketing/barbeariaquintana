import { BookButton } from "./BookButton";
import { BookLink } from "./BookLink";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import {
  EXTRA_GROUPS,
  FEATURED_IDS,
  SERVICES,
  brl,
  serviceLabel,
} from "@/lib/data";

const byId = (id: string) => SERVICES.find((s) => s.id === id)!;
const featured = FEATURED_IDS.map(byId);
const machine = byId("corte-maquina");
const combo = byId("combo");
// Economia do combo em relação a corte + barba separados.
const saving = byId("corte").price + byId("barba").price - combo.price;

export function Services() {
  return (
    <section
      id="servicos"
      className="mx-auto max-w-[1200px] px-6 pb-[clamp(80px,10vw,140px)]"
    >
      <Reveal>
        <SectionTitle
          lead="Serviços e valores."
          dim="Escolha e agende."
          className="max-w-[14em]"
        />
        <p className="m-0 mt-5 text-[13px] uppercase tracking-[0.18em] text-muted">
          Tradição · Técnica · Cuidado · Personalização
        </p>
      </Reveal>

      <Reveal>
        <ul className="m-0 mt-10 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-4 p-0 sm:mt-14">
          {featured.map((s) => {
            const isCombo = s.id === combo.id;
            return (
              <li
                key={s.id}
                className={
                  isCombo
                    ? "relative flex flex-col gap-5 rounded-2xl bg-ink p-7 text-cream sm:p-8"
                    : "relative flex flex-col gap-5 rounded-2xl bg-sand p-7 text-ink sm:p-8"
                }
              >
                <div className="flex flex-col gap-2">
                  <h3 className="m-0 font-caslon text-[clamp(28px,3vw,36px)] font-normal leading-[1.1]">
                    {s.name}
                  </h3>
                  <p
                    className={
                      isCombo
                        ? "m-0 text-base text-faint"
                        : "m-0 text-base text-soft"
                    }
                  >
                    {s.desc}
                  </p>
                  {s.id === "corte" && (
                    <BookLink
                      serviceId={machine.id}
                      className="flex items-center justify-between rounded-full border border-line-input px-4 py-2.5 text-left text-sm text-soft transition-colors hover:border-ink hover:text-ink"
                    >
                      <span>Na {machine.note}</span>
                      <span className="font-medium text-ink">
                        {brl(machine.price)}
                      </span>
                    </BookLink>
                  )}
                </div>
                <div className="mt-auto flex items-center justify-between gap-3">
                  <span className="text-[34px] font-medium leading-none tracking-[-0.02em]">
                    {brl(s.price)}
                  </span>
                  {isCombo && (
                    <span className="rounded-full bg-terra px-3 py-1 text-xs font-medium text-cream">
                      Economize R$ {saving}
                    </span>
                  )}
                </div>
                {isCombo ? (
                  <BookButton
                    serviceId={s.id}
                    tone="light"
                    className="w-full justify-between"
                  />
                ) : (
                  <BookButton
                    serviceId={s.id}
                    className="w-full justify-between"
                  />
                )}
              </li>
            );
          })}
        </ul>
      </Reveal>

      <Reveal>
        <div className="mt-14 grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-x-10 gap-y-10 sm:mt-20">
          {EXTRA_GROUPS.map((g) => (
            <div key={g.title}>
              <h3 className="m-0 border-b border-line pb-3 text-[13px] font-medium uppercase tracking-[0.18em] text-muted">
                {g.title}
              </h3>
              <ul className="m-0 list-none p-0">
                {g.ids.map(byId).map((s) => (
                  <li key={s.id} className="border-b border-line-soft">
                    <BookLink
                      serviceId={s.id}
                      className="group flex w-full items-center justify-between gap-4 py-4 text-left"
                    >
                      <span className="flex min-w-0 flex-col">
                        <span className="text-base font-medium text-ink">
                          {serviceLabel(s)}
                        </span>
                        <span className="text-sm text-muted">{s.desc}</span>
                      </span>
                      <span className="flex flex-none items-center gap-3">
                        <span className="text-base font-medium text-ink">
                          {brl(s.price)}
                        </span>
                        <span
                          aria-hidden="true"
                          className="text-terra transition-transform duration-200 group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </span>
                    </BookLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
