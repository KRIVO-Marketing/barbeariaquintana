"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowPill } from "./ArrowPill";
import { ConfirmDialog } from "./ConfirmDialog";
import { useBooking } from "./BookingProvider";
import { SectionTitle } from "./SectionTitle";
import { PHONE_LABEL, SERVICES, TIMES, WHATSAPP } from "@/lib/data";
import { cn } from "@/lib/cn";

const WD_LONG = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];
const MAX_DAYS_AHEAD = 90;

const pad = (n: number) => String(n).padStart(2, "0");
const toIso = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

/** "2026-10-21" -> data local (sem deslocar por fuso). */
function parseIso(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}

const chip = (on: boolean) =>
  on ? "border-ink bg-ink text-cream" : "border-line-input bg-cream text-ink hover:border-ink";

const LABEL = "text-sm font-medium text-soft";

export function Booking() {
  const { service, setService } = useBooking();
  const [range, setRange] = useState<{ min: string; max: string } | null>(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [confirming, setConfirming] = useState(false);

  // Limites dependem do relógio do visitante: calculados só no cliente.
  useEffect(() => {
    const now = new Date();
    const max = new Date(now.getFullYear(), now.getMonth(), now.getDate() + MAX_DAYS_AHEAD);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setRange({ min: toIso(now), max: toIso(max) });
  }, []);

  const svc = SERVICES.find((s) => s.id === service) ?? SERVICES[0];
  const picked = date ? parseIso(date) : null;
  const closed = !!picked && picked.getDay() < 2;
  const dObj =
    picked && !closed
      ? { long: `${WD_LONG[picked.getDay()]}, ${pad(picked.getDate())}/${pad(picked.getMonth() + 1)}` }
      : null;
  const trimmed = name.trim();
  const canSend = !!dObj && !!time;

  const summary = [
    ["Serviço", `${svc.name} · ${svc.price}`],
    ["Dia", dObj ? dObj.long : "Escolha o dia"],
    ["Horário", time ?? "Escolha o horário"],
    ["Nome", trimmed || "—"],
  ];
  const msg =
    "Olá! Gostaria de agendar na Barbearia Quintana.\n\n" +
    `Serviço: ${svc.name}\nDia: ${dObj ? dObj.long : "sem preferência"}\nHorário: ${time ?? "sem preferência"}` +
    (trimmed ? `\nNome: ${trimmed}` : "");
  const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

  return (
    <section id="agendar" className="p-3">
      <div className="rounded-3xl bg-sand px-[clamp(20px,4vw,64px)] py-[clamp(56px,7vw,104px)]">
        <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-start gap-[clamp(40px,6vw,88px)]">
          <div className="flex flex-col gap-10 sm:gap-11">
            <SectionTitle lead="Monte seu horário." dim="A mensagem vai pronta." />

            <fieldset className="m-0 flex min-w-0 flex-col gap-3.5 border-0 p-0">
              <legend className={cn(LABEL, "mb-3.5 p-0")}>Serviço</legend>
              <div className="flex flex-wrap gap-2">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    aria-pressed={s.id === service}
                    onClick={() => setService(s.id)}
                    className={cn(
                      "min-h-[46px] rounded-full border px-5 text-[15px] font-medium transition-all duration-150",
                      chip(s.id === service),
                    )}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="flex flex-col gap-3.5">
              <label htmlFor="data" className={LABEL}>
                Dia de preferência
              </label>
              <input
                id="data"
                type="date"
                value={date}
                min={range?.min}
                max={range?.max}
                onChange={(e) => setDate(e.target.value)}
                aria-invalid={closed}
                aria-describedby={closed ? "data-erro" : undefined}
                className={cn(
                  "block min-h-[52px] w-full min-w-0 appearance-none rounded-full border bg-cream px-5 text-left text-base text-ink [color-scheme:light] outline-none focus:border-terra focus:shadow-[0_0_0_3px_rgba(200,109,81,0.18)]",
                  closed ? "border-terra-dark" : "border-line-input",
                )}
              />
              {closed && (
                <p id="data-erro" role="alert" className="m-0 text-[13px] leading-[1.5] text-terra-dark">
                  Não abrimos aos domingos e segundas. Escolha um dia de terça a sábado.
                </p>
              )}
            </div>

            <fieldset className="m-0 flex min-w-0 flex-col gap-3.5 border-0 p-0">
              <legend className={cn(LABEL, "mb-3.5 p-0")}>Horário de preferência</legend>
              <div className="grid grid-cols-[repeat(auto-fill,minmax(72px,1fr))] gap-2">
                {TIMES.map((t) => (
                  <button
                    key={t}
                    type="button"
                    aria-pressed={t === time}
                    onClick={() => setTime(t === time ? null : t)}
                    className={cn(
                      "min-h-[46px] whitespace-nowrap rounded-full border text-sm font-medium transition-all duration-150",
                      chip(t === time),
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </fieldset>

            <label className="flex flex-col gap-3.5">
              <span className={LABEL}>Seu nome (opcional)</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Como podemos te chamar?"
                autoComplete="given-name"
                autoCapitalize="words"
                enterKeyHint="done"
                className="min-h-[52px] w-full rounded-full border border-line-input bg-cream px-5 text-base text-ink outline-none placeholder:text-faint focus:border-terra focus:shadow-[0_0_0_3px_rgba(200,109,81,0.18)]"
              />
            </label>
          </div>

          <aside className="flex flex-col gap-7 rounded-[20px] bg-cream p-[clamp(24px,3vw,40px)] min-[1100px]:sticky min-[1100px]:top-6">
            <div className="flex items-center gap-3.5">
              <Image src="/logo-q.png" alt="" width={44} height={44} className="size-11 rounded-full" />
              <div className="flex flex-col gap-0.5">
                <span className="text-[17px] font-medium">Seu pedido</span>
                <span className="text-[13px] text-muted">Para {PHONE_LABEL}</span>
              </div>
            </div>
            <dl className="m-0 flex flex-col">
              {summary.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 border-t border-line-soft py-4 text-[15px]">
                  <dt className="text-muted">{k}</dt>
                  <dd className="m-0 break-words text-right font-medium text-ink">{v}</dd>
                </div>
              ))}
            </dl>
            <ArrowPill
              tone="dark"
              size="lg"
              onClick={() => canSend && setConfirming(true)}
              disabled={!canSend}
              aria-haspopup="dialog"
              className="justify-between"
            >
              Enviar no WhatsApp
            </ArrowPill>
            <span
              role={canSend ? undefined : "status"}
              className={cn("text-[13px] leading-[1.5]", canSend ? "text-muted" : "text-terra-dark")}
            >
              {canSend
                ? "O horário é confirmado pelo João na conversa."
                : closed
                  ? "Escolha um dia de terça a sábado e um horário para enviar."
                  : "Escolha o dia e o horário para poder enviar."}
            </span>
          </aside>
        </div>
        <ConfirmDialog
          open={confirming && canSend}
          onClose={() => setConfirming(false)}
          href={waLink}
          details={[svc.name, dObj?.long, time].filter(Boolean).join(" · ")}
        />
      </div>
    </section>
  );
}
