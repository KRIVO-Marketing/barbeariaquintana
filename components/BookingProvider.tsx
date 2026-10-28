"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type Ctx = {
  services: string[];
  /** Escolhe só este serviço (usado pelos botões de "agendar"). */
  setService: (id: string) => void;
  /** Liga/desliga um serviço. */
  toggleService: (id: string) => void;
};
const BookingCtx = createContext<Ctx | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [services, setServices] = useState<string[]>([]);
  const setService = (id: string) => setServices([id]);
  const toggleService = (id: string) =>
    setServices((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]));
  return <BookingCtx.Provider value={{ services, setService, toggleService }}>{children}</BookingCtx.Provider>;
}

export function useBooking() {
  const ctx = useContext(BookingCtx);
  if (!ctx) throw new Error("useBooking fora do BookingProvider");
  return ctx;
}

export function scrollToBooking() {
  const el = document.getElementById("agendar");
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 12, behavior: "smooth" });
}
