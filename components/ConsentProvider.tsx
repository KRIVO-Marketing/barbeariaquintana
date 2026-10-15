"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, useSyncExternalStore, type ReactNode } from "react";
import {
  CONSENT_EVENT,
  CONSENT_OPEN_EVENT,
  clearTrackingCookies,
  parseConsent,
  readRaw,
  writeConsent,
  type Consent,
} from "@/lib/consent";

type Ctx = {
  /** null = ainda não decidiu. */
  consent: Consent | null;
  ready: boolean;
  panelOpen: boolean;
  openPanel: () => void;
  closePanel: () => void;
  save: (c: Consent) => void;
};
const ConsentCtx = createContext<Ctx | null>(null);

const SSR = "__ssr__";
const subscribe = (cb: () => void) => {
  window.addEventListener(CONSENT_EVENT, cb);
  return () => window.removeEventListener(CONSENT_EVENT, cb);
};

export function ConsentProvider({ children }: { children: ReactNode }) {
  const raw = useSyncExternalStore(subscribe, readRaw, () => SSR);
  const ready = raw !== SSR;
  const consent = useMemo(() => (ready ? parseConsent(raw) : null), [raw, ready]);
  const [panelOpen, setPanelOpen] = useState(false);

  useEffect(() => {
    const open = () => setPanelOpen(true);
    window.addEventListener(CONSENT_OPEN_EVENT, open);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, open);
  }, []);

  const save = useCallback(
    (next: Consent) => {
      const revoked = (consent?.analytics && !next.analytics) || (consent?.marketing && !next.marketing);
      writeConsent(next);
      setPanelOpen(false);
      if (revoked) {
        // Scripts já carregados não dá para "descarregar": limpa os cookies e recarrega.
        clearTrackingCookies();
        location.reload();
      }
    },
    [consent],
  );

  const value = useMemo<Ctx>(
    () => ({
      consent,
      ready,
      panelOpen,
      openPanel: () => setPanelOpen(true),
      closePanel: () => setPanelOpen(false),
      save,
    }),
    [consent, ready, panelOpen, save],
  );
  return <ConsentCtx.Provider value={value}>{children}</ConsentCtx.Provider>;
}

export function useConsent() {
  const ctx = useContext(ConsentCtx);
  if (!ctx) throw new Error("useConsent fora do ConsentProvider");
  return ctx;
}
