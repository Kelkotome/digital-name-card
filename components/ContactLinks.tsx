const links = [
  {
    label: "Email",
    href: "mailto:hello@marketingagency.sg",
    sub: "hello@marketingagency.sg",
    external: false,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/eugene-leow",
    sub: "in/eugene-leow",
    external: true,
  },
  {
    label: "Website",
    href: "https://freelanceseo.sg",
    sub: "freelanceseo.sg",
    external: true,
  },
];

export default function ContactLinks() {
  return (
    <div className="grid gap-2">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          {...(l.external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--background)]/40 px-4 py-3 text-sm transition hover:border-accent hover:bg-accent/5"
        >
          <span className="font-medium">{l.label}</span>
          <span className="text-[var(--muted)]">{l.sub}</span>
        </a>
      ))}
    </div>
  );
}
