import { cn } from "@/lib/cn";

export function SectionTitle({
  lead,
  dim,
  className,
}: {
  lead: string;
  dim: string;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "m-0 font-caslon text-[clamp(36px,4.8vw,66px)] font-normal leading-[1.06] tracking-[-0.01em] text-ink",
        className,
      )}
    >
      {lead} <span className="text-faint">{dim}</span>
    </h2>
  );
}
