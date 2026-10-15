"use client";

import { useState } from "react";
import { MAPS_EMBED_URL } from "@/lib/data";

/** Só carrega o mapa do Google depois do clique: mais leve e sem cookies de terceiros antes disso. */
export function MapEmbed() {
  const [on, setOn] = useState(false);
  if (on) {
    return (
      <iframe
        title="Mapa da Barbearia Quintana"
        src={MAPS_EMBED_URL}
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full min-h-[320px] w-full border-0 [filter:grayscale(0.5)_sepia(0.15)] sm:min-h-[420px]"
      />
    );
  }
  return (
    <div className="flex min-h-[320px] flex-col items-center justify-center gap-4 bg-sand px-6 text-center text-ink sm:min-h-[420px]">
      <p className="m-0 font-caslon text-[26px] leading-[1.15]">Av. Nossa Senhora da Consolação, 821</p>
      <p className="m-0 max-w-[26em] text-sm leading-[1.5] text-soft">
        Ao abrir o mapa, o Google pode registrar dados de acesso, conforme a política de privacidade dele.
      </p>
      <button
        type="button"
        onClick={() => setOn(true)}
        className="min-h-[46px] rounded-full border border-ink px-5 text-[15px] font-medium transition-colors hover:bg-ink hover:text-cream"
      >
        Ver mapa
      </button>
    </div>
  );
}
