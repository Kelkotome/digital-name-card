export const dynamic = "force-static";

export function GET() {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:Leow;Eugene;;;",
    "FN:Eugene Leow",
    "TITLE:Fractional SEO Consultant",
    "ORG:Marketing Agency Singapore",
    "EMAIL;TYPE=WORK,INTERNET:hello@marketingagency.sg",
    "URL;TYPE=WORK:https://freelanceseo.sg",
    "URL;TYPE=LinkedIn:https://www.linkedin.com/in/eugene-leow",
    "ADR;TYPE=WORK:;;;Singapore;;;Singapore",
    "END:VCARD",
    "",
  ].join("\r\n");

  return new Response(vcard, {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="eugene-leow.vcf"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
