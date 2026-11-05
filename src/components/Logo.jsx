import logo from "../assets/logo.jpg";
import { SITE } from "../data/site";

export default function Logo({ size = "md", asLink = true }) {
  const imgSize = size === "lg" ? "h-16 w-16" : "h-12 w-12 sm:h-14 sm:w-14";

  const content = (
    <>
      <img
        src={logo}
        alt="Logo de Galponcito a la Leña"
        className={`${imgSize} rounded-full object-cover`}
        width="56"
        height="56"
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl uppercase tracking-tight text-white sm:text-2xl">
          {SITE.shortName}
        </span>
        <span className="mt-1 font-mono text-[10px] tracking-[0.35em] text-gold">
          {SITE.subtitle}
        </span>
      </span>
    </>
  );

  if (!asLink) return <div className="flex items-center gap-3">{content}</div>;

  return (
    <a href="#inicio" className="flex items-center gap-3" aria-label="Galponcito a la Leña, ir al inicio">
      {content}
    </a>
  );
}
