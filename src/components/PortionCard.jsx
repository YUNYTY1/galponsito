import { MessageCircle } from "lucide-react";
import Button from "./Button";
import { MAIN_WHATSAPP, buildWhatsAppLink } from "../data/site";

export default function PortionCard({ portion }) {
  const { forLabel, badge, title, subtitle, watermark, price, items, featured, message } = portion;

  return (
    <article
      className={`card-anim relative flex flex-col overflow-hidden border p-7 backdrop-blur-sm sm:p-8 ${
        featured
          ? "border-gold/50 bg-gradient-to-b from-[#2a0a0a]/90 to-[#150606]/90 hover:border-gold"
          : "border-white/10 bg-black/50 hover:border-gold/50"
      }`}
    >
      {/* Número grande de fondo */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-2 -top-3 select-none font-display text-[120px] leading-none text-white/[0.05] sm:text-[140px]"
      >
        {watermark}
      </span>

      <div className="relative">
        {featured ? (
          <p className="inline-block border border-gold/60 px-3 py-2 font-mono text-[11px] tracking-[0.25em] text-gold">
            {badge}
          </p>
        ) : (
          <p className="font-mono text-[11px] tracking-[0.3em] text-[#a0a0a0]">{forLabel}</p>
        )}

        <h3 className={`display text-4xl text-white ${featured ? "mt-5" : "mt-6"}`}>{title}</h3>
        {subtitle && <p className="mt-2 text-sm text-white/60">{subtitle}</p>}

        <p className={`font-mono text-[11px] tracking-[0.3em] text-gold ${subtitle ? "mt-7" : "mt-8"}`}>
          {price}
        </p>

        <hr className="my-6 border-white/10" />

        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-3 text-[15px] text-white/80">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mt-10 pt-2 lg:mt-auto">
        <Button
          // TODO (conexión real): hoy abre WhatsApp con el mensaje de la porción. Cambiar si se agrega carrito o pedidos en línea.
          href={buildWhatsAppLink(MAIN_WHATSAPP, message)}
          external
          variant={featured ? "primary" : "outlineDark"}
          size="block"
        >
          <MessageCircle size={16} aria-hidden="true" />
          PEDIR POR WHATSAPP
        </Button>
      </div>
    </article>
  );
}