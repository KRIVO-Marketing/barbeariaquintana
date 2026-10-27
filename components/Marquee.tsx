const ITEMS = ["Desde 2016", "Jardim Aurélia", "De avô para neto", "Hora marcada", "Corte e barba"];

/** Faixa rolando entre o hero e a história. Decorativa: o conteúdo já existe no texto da página. */
export function Marquee() {
  const row = (
    <div className="flex flex-none items-center gap-9 pr-9">
      {ITEMS.map((t) => (
        <span key={t} className="flex items-center gap-9">
          <span className="whitespace-nowrap font-caslon text-[clamp(22px,2.6vw,34px)] uppercase tracking-[0.04em] text-cream">
            {t}
          </span>
          <span className="font-rye text-xl text-terra-light">Q</span>
        </span>
      ))}
    </div>
  );
  return (
    <div aria-hidden="true" className="marquee overflow-hidden bg-ink py-5">
      <div className="anim-marquee flex w-max">
        {row}
        {row}
        {row}
        {row}
      </div>
    </div>
  );
}
