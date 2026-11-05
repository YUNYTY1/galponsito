import { MapPin, ArrowRight } from "lucide-react";
import Container from "../components/Container";
import Button from "../components/Button";
import ImageCarousel from "../components/ImageCarousel";
import { HERO } from "../data/content";
import { HERO_SLIDES } from "../data/images";
import { MAIN_WHATSAPP, buildWhatsAppLink } from "../data/site";
import logo from "../assets/logo.jpg";

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-ink pb-16 pt-28 lg:flex lg:min-h-[100svh] lg:items-center lg:pb-20 lg:pt-32"
    >
      {/* Resplandor rojizo de fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_45%,rgba(122,22,22,0.35),transparent_60%)]"
      />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
          {/* Texto */}
          <div>
            <p className="flex items-center gap-4 font-mono text-[11px] tracking-[0.3em] text-gold sm:text-xs">
              <span aria-hidden="true" className="h-px w-10 bg-gold/60 sm:w-12" />
              {HERO.eyebrow}
            </p>

            <h1 id="hero-title" className="mt-8">
              <span className="display block text-[clamp(3.6rem,15vw,7.5rem)] text-[#f5f2ed] lg:text-[clamp(5rem,9.6vw,10.6rem)]">
                {HERO.titleMain}
              </span>
              <span className="display text-outline-gold -mt-[0.02em] block text-[clamp(3.6rem,15vw,7.5rem)] lg:text-[clamp(5rem,9.6vw,10.6rem)]">
                {HERO.titleOutline}
              </span>
            </h1>

            <p className="mt-10 font-serif text-2xl italic text-[#f5f2ed] sm:text-[32px]">
              {HERO.tagline}
            </p>

            <p className="mt-6 max-w-[34rem] text-base leading-relaxed text-white/65 sm:text-[17px]">
              {HERO.text}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href={buildWhatsAppLink(MAIN_WHATSAPP)} external>
                {HERO.primaryCta}
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
              <Button href="#sucursales" variant="outline">
                <MapPin size={16} aria-hidden="true" />
                {HERO.secondaryCta}
              </Button>
            </div>

            <dl className="mt-12 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-[auto_auto] sm:gap-0 lg:max-w-[46rem]">
              <div className="sm:pr-8">
                <dt className="font-mono text-[11px] tracking-[0.3em] text-[#8a8a8a]">
                  {HERO.infoHours.label}
                </dt>
                <dd className="mt-2 text-[15px] text-white">{HERO.infoHours.value}</dd>
              </div>
              <div className="sm:border-l sm:border-white/10 sm:pl-8">
                <dt className="font-mono text-[11px] tracking-[0.3em] text-[#8a8a8a]">
                  {HERO.infoDelivery.label}
                </dt>
                <dd className="mt-2 text-[15px] text-white">{HERO.infoDelivery.value}</dd>
              </div>
            </dl>
          </div>

          {/* Carrusel en arco (4 imágenes, cambia cada 3.5 s) */}
          <div className="relative mx-auto w-full max-w-[640px] lg:max-w-none">
            <div className="overflow-hidden rounded-t-[999px] border border-gold/30">
              <ImageCarousel slides={HERO_SLIDES} className="aspect-[1/1.02] w-full" />
            </div>

            <img
              src={logo}
              alt={HERO.logoAlt}
              className="absolute -left-2 top-6 z-10 h-20 w-20 rounded-full border-2 border-ink object-cover shadow-xl sm:-left-6 sm:top-4 sm:h-28 sm:w-28 lg:-left-8"
              width="120"
              height="120"
            />

            <p
              aria-hidden="true"
              className="absolute -left-5 bottom-10 hidden font-mono text-[11px] tracking-[0.35em] text-[#6e6e6e] [writing-mode:vertical-rl] xl:block"
            >
              {HERO.verticalLabel}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}