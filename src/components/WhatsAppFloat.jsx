import { MessageCircle } from "lucide-react";
import { MAIN_WHATSAPP, buildWhatsAppLink } from "../data/site";
import { WHATSAPP_FLOAT } from "../data/content";

export default function WhatsAppFloat() {
  return (
    <a
      // TODO (conexión real): destino del botón flotante. Hoy abre WhatsApp con el número principal.
      href={buildWhatsAppLink(MAIN_WHATSAPP)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir por WhatsApp"
      className="wa-pulse fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-wa px-5 py-4 text-[#0a3d1f] transition-transform duration-300 hover:scale-105 active:scale-95 sm:bottom-8 sm:right-8 sm:px-6"
    >
      <MessageCircle size={26} strokeWidth={1.75} aria-hidden="true" />
      <span className="font-mono text-xs font-medium tracking-[0.2em]">{WHATSAPP_FLOAT.label}</span>
    </a>
  );
}