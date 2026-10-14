import Image from "next/image";

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-5 px-6 pb-[calc(40px+env(safe-area-inset-bottom))] pt-10 text-sm text-muted">
      <div className="flex items-center gap-3">
        <Image src="/logo-q.png" alt="" width={32} height={32} className="size-8 rounded-full" />
        <span>© 2026 Barbearia Quintana · Campinas, SP</span>
      </div>
      <a href="#topo" className="text-ink transition-colors hover:text-terra-dark">
        Voltar ao topo ↑
      </a>
    </footer>
  );
}
