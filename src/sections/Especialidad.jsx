import { BookOpen } from "lucide-react";
import Container from "../components/Container";
import SectionLabel from "../components/SectionLabel";
import FeatureItem from "../components/FeatureItem";
import Button from "../components/Button";
import { ESPECIALIDAD } from "../data/content";
import img1 from "../assets/especialidad-1.jpeg";
import img2 from "../assets/especialidad-2.jpeg";

export default function Especialidad() {
  const { menu } = ESPECIALIDAD;

  return (
    <section
      id="especialidad"
      aria-labelledby="especialidad-title"
      className="bg-cream pb-16 text-ink lg:pb-24 lg:pt-6"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-10">
          {/* Texto */}
          <div className="lg:pt-8">
            <SectionLabel label={ESPECIALIDAD.label} number={ESPECIALIDAD.number} />

            <h2 id="especialidad-title" className="mt-7">
              <span className="display block text-[clamp(2.8rem,8vw,6.2rem)] text-ink">
                {ESPECIALIDAD.titleMain}
              </span>
              <span className="block font-serif text-[clamp(3rem,8vw,6.2rem)] italic leading-[1] text-wine">
                {ESPECIALIDAD.titleAccent}
              </span>
            </h2>

            <p className="mt-8 max-w-[38rem] text-base leading-[1.75] text-[#4d4741] sm:text-[17px]">
              {ESPECIALIDAD.text}
            </p>

            <hr className="my-10 max-w-[40rem] border-[#d9d2c7]" />

            <blockquote>
              <p className="font-serif text-2xl italic text-ink sm:text-[30px]">{ESPECIALIDAD.quote}</p>
              <footer className="mt-5 font-mono text-[11px] tracking-[0.3em] text-[#7a6e62]">
                {ESPECIALIDAD.quoteTag}
              </footer>
            </blockquote>
          </div>

          {/* Imágenes */}
          <div className="relative pb-14 pl-10 sm:pl-16 lg:pl-20">
            <img
              src={img1}
              alt={ESPECIALIDAD.imageAlt}
              className="aspect-[4/5] w-full object-cover"
              width="900"
              height="1125"
              loading="lazy"
            />
            <img
              src={img2}
              alt={ESPECIALIDAD.imageAlt2}
              className="absolute bottom-0 left-0 aspect-square w-[38%] border-[5px] border-cream object-cover"
              width="500"
              height="500"
              loading="lazy"
            />
            {ESPECIALIDAD.verticalLabel && (
              <p
                aria-hidden="true"
                className="absolute -right-1 top-0 hidden font-mono text-[11px] tracking-[0.35em] text-[#8a7f73] [writing-mode:vertical-rl] xl:block"
              >
                {ESPECIALIDAD.verticalLabel}
              </p>
            )}
          </div>
        </div>

        {/* Características + carta */}
        <div className="mt-6 grid gap-10 border-t border-[#d9d2c7] pt-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {ESPECIALIDAD.features.map((f) => (
            <FeatureItem key={f.number} {...f} />
          ))}

          <aside className="card-anim flex flex-col border border-transparent bg-ink p-7 text-white hover:border-gold/40 sm:col-span-2 lg:col-span-1">
            <p className="font-mono text-[11px] tracking-[0.3em] text-gold">{menu.label}</p>
            <h3 className="mt-5 font-serif text-2xl italic">{menu.title}</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-white/70">{menu.text}</p>
            <Button href={menu.href} external variant="outline" size="sm" className="mt-7 self-start">
              <BookOpen size={16} aria-hidden="true" />
              {menu.cta}
            </Button>
          </aside>
        </div>
      </Container>
    </section>
  );
}