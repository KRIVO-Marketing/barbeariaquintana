"use client";

import { useState } from "react";
import { SectionTitle } from "./SectionTitle";
import { FAQS } from "@/lib/data";
import { cn } from "@/lib/cn";

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section
      id="faq"
      className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-start gap-14 px-6 py-[clamp(80px,10vw,140px)]"
    >
      <SectionTitle lead="Dúvidas frequentes." dim="Antes de vir." />
      <div className="flex flex-col">
        {FAQS.map(([q, a], i) => {
          const isOpen = i === open;
          return (
            <div key={q} className="border-t border-line">
              <h3 className="m-0">
                <button
                  type="button"
                  id={`faq-q-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-5 border-0 bg-transparent py-6 text-left font-sans text-ink"
                >
                  <span className="text-lg font-medium leading-[1.4] tracking-[-0.01em]">{q}</span>
                  <span
                    aria-hidden="true"
                    className="flex size-9 flex-none items-center justify-center rounded-full border border-line-input text-lg"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
              </h3>
              <div
                id={`faq-a-${i}`}
                role="region"
                aria-labelledby={`faq-q-${i}`}
                className={cn(
                  "grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  <p className="m-0 pb-[26px] pr-0 text-base leading-[1.65] text-soft sm:pr-14">{a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
