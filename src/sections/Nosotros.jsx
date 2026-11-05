import { ArrowUpRight } from "lucide-react";
import Container from "../components/Container";
import SectionLabel from "../components/SectionLabel";
import StatItem from "../components/StatItem";
import ImageCarousel from "../components/ImageCarousel";
import { NOSOTROS } from "../data/content";
import { NOSOTROS_SLIDES, NOSOTROS_DETAIL } from "../data/images";

export default function Nosotros() {
  return (
    <section id="nosotros" aria-labelledby="nosotros-title" className="bg-cream py-16 text-ink lg:py-24">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1fr] lg:gap-16">
          {/* Imágenes: carrusel de 3 + imagen pequeña fija */}
          <div className="relative pb-16 pr-10 sm:pr-16">
            <div className="relative">
              <ImageCarousel slides={NOSOTROS_SLIDES} className="aspect-[4/4.6] w-full" align="left" />
              <p className="absolute left-0 top-8 z-10 bg-wine px-4 py-3 font-mono text-[11px] tracking-[0.3em] text-white">
                {NOSOTROS.tag}
              </p>
            </div>
            <img
              src={NOSOTROS_DETAIL.src}
              alt={NOSOTROS_DETAIL.alt}
              className="absolute bottom-0 right-0 z-10 aspect-square w-[34%] border-[5px] border-white object-cover shadow-xl"
              width="400"
              height="400"
              loading="lazy"
            />
          </div>

          {/* Texto */}
          <div>
            <SectionLabel label={NOSOTROS.label} number={NOSOTROS.number} />

            <h2 id="nosotros-title" className="mt-7 text-ink">
              <span className="display block text-[clamp(2.6rem,7vw,5.5rem)]">
                {NOSOTROS.titleLine1Before}{" "}
                <span className="font-serif text-[0.95em] font-normal normal-case italic tracking-normal text-wine">
                  {NOSOTROS.titleLine1Accent}
                </span>{" "}
                {NOSOTROS.titleLine1After}
              </span>
              <span className="display block text-[clamp(2.6rem,7vw,5.5rem)]">{NOSOTROS.titleLine2}</span>
            </h2>

            <div className="mt-8 max-w-[40rem] space-y-6 text-base leading-[1.75] text-[#4d4741] sm:text-[17px]">
              {NOSOTROS.paragraphs.map((p, i) => (
                <p key={i}>
                  {p.strong && <strong className="font-semibold text-ink">{p.strong}</strong>}
                  {p.rest}
                </p>
              ))}
            </div>

            <div className="mt-10 grid max-w-[40rem] grid-cols-1 border-y border-[#d9d2c7] sm:grid-cols-3">
              {NOSOTROS.stats.map((s) => (
                <StatItem key={s.label} {...s} />
              ))}
            </div>

            <a
              href="#especialidad"
              className="group mt-10 inline-flex items-center gap-4 font-mono text-xs font-medium tracking-[0.25em] text-ink"
            >
              {NOSOTROS.cta}
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/25 transition-all duration-300 group-hover:rotate-45 group-hover:bg-ink group-hover:text-white">
                <ArrowUpRight size={16} aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}