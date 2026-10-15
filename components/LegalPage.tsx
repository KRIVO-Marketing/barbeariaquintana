import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export const LEGAL_UPDATED = "15 de outubro de 2026";

export function LegalPage({ title, intro, children }: { title: string; intro: string; children: ReactNode }) {
  return (
    <main className="min-h-svh bg-cream text-ink">
      <header className="mx-auto flex max-w-[760px] items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-3 text-ink hover:text-ink">
          <Image src="/logo-q.png" alt="" width={36} height={36} className="size-9 rounded-full" />
          <span className="font-rye text-xl tracking-[0.02em]">Quintana</span>
        </Link>
        <Link href="/" className="text-sm text-soft hover:text-ink">
          ← Voltar ao site
        </Link>
      </header>
      <article className="mx-auto max-w-[760px] px-6 pb-24 pt-8">
        <h1 className="m-0 font-caslon text-[clamp(36px,6vw,56px)] font-normal leading-[1.05] tracking-[-0.01em]">
          {title}
        </h1>
        <p className="m-0 mt-3 text-sm text-muted">Última atualização: {LEGAL_UPDATED}</p>
        <p className="m-0 mt-6 text-lg leading-[1.6] text-soft">{intro}</p>
        <div className="mt-10 flex flex-col gap-10 text-base leading-[1.7] text-body [&_a]:text-ink [&_a]:underline [&_a]:underline-offset-4 [&_h2]:m-0 [&_h2]:mb-3 [&_h2]:font-caslon [&_h2]:text-[28px] [&_h2]:font-normal [&_h2]:leading-[1.15] [&_h2]:text-ink [&_li]:mt-1.5 [&_p]:m-0 [&_p+p]:mt-3 [&_ul]:m-0 [&_ul]:mt-3 [&_ul]:pl-5">
          {children}
        </div>
      </article>
    </main>
  );
}
