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
      color: { dark: "#171512", light: "#ffffff" },
    })
      .then(setDataUrl)
      .catch(() => setDataUrl(null));
  }, []);

  return (
    <div className="flex flex-col items-start gap-4">
      <div className="flex h-44 w-44 items-center justify-center border border-ink/20 bg-white p-2">
        {dataUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={dataUrl}
            alt={`QR code pointing to ${url}`}
            className="h-full w-full"
          />
        ) : (
          <div className="h-full w-full animate-pulse bg-ink/10" />
        )}
      </div>

      {url && (
        <p className="break-all font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
          {url}
        </p>
      )}

      <a
        href={dataUrl ?? "#"}
        download="eugene-leow-qr.png"
        aria-disabled={!dataUrl}
        className={`inline-block border-b border-ink/70 pb-1 text-base transition hover:border-accent hover:text-accent ${
          dataUrl ? "" : "pointer-events-none opacity-50"
        }`}
      >
        Download QR (.png) &nbsp;&rarr;
      </a>
    </div>
  );
}
