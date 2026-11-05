import Container from "../components/Container";
import Logo from "../components/Logo";
import SocialLinks from "../components/SocialLinks";
import { FOOTER } from "../data/content";
import { FOOTER_LINKS } from "../data/navigation";
import { BRANCHES } from "../data/branches";
import { FOOTER_PHONES, SITE } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink pb-24 pt-16 sm:pb-10">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1.1fr_0.9fr]">
          <div>
            <Logo asLink={false} />
            <p className="mt-6 max-w-sm text-base leading-relaxed text-white/60">{FOOTER.text}</p>
            <div className="mt-8">
              <SocialLinks variant="icon" />
            </div>
          </div>

          <nav aria-label="Navegación del pie de página">
            <h2 className="font-mono text-[11px] tracking-[0.3em] text-gold">{FOOTER.navTitle}</h2>
            <ul className="mt-6 space-y-3">
              {FOOTER_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[15px] text-white/65 transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-[11px] tracking-[0.3em] text-gold">{FOOTER.branchesTitle}</h2>
            <ul className="mt-6 space-y-4">
              {BRANCHES.map((b) => (
                <li key={b.id}>
                  <p className="text-[15px] text-white">
                    {b.order} · {b.name.charAt(0) + b.name.slice(1).toLowerCase()}
                  </p>
                  <p className="mt-1 text-sm text-white/55">{b.address}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-mono text-[11px] tracking-[0.3em] text-gold">{FOOTER.contactTitle}</h2>
            <ul className="mt-6 space-y-3 text-[17px] text-white/75">
              {FOOTER_PHONES.map((p) => (
                <li key={p}>
                  <a href={`tel:+51${p.replace(/\D/g, "")}`} className="hover:text-white">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-white/55">
              {FOOTER.hoursLine1}
              <br />
              {FOOTER.hoursLine2}
            </p>
            <p className="mt-4 text-sm text-white/55">{FOOTER.area}</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/55">
            © {SITE.year} {SITE.name}. {FOOTER.rights}
          </p>
          <p className="font-mono text-[11px] tracking-[0.3em] text-[#7a7a7a]">{FOOTER.imagesNote}</p>
        </div>
      </Container>
    </footer>
  );
}
