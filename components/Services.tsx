import { BookButton } from "./BookButton";
import { FillHeading } from "./FillHeading";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { SERVICES } from "@/lib/data";
import { cn } from "@/lib/cn";

export function Services() {
  return (
    <section id="servicos" className="mx-auto max-w-[1200px] px-6 pb-[clamp(80px,10vw,140px)]">
      <Reveal>
        <SectionTitle lead="Serviços e valores." dim="Escolha e agende." className="max-w-[14em]" />
      </Reveal>
      <div className="relative mt-12 sm:mt-[72px]">
        <div aria-hidden="true" className="absolute inset-y-0 left-1/2 hidden w-px bg-line lg:block" />
        <div className="flex flex-col gap-[clamp(56px,8vw,120px)]">
          {SERVICES.map((s, i) => {
            const rev = i % 2 === 1;
            return (
              <article
                key={s.id}
                className={cn(
                  "relative flex flex-col gap-[clamp(32px,6vw,96px)] lg:items-center",
                  rev ? "lg:flex-row-reverse" : "lg:flex-row",
                )}
              >
                <Reveal className={cn("flex lg:flex-1", rev ? "lg:justify-start" : "lg:justify-end")}>
                  <div className="relative aspect-[4/5] w-full max-w-[440px] overflow-hidden rounded-2xl">
                    <Photo src={s.img} alt={s.alt} sizes="(min-width:1024px) 440px, (min-width:480px) 440px, 100vw" />
                  </div>
                </Reveal>
                <div
                  className={cn(
                    "flex flex-col items-start gap-[18px] text-left lg:flex-1",
                    rev && "lg:items-end lg:text-right",
                  )}
                >
                  <span className="whitespace-nowrap text-[13px] text-muted">{s.duration}</span>
                  <FillHeading>{s.name}</FillHeading>
                  <p className="m-0 max-w-[24em] text-base leading-[1.6] text-soft">{s.desc}</p>
                  <div
                    className={cn(
                      "mt-1.5 flex flex-wrap items-center gap-5",
                      rev ? "lg:justify-end" : "justify-start",
                    )}
                  >
                    <span className="flex-none whitespace-nowrap text-[22px] font-medium tracking-[-0.01em] text-ink">
                      {s.price}
                    </span>
                    <BookButton serviceId={s.id} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
