"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";

export default function QrCard() {
  const [dataUrl, setDataUrl] = useState<string | null>(null);
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    const origin = window.location.origin;
    setUrl(origin);
    QRCode.toDataURL(origin, {
      width: 512,
      margin: 2,
      errorCorrectionLevel: "M",
      color: { dark: "#0f172a", light: "#ffffff" },
    })
      .then(setDataUrl)
      .catch(() => setDataUrl(null));
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
        Share this card
      </h2>

      <div className="flex h-64 w-64 items-center justify-center overflow-hidden rounded-2xl border border-[var(--border)] bg-white p-3">
        {dataUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={dataUrl}
            alt={`QR code pointing to ${url}`}
            className="h-full w-full"
          />
        ) : (
          <div className="h-full w-full animate-pulse rounded-xl bg-[var(--border)]/60" />
        )}
      </div>

      {url && (
        <p className="break-all text-center text-xs text-[var(--muted)]">
          {url}
        </p>
      )}

      <a
        href={dataUrl ?? "#"}
        download="eugene-leow-qr.png"
        aria-disabled={!dataUrl}
        className={`inline-flex w-full items-center justify-center rounded-xl bg-accent px-4 py-3 text-sm font-medium text-white transition hover:opacity-90 ${
          dataUrl ? "" : "pointer-events-none opacity-50"
        }`}
      >
        Download QR as PNG
      </a>
    </div>
  );
}
