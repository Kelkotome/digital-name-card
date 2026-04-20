import ContactLinks from "@/components/ContactLinks";
import QrCard from "@/components/QrCard";

const roles = [
  { role: "Managing Director", org: "Marketing Agency Singapore" },
  { role: "Developer", org: "Stealth Mode" },
  { role: "Marketing Lead", org: "Conquest Creatives" },
];

const highlights = [
  "100+ articles authored across industries",
  "6× organic traffic growth for Project Green Ribbon",
  "Page-1 rankings in 21 countries",
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-xl flex-col px-6 py-16 sm:py-24">
      <header className="border-y border-ink/25 py-3">
        <p className="text-center text-[10px] font-medium uppercase tracking-[0.4em] text-ink/70">
          Consultant &middot; Singapore
        </p>
      </header>

      <section className="mt-16">
        <h1 className="font-serif text-[72px] leading-[0.95] tracking-tight sm:text-[96px]">
          Eugene
          <br />
          Leow<span className="text-accent">.</span>
        </h1>
        <p className="mt-6 font-serif text-2xl italic leading-snug text-ink/85 sm:text-3xl">
          Fractional SEO Consultant
          <br />
          &amp; Enterprise Sales Lead
        </p>
      </section>

      <section className="mt-12">
        <p className="text-[15px] leading-[1.75] text-ink/80">
          SEO and growth operator helping B2B and high-trust brands scale
          visibility, generate qualified leads, and build authoritative digital
          ecosystems. I lead strategy at Marketing Agency Singapore and advise
          across healthcare, finance, SaaS, and professional services.
        </p>
      </section>

      <Section label="Currently">
        <ul className="space-y-3">
          {roles.map((r) => (
            <li
              key={r.org}
              className="flex items-baseline gap-3 font-serif text-lg"
            >
              <span className="italic text-ink/70">{r.role}</span>
              <span className="flex-1 -translate-y-[5px] border-b border-dotted border-ink/30" />
              <span>{r.org}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section label="Highlights">
        <ul className="space-y-2.5 text-[15px] leading-relaxed text-ink/85">
          {highlights.map((h, i) => (
            <li key={h} className="flex items-baseline gap-4">
              <span className="font-serif text-sm italic tabular-nums text-ink/50">
                0{i + 1}
              </span>
              <span className="flex-1">{h}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section label="Contact">
        <ContactLinks />
      </Section>

      <Section label="Scan to share">
        <QrCard />
      </Section>

      <Section label="Save">
        <a
          href="/vcard"
          className="inline-block border-b border-ink/70 pb-1 text-base transition hover:border-accent hover:text-accent"
        >
          Download vCard (.vcf) &nbsp;&rarr;
        </a>
      </Section>

      <footer className="mt-24 border-t border-ink/20 pt-4 text-[10px] uppercase tracking-[0.4em] text-ink/45">
        &copy; Eugene Leow
      </footer>
    </main>
  );
}

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-14 border-t border-ink/20 pt-5">
      <h2 className="mb-5 text-[10px] font-medium uppercase tracking-[0.4em] text-ink/55">
        — {label}
      </h2>
      {children}
    </section>
  );
}
