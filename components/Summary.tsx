import { Reveal } from "./Reveal";
import { SUMMARY } from "@/lib/data";

/** Resposta direta e autossuficiente: boa para leitores e para resumos de busca. */
export function Summary() {
  return (
    <section aria-labelledby="resumo-titulo" className="mx-auto max-w-[900px] px-6 pt-[clamp(64px,8vw,112px)]">
      <Reveal>
        <h2 id="resumo-titulo" className="m-0 text-[13px] font-medium uppercase tracking-[0.18em] text-muted">
          Barbearia Quintana em resumo
        </h2>
        <p className="m-0 mt-5 text-pretty font-caslon text-[clamp(22px,2.6vw,30px)] leading-[1.4] text-ink">
          {SUMMARY}
        </p>
      </Reveal>
    </section>
  );
}
