import Container from "../components/Container";
import SectionLabel from "../components/SectionLabel";
import BranchCard from "../components/BranchCard";
import { BRANCHES, BRANCHES_COPY } from "../data/branches";

export default function Sucursales() {
  return (
    <section id="sucursales" aria-labelledby="sucursales-title" className="bg-cream py-16 text-ink lg:py-24">
      <Container>
        <div className="grid items-end gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionLabel label={BRANCHES_COPY.label} number={BRANCHES_COPY.number} />
            <h2 id="sucursales-title" className="display mt-7 text-[clamp(2.8rem,8vw,6.2rem)] text-ink">
              {BRANCHES_COPY.title}
            </h2>
          </div>
          <p className="max-w-[32rem] text-base leading-relaxed text-[#4d4741] lg:pb-2 lg:text-[17px]">
            {BRANCHES_COPY.text}
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {BRANCHES.map((b) => (
            <BranchCard key={b.id} branch={b} />
          ))}
        </div>
      </Container>
    </section>
  );
}
