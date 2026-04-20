const links = [
  {
    label: "Email",
    sub: "hello@marketingagency.sg",
    href: "mailto:hello@marketingagency.sg",
    external: false,
  },
  {
    label: "LinkedIn",
    sub: "in/eugene-leow",
    href: "https://www.linkedin.com/in/eugene-leow",
    external: true,
  },
  {
    label: "Website",
    sub: "freelanceseo.sg",
    href: "https://freelanceseo.sg",
    external: true,
  },
];

export default function ContactLinks() {
  return (
    <ul className="divide-y divide-ink/15">
      {links.map((l) => (
        <li key={l.label}>
          <a
            href={l.href}
            {...(l.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="group flex items-baseline justify-between gap-4 py-3.5 transition hover:text-accent"
          >
            <span className="font-serif text-lg italic text-ink/70 group-hover:text-accent">
              {l.label}
            </span>
            <span className="flex-1 -translate-y-[5px] border-b border-dotted border-ink/25 transition group-hover:border-accent/40" />
            <span className="text-[15px]">
              {l.sub}
              <span className="ml-2 text-ink/40 transition group-hover:text-accent">
                &rarr;
              </span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
