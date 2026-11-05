// Datos generales del negocio. Todo lo que sea texto, número o link se edita aquí.

export const SITE = {
  name: "Galponcito a la Leña",
  shortName: "GALPONCITO",
  subtitle: "A LA LEÑA",
  tagline: "El sabor del fuego, directo a tu mesa.",
  city: "Ate Vitarte, Lima",
  year: 2026,
};

// TODO (pendiente): confirmar con el cliente cuál es el WhatsApp principal.
// Por ahora se usa el celular de la sede principal (Mariátegui) en el botón del header,
// el botón flotante "PEDIR" y los botones generales.
export const MAIN_WHATSAPP = "985098714";

// TODO (pendiente): número de WhatsApp de la sección Contacto. Por ahora es el mismo de la sede principal.
export const CONTACT_WHATSAPP = "985098714";

export const DEFAULT_MESSAGE = "Hola Galponcito a la Leña, quiero hacer un pedido.";

/**
 * Arma el link de WhatsApp (formato Perú, +51).
 * TODO (conexión real): si luego se usa un servicio de pedidos o un bot, cambiar aquí el destino.
 */
export const buildWhatsAppLink = (phone, message = DEFAULT_MESSAGE) =>
  `https://wa.me/51${String(phone).replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

export const formatPhone = (phone) =>
  String(phone).replace(/\D/g, "").replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3");

// TODO (pendiente): reemplazar por los perfiles reales del negocio.
export const SOCIALS = [
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com/" },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/" },
];

export const HOURS = {
  days: "Lunes a domingo",
  open: "11:00 a. m.",
  close: "11:00 p. m.",
  note: "Sin horarios especiales por feriados.",
};

export const DELIVERY_AREA = "Ate Vitarte y alrededores";

export const FOOTER_PHONES = ["985 098 714", "01 4941722"];
