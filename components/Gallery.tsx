"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { IMAGES } from "@/lib/data";

type Item = { src: string; alt: string; ratio: string; position: string };

// Alturas alternadas (retrato/quadrado) formam o mosaico.
const ITEMS: Item[] = [
  { src: IMAGES.interior, alt: "Interior da Barbearia Quintana, no Jardim Aurélia, em Campinas", ratio: "aspect-[3/4]", position: "50% 62%" },
  { src: IMAGES.maquinaNuca, alt: "Corte na máquina com pente, acabamento na nuca", ratio: "aspect-square", position: "50% 55%" },
  { src: IMAGES.vitrolaDetalhes, alt: "Vitrola antiga, navalhas e máquina de corte do avô", ratio: "aspect-[3/4]", position: "50% 80%" },
  { src: IMAGES.armadura, alt: "Armadura de metal na parede da Barbearia Quintana", ratio: "aspect-square", position: "50% 50%" },
  { src: IMAGES.som, alt: "Toca-discos e aparelho de som antigo da Barbearia Quintana", ratio: "aspect-[3/4]", position: "50% 38%" },
  { src: IMAGES.maquinaLateral, alt: "Barbeiro fazendo o degradê na lateral com máquina", ratio: "aspect-square", position: "50% 55%" },
];

export function Gallery() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(0);

  const show = (i: number) => {
    setOpen(i);
    dialog.current?.showModal();
  };
  const step = (dir: 1 | -1) => setOpen((i) => (i + dir + ITEMS.length) % ITEMS.length);
  const current = ITEMS[open];

  const nav =
    "absolute top-1/2 z-10 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-cream backdrop-blur-sm transition-colors hover:bg-black/60";

  return (
    <section className="mx-auto max-w-[1200px] px-3">
      <ul className="m-0 list-none columns-2 gap-3 p-0 min-[900px]:columns-3">
        {ITEMS.map((it, i) => (
          <li key={it.src} className="mb-3 break-inside-avoid">
            <button
              type="button"
              onClick={() => show(i)}
              aria-label={`Ampliar foto: ${it.alt}`}
              className={`group relative block w-full overflow-hidden rounded-[20px] ${it.ratio}`}
            >
              <Image
                src={it.src}
                alt={it.alt}
                fill
                sizes="(min-width:1200px) 390px, (min-width:900px) 33vw, 50vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.04]"
                style={{ objectPosition: it.position }}
              />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        aria-label="Foto ampliada"
        className="m-auto size-full max-h-none max-w-none bg-transparent p-0 backdrop:bg-black/85"
      >
        <div className="relative size-full" onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}>
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            fill
            sizes="100vw"
            className="pointer-events-none object-contain p-4 sm:p-10"
          />
          <button type="button" aria-label="Fechar" onClick={() => dialog.current?.close()} className={`${nav} !top-5 right-5 translate-y-0 text-xl`}>
            ✕
          </button>
          <button type="button" aria-label="Foto anterior" onClick={() => step(-1)} className={`${nav} left-3 sm:left-6`}>
            ‹
          </button>
          <button type="button" aria-label="Próxima foto" onClick={() => step(1)} className={`${nav} right-3 sm:right-6`}>
            ›
          </button>
        </div>
      </dialog>
    </section>
  );
}
