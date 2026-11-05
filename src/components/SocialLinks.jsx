import { Facebook, Instagram } from "lucide-react";
import { SOCIALS } from "../data/site";

const ICONS = { facebook: Facebook, instagram: Instagram };

// variant "icon": círculos con solo el ícono (footer). variant "pill": ícono + nombre (contacto).
export default function SocialLinks({ variant = "icon" }) {
  return (
    <ul className="flex flex-wrap items-center gap-3">
      {SOCIALS.map(({ id, label, href }) => {
        const Icon = ICONS[id];
        return (
          <li key={id}>
            {variant === "icon" ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:text-gold hover:shadow-[0_10px_24px_-10px_rgba(201,164,92,0.5)]"
              >
                <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
              </a>
            ) : (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-full border border-white/15 px-5 py-3 text-sm text-white/85 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:text-gold hover:shadow-[0_10px_24px_-10px_rgba(201,164,92,0.5)]"
              >
                <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
                {label}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
}