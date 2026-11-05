import { useState } from "react";
import { Bike, MapPin, MessageCircle, ZoomIn, X } from "lucide-react";
import Container from "../components/Container";
import SectionLabel from "../components/SectionLabel";
import Button from "../components/Button";
import { DELIVERY } from "../data/content";
import { MAIN_WHATSAPP, buildWhatsAppLink } from "../data/site";
import deliveryImg from "../assets/delivery.jpg";
import logo from "../assets/logo.jpg";

const PILL_ICONS = { bike: Bike, pin: MapPin };

export default function Delivery() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="delivery"
      aria-labelledby="delivery-title"
      className="bg-gradient-to-br from-[#3d0b0b] via-[#2b0707] to-[#160505] py-16 lg:py-24 pb-28 lg:pb-36"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          {/* Card con todo el texto */}
          <div className="rounded-3xl border border-gold/20 bg-black/35 p-7 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)] backdrop-blur-sm sm:p-10 lg:p-12">
            <SectionLabel label={DELIVERY.label} number={DELIVERY.number} tone="light" />

            <h2 id="delivery-title" className="display mt-8 text-[clamp(2.4rem,6vw,4.8rem)] text-[#f5f2ed]">
              <span className="block">{DELIVERY.titleLine1}</span>
              <span className="block">{DELIVERY.titleLine2}</span>
            </h2>

            <p className="mt-7 max-w-[36rem] text-base leading-[1.75] text-white/70 sm:text-[17px]">
              {DELIVERY.textBefore}
              <strong className="font-semibold text-white">{DELIVERY.textStrong}</strong>
              {DELIVERY.textAfter}
            </p>

            <ul className="mt-7 flex flex-wrap gap-3">
              {DELIVERY.pills.map((pill) => {
                const Icon = PILL_ICONS[pill.icon];
                return (
                  <li
                    key={pill.text}
                    className="flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white/85 transition-colors duration-300 hover:border-gold/50"
                  >
                    <Icon size={16} strokeWidth={1.5} className="text-gold" aria-hidden="true" />
                    {pill.text}
                  </li>
                );
              })}
            </ul>

            <Button href={buildWhatsAppLink(MAIN_WHATSAPP)} external className="mt-9">
              <MessageCircle size={16} aria-hidden="true" />
              {DELIVERY.cta}
            </Button>
          </div>

          {/* Columna de la imagen original con opción de ampliar */}
          <div className="relative mx-auto w-full max-w-[460px] lg:max-w-none group cursor-pointer" onClick={() => setIsOpen(true)}>
            
            {/* Mensaje flotante indicando que se puede hacer clic */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-2 rounded-full bg-black/75 border border-gold/40 px-4 py-2 text-xs font-medium text-white shadow-lg backdrop-blur-md transition-transform duration-300 group-hover:scale-105">
              <ZoomIn size={14} className="text-gold animate-pulse" />
              <span>Haz clic para ver completo</span>
            </div>

            {/* Contenedor de la imagen */}
            <div className="overflow-hidden rounded-t-[999px] border border-gold/25 transition-all duration-300 group-hover:border-gold/60 shadow-xl">
              <img
                src={deliveryImg}
                alt={DELIVERY.imageAlt}
                className="aspect-[4/5.2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Logo superpuesto */}
            <img
              src={logo}
              alt="Logo de Galponcito a la Leña"
              className="absolute -bottom-6 left-4 h-20 w-20 rounded-full border-2 border-[#2b0707] object-cover shadow-2xl sm:h-24 sm:w-24 z-10"
              loading="lazy"
            />
          </div>
        </div>
      </Container>

      {/* Modal / Vista Pantalla Completa al hacer Clic */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="relative max-h-[90vh] max-w-3xl overflow-y-auto rounded-2xl border border-gold/40 bg-[#160505] p-3 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón Cerrar */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 border border-gold/40 text-white transition-colors hover:bg-gold hover:text-black"
              aria-label="Cerrar imagen"
            >
              <X size={20} />
            </button>

            {/* Imagen completa sin recortes */}
            <img
              src={deliveryImg}
              alt={DELIVERY.imageAlt}
              className="h-auto w-full max-h-[80vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}