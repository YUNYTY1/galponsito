import { MapPin, Phone, MessageCircle, ArrowUpRight } from "lucide-react";
import Button from "./Button";
import { buildWhatsAppLink } from "../data/site";
import { BRANCHES_COPY } from "../data/branches";

export default function BranchCard({ branch }) {
  const { order, badge, name, address, phones, whatsapp, mapsUrl } = branch;
  const isMain = order === "01";

  return (
    <article className="card-anim relative flex flex-col overflow-hidden border border-transparent bg-[#0b0b0b] p-6 text-white hover:border-gold/40 sm:p-7">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-3 -top-4 select-none font-display text-[130px] leading-none text-white/[0.06]"
      >
        {order}
      </span>

      <div className="relative">
        {isMain ? (
          <p className="inline-block border border-gold/60 px-3 py-2 font-mono text-[11px] tracking-[0.3em] text-gold">
            {badge}
          </p>
        ) : (
          <p className="font-mono text-[11px] tracking-[0.3em] text-[#8c8c8c]">{badge}</p>
        )}

        <h3 className={`display text-4xl ${isMain ? "mt-4" : "mt-6"}`}>{name}</h3>

        <p className="mt-5 flex items-start gap-3 text-[15px] text-white/75">
          <MapPin size={17} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
          {address}
        </p>

        <ul className="mt-6 space-y-2">
          {phones.map((p) => (
            <li key={p.label}>
              <a
                href={`tel:+51${p.number.replace(/\D/g, "")}`}
                className="flex items-center justify-between gap-3 border border-white/10 px-4 py-4 text-[15px] transition-all duration-300 hover:border-gold/50 hover:bg-white/5"
                aria-label={`Llamar al ${p.label} ${p.number}`}
              >
                <span className="flex items-center gap-3 text-white/75">
                  <Phone size={16} strokeWidth={1.5} aria-hidden="true" />
                  {p.label}
                </span>
                <span className="font-medium tracking-wide text-white">{p.number}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mt-6 space-y-2.5 lg:mt-auto lg:pt-6">
        {whatsapp.map((w) => (
          <Button
            key={w.number}
            // TODO (conexión real): cada sucursal atiende su propio WhatsApp.
            href={buildWhatsAppLink(w.number, `Hola Galponcito a la Leña (${name}), quiero hacer un pedido.`)}
            external
            size="block"
          >
            <MessageCircle size={15} aria-hidden="true" />
            {w.label}
          </Button>
        ))}

        <div className="pt-5">
          {mapsUrl ? (
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-mono text-[11px] font-medium tracking-[0.22em] text-white/85 transition-colors hover:text-gold"
            >
              <MapPin size={15} strokeWidth={1.5} className="text-gold" aria-hidden="true" />
              {BRANCHES_COPY.mapsLabel}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          ) : (
            <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.22em] text-[#7a7a7a]">
              <MapPin size={15} strokeWidth={1.5} aria-hidden="true" />
              {BRANCHES_COPY.mapsSoon}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}