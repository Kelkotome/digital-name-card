import ContactLinks from "@/components/ContactLinks";
import QrCard from "@/components/QrCard";

const currentRoles = [
  {
    title: "Managing Director",
    org: "Marketing Agency Singapore",
    since: "Dec 2024",
  },
  {
    title: "Developer",
    org: "Stealth Mode",
    since: "Oct 2025",
  },
  {
    title: "Marketing Lead",
    org: "Conquest Creatives",
    since: "Nov 2022",
  },
];

const highlights = [
  "100+ articles authored across industries",
  "6× organic traffic growth for Project Green Ribbon",
  "Page-1 rankings in 21 countries",
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-xl flex-col items-center gap-8 px-5 py-12 sm:py-20">
      <section className="w-full rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm sm:p-10">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Digital name card
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Eugene Leow
          </h1>
          <p className="text-base text-[var(--muted)] sm:text-lg">
            Fractional SEO Consultant · Enterprise Sales &amp; Account Management
          </p>
          <p className="text-sm text-[var(--muted)]">Singapore</p>
        </div>

        <p className="mt-6 text-[15px] leading-relaxed text-[var(--foreground)]/90">
          SEO and growth operator helping B2B and high-trust brands scale
          visibility, generate qualified leads, and build authoritative digital
          ecosystems. I lead strategy at Marketing Agency Singapore and advise
          across healthcare, finance, SaaS, and professional services.
        </p>

        <div className="mt-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
            Currently
          </h2>
          <ul className="mt-3 space-y-2">
            {currentRoles.map((r) => (
              <li
                key={r.org}
                className="flex items-baseline justify-between gap-4 text-sm"
              >
                <span>
                  <span className="font-medium">{r.title}</span>
                  <span className="text-[var(--muted)]"> · {r.org}</span>
                </span>
                <span className="shrink-0 text-xs text-[var(--muted)]">
                  {r.since}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
            Highlights
          </h2>
          <ul className="mt-3 space-y-1.5 text-sm">
            {highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span className="text-accent">→</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <ContactLinks />
        </div>

        <div className="mt-6">
          <a
            href="/vcard"
            className="inline-flex w-full items-center justify-center rounded-xl border border-[var(--border)] bg-transparent px-4 py-3 text-sm font-medium transition hover:bg-[var(--border)]/40"
          >
            Save to contacts (.vcf)
          </a>
        </div>
      </section>

      <section className="w-full rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm sm:p-10">
        <QrCard />
      </section>

      <footer className="pb-4 text-xs text-[var(--muted)]">
        Scan the QR to share this card.
      </footer>
    </main>
  );
}
