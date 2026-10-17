import Image from "next/image";
import Link from "next/link";
import { OpenCookieSettings } from "./OpenCookieSettings";

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-5 px-6 pb-[calc(40px+env(safe-area-inset-bottom))] pt-10 text-sm text-muted">
      <div className="flex items-center gap-3">
        <Image src="/logo-q.png" alt="" width={32} height={32} className="size-8 rounded-full" />
        <span>© 2026 Barbearia Quintana · Campinas, SP</span>
      </div>
      <address className="basis-full not-italic leading-[1.6]">
        Av. Nossa Senhora da Consolação, 821, Jardim Aurélia, Campinas - SP · Ter a sex, 8h às 19h · Sáb, 8h às 17h ·{" "}
        <a href="tel:+5519991522327" className="text-inherit hover:text-ink">
          (19) 99152-2327
        </a>
      </address>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
        <Link href="/politica-de-privacidade" className="hover:text-ink">
          Privacidade
        </Link>
        <Link href="/politica-de-cookies" className="hover:text-ink">
          Cookies
        </Link>
        <OpenCookieSettings className="cursor-pointer p-0 text-sm text-muted hover:text-ink">
          Preferências de cookies
        </OpenCookieSettings>
        <span>
          Desenvolvido por{" "}
          <a
            href="https://www.krivomkt.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-ink transition-colors hover:text-terra-dark"
          >
            Krivo
          </a>
        </span>
        <a href="#topo" className="text-ink transition-colors hover:text-terra-dark">
          Voltar ao topo ↑
        </a>
      </div>
    </footer>
  );
}
