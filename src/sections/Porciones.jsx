import Container from "../components/Container";
import SectionLabel from "../components/SectionLabel";
import PortionCard from "../components/PortionCard";
import { PORTIONS, PORTIONS_COPY } from "../data/portions";
import { PORCIONES_BG } from "../data/images";

export default function Porciones() {
  return (
    <section id="porciones" aria-labelledby="porciones-title" className="bg-ink py-16 lg:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-white/10">
          {/* Imagen de fondo + capa oscura (para que se vea, pero sin quitar legibilidad).
              Si quieres la foto más visible, baja los números de /80 /60 /85 */}
          <img
            src={PORCIONES_BG}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/60 to-ink/85"
          />

          <div className="relative p-6 sm:p-10 lg:p-14">
            <div className="grid items-end gap-8 lg:grid-cols-2 lg:gap-16">
              <div>
                <SectionLabel label={PORTIONS_COPY.label} number={PORTIONS_COPY.number} tone="light" />
                <h2 id="porciones-title" className="mt-7">
                  <span className="display block text-[clamp(2.6rem,6.5vw,5.2rem)] text-white">
                    {PORTIONS_COPY.titleMain}
                  </span>
                  <span className="block font-serif text-[clamp(2.6rem,6.5vw,5.2rem)] italic leading-[1.05] text-gold">
                    {PORTIONS_COPY.titleAccent}
                  </span>
                </h2>
              </div>
              <p className="max-w-[34rem] text-base leading-relaxed text-white/75 lg:pb-3 lg:text-[17px]">
                {PORTIONS_COPY.text}
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {PORTIONS.map((p) => (
                <PortionCard key={p.id} portion={p} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}