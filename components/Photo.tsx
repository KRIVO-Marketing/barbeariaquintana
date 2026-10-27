import Image from "next/image";

const UNSPLASH = "https://unsplash.com/?utm_source=barbearia_quintana&utm_medium=referral";

/** Foto preenchendo o pai (que deve ser `relative` com proporção/overflow) + crédito Unsplash. */
export function Photo({
  src,
  alt,
  sizes,
  priority,
  position,
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  /** `object-position` do recorte (ex.: "50% 20%"). */
  position?: string;
}) {
  const own = src.startsWith("/");
  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        style={position ? { objectPosition: position } : undefined}
      />
      {!own && (
        <span className="absolute bottom-1.5 left-1.5 z-10 max-w-[calc(100%-12px)] truncate rounded-[5px] bg-black/55 px-[7px] py-[3px] text-[10px] leading-[1.2] text-white backdrop-blur-[6px]">
          <a
            href={UNSPLASH}
            target="_blank"
            rel="noopener noreferrer"
            className="text-inherit hover:underline"
          >
            Foto via Unsplash
          </a>
        </span>
      )}
    </>
  );
}
