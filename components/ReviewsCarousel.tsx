"use client";

import { useRef } from "react";
import { Stars } from "./Stars";

type Review = { name: string; text: string };

const ARROW = "M5 12h14M13 6l6 6-6 6";

export function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const track = useRef<HTMLUListElement>(null);

  const scrollByPage = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  };

  // Toque já rola nativamente; isto adiciona o arrastar com mouse (desktop e emulação mobile).
  const drag = useRef({ active: false, x: 0, left: 0, moved: false });

  const onPointerDown = (e: React.PointerEvent<HTMLUListElement>) => {
    const el = track.current;
    if (!el || e.pointerType !== "mouse" || e.button !== 0) return;
    drag.current = { active: true, x: e.clientX, left: el.scrollLeft, moved: false };
    el.style.scrollSnapType = "none";
    el.style.scrollBehavior = "auto";
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLUListElement>) => {
    const el = track.current;
    const d = drag.current;
    if (!el || !d.active) return;
    const dx = e.clientX - d.x;
    if (Math.abs(dx) > 3) d.moved = true;
    el.scrollLeft = d.left - dx;
  };

  const endDrag = (e: React.PointerEvent<HTMLUListElement>) => {
    const el = track.current;
    if (!el || !drag.current.active) return;
    drag.current.active = false;
    if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
    el.style.scrollSnapType = "";
    el.style.scrollBehavior = "";
  };

  const btn =
    "flex size-12 items-center justify-center rounded-full border border-ink text-ink transition-colors hover:bg-ink hover:text-cream";

  return (
    <div className="mt-12 sm:mt-16">
      <ul
        ref={track}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        aria-label="Avaliações de clientes no Google"
        className="m-0 flex cursor-grab select-none list-none snap-x active:cursor-grabbing snap-mandatory gap-10 overflow-x-auto scroll-smooth p-0 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((r) => (
          <li
            key={r.name}
            className="w-[85%] flex-none snap-start sm:w-[calc((100%-2.5rem)/2)] lg:w-[calc((100%-5rem)/3)]"
          >
            <figure className="m-0 flex h-full flex-col gap-6 border-t border-line pt-6">
              <Stars size={18} gap="gap-[3px]" label="5 de 5 estrelas" />
              <blockquote className="m-0 text-pretty font-caslon text-2xl leading-[1.35] text-ink">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-auto text-sm text-muted">{r.name} · Google</figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex gap-2.5">
        <button type="button" aria-label="Avaliações anteriores" onClick={() => scrollByPage(-1)} className={btn}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" className="rotate-180">
            <path d={ARROW} />
          </svg>
        </button>
        <button type="button" aria-label="Próximas avaliações" onClick={() => scrollByPage(1)} className={btn}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <path d={ARROW} />
          </svg>
        </button>
      </div>
    </div>
  );
}
