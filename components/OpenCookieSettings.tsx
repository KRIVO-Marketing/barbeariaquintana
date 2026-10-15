"use client";

import { useConsent } from "./ConsentProvider";
import { cn } from "@/lib/cn";

export function OpenCookieSettings({ className, children }: { className?: string; children?: React.ReactNode }) {
  const { openPanel } = useConsent();
  return (
    <button
      type="button"
      onClick={openPanel}
      className={cn(
        className ??
          "inline-flex min-h-[46px] items-center rounded-full border border-ink px-5 text-[15px] font-medium text-ink transition-colors hover:bg-ink hover:text-cream",
      )}
    >
      {children ?? "Abrir preferências de cookies"}
    </button>
  );
}
