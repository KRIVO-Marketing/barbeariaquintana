"use client";

import { useEffect, useRef } from "react";

/** Título Rye que "enche" de tinta conforme entra na tela. */
export function FillHeading({ children }: { children: string }) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.setProperty("--p", "100%");
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const p = Math.max(0, Math.min(1, (vh * 0.9 - el.getBoundingClientRect().top) / (vh * 0.45)));
      el.style.setProperty("--p", (p * 100).toFixed(1) + "%");
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <h3
      ref={ref}
      data-fill=""
      className="m-0 bg-[linear-gradient(90deg,#2A211B_var(--p,0%),#DDD3C7_var(--p,0%))] bg-clip-text font-rye text-[clamp(34px,4.2vw,58px)] font-normal leading-[1.05] text-transparent [-webkit-text-fill-color:transparent] [--p:0%] motion-reduce:[--p:100%]"
    >
      {children}
    </h3>
  );
}
