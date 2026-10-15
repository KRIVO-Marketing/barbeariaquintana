import { Photo } from "./Photo";
import { IMAGES } from "@/lib/data";

const ITEMS = [
  [IMAGES.g1, "Barbeiro atendendo cliente"],
  [IMAGES.g2, "Cadeira de barbeiro"],
  [IMAGES.g3, "Navalha e toalha quente"],
  [IMAGES.g4, "Poltrona de barbeiro"],
];

export function Gallery() {
  return (
    <section className="px-3">
      <div className="grid grid-cols-2 gap-3 min-[900px]:grid-cols-4">
        {ITEMS.map(([src, alt]) => (
          <div key={src} className="relative aspect-square overflow-hidden rounded-[20px]">
            <Photo src={src} alt={alt} sizes="(min-width:900px) 25vw, 50vw" />
          </div>
        ))}
      </div>
    </section>
  );
}
