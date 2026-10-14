import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tone = "light" | "dark" | "outline";
type Size = "sm" | "md" | "lg";

const TONE: Record<Tone, string> = {
  light: "bg-cream text-ink hover:bg-sand-hover",
  dark: "bg-ink text-cream hover:bg-ink-hover",
  outline:
    "border border-ink bg-transparent text-ink transition-all duration-200 hover:bg-ink hover:text-cream",
};
const SIZE: Record<Size, { box: string; dot: string; text: string }> = {
  sm: { box: "min-h-[50px] gap-3.5 pl-[22px] pr-[5px]", dot: "size-10 text-base", text: "text-[15px]" },
  md: { box: "min-h-[54px] gap-[18px] pl-[26px] pr-1.5", dot: "size-[42px] text-lg", text: "text-base" },
  lg: { box: "min-h-[58px] gap-4 pl-[26px] pr-1.5", dot: "size-[46px] text-lg", text: "text-base" },
};

type Props = {
  tone: Tone;
  size?: Size;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
} & (
  | ({ href: string } & Omit<ComponentProps<"a">, "className" | "children">)
  | ({ href?: undefined } & Omit<ComponentProps<"button">, "className" | "children">)
);

/** Botão pílula com círculo terracota à direita (padrão do site). */
export function ArrowPill({ tone, size = "md", icon = "→", children, className, ...rest }: Props) {
  const s = SIZE[size];
  const cls = cn(
    "flex flex-none items-center whitespace-nowrap rounded-full font-medium transition-colors",
    s.box,
    s.text,
    TONE[tone],
    className,
  );
  const dot = (
    <span
      aria-hidden="true"
      className={cn("flex flex-none items-center justify-center rounded-full bg-terra text-cream", s.dot)}
    >
      {icon}
    </span>
  );
  if ("href" in rest && rest.href !== undefined) {
    const { href, ...a } = rest;
    return (
      <a href={href} className={cls} {...a}>
        <span>{children}</span>
        {dot}
      </a>
    );
  }
  const b = rest as ComponentProps<"button">;
  return (
    <button type="button" className={cls} {...b}>
      <span>{children}</span>
      {dot}
    </button>
  );
}
