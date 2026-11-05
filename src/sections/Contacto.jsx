import { Clock, MessageCircle } from "lucide-react";
import Container from "../components/Container";
import SectionLabel from "../components/SectionLabel";
import Button from "../components/Button";
import SocialLinks from "../components/SocialLinks";
import { CONTACTO, HORARIOS } from "../data/content";
import { CONTACT_WHATSAPP, buildWhatsAppLink, formatPhone } from "../data/site";

export default function Contacto() {
  return (
    <section
      id="contacto"
      aria-label="Horarios y contacto"
      className="bg-cream py-16 text-ink lg:py-24"
    >
      <Container>
        <div className="overflow-hidden rounded-3xl bg-ink text-white shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]">
          <div className="grid lg:grid-cols-2">
            {/* Horarios */}
            <div className="p-8 sm:p-12 lg:p-14">
              <SectionLabel
                label={HORARIOS.label}
                number={HORARIOS.number}
                tone="light"
                icon={<Clock size={18} strokeWidth={1.5} aria-hidden="true" />}
              />
              <h2 className="display mt-7 text-[clamp(2.4rem,5vw,4.2rem)] text-[#f5f2ed]">
                <span className="block">{HORARIOS.titleLine1}</span>
                <span className="block">{HORARIOS.titleLine2}</span>
              </h2>

              <p className="mt-10 font-mono text-[11px] tracking-[0.3em] text-[#8a8a8a]">{HORARIOS.days}</p>
              <p className="display mt-3 flex flex-wrap items-center gap-x-3 text-[clamp(1.9rem,3.4vw,3.2rem)] text-[#f5f2ed]">
                <span>{HORARIOS.open}</span>
                <span aria-hidden="true" className="h-[0.12em] w-[0.5em] bg-gold" />
                <span className="sr-only">a</span>
                <span>{HORARIOS.close}</span>
              </p>
              <p className="mt-4 text-[15px] text-white/60">{HORARIOS.note}</p>
            </div>

            {/* Contacto */}
            <div className="border-t border-white/10 bg-white/[0.03] p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-14">
              <SectionLabel label={CONTACTO.label} number={CONTACTO.number} tone="light" />
              <h2 className="mt-7">
                <span className="display block text-[clamp(2rem,4vw,3.4rem)] text-[#f5f2ed]">
                  {CONTACTO.titleMain}
                </span>
                <span className="block font-serif text-[clamp(2.2rem,4vw,3.4rem)] italic leading-[1.1] text-gold">
                  {CONTACTO.titleAccent}
                </span>
              </h2>

              <p className="mt-6 max-w-[30rem] text-[15px] leading-relaxed text-white/65">{CONTACTO.text}</p>

              <a
                href={`tel:+51${CONTACT_WHATSAPP}`}
                className="display mt-8 block text-5xl text-white transition-colors hover:text-gold sm:text-6xl"
                aria-label={`Llamar al ${formatPhone(CONTACT_WHATSAPP)}`}
              >
                {formatPhone(CONTACT_WHATSAPP)}
              </a>

              <Button
                // TODO (conexión real): WhatsApp de consultas generales (ver CONTACT_WHATSAPP en data/site.js).
                href={buildWhatsAppLink(CONTACT_WHATSAPP, CONTACTO.whatsappMessage)}
                external
                className="mt-7"
              >
                <MessageCircle size={16} aria-hidden="true" />
                {CONTACTO.whatsappCta}
              </Button>

              <div className="mt-9 border-t border-white/10 pt-7">
                <p className="mb-4 font-mono text-[11px] tracking-[0.3em] text-[#8a8a8a]">
                  {CONTACTO.socialsLabel}
                </p>
                <SocialLinks variant="pill" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}