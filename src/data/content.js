// Textos de cada sección (excepto sucursales y porciones, que tienen su propio archivo).

export const HERO = {
  eyebrow: "POLLERÍA · ATE VITARTE, LIMA",
  titleMain: "GALPONCITO",
  titleOutline: "A LA LEÑA",
  tagline: "El sabor del fuego, directo a tu mesa.",
  text: "Pollo a la brasa en Ate Vitarte. Tres sucursales, delivery en Ate Vitarte y alrededores, y tu pedido a un mensaje de distancia.",
  primaryCta: "PEDIR AHORA",
  secondaryCta: "CONOCE NUESTRAS SUCURSALES",
  verticalLabel: "BRASAS · LEÑA · SABOR",
  infoHours: { label: "HORARIO", value: "Lunes a domingo · 11:00 a. m. – 11:00 p. m." },
  infoDelivery: { label: "DELIVERY", value: "Ate Vitarte y alrededores" },
  logoAlt: "Logo de Galponcito a la Leña",
};

export const NOSOTROS = {
  label: "NOSOTROS",
  number: "01",
  tag: "ATE VITARTE · LIMA",
  titleLine1Before: "UNA",
  titleLine1Accent: "Pasión",
  titleLine1After: "QUE",
  titleLine2: "SE COMPARTE.",
  paragraphs: [
    {
      strong: "Galponcito a la Leña",
      rest: " es una pollería especializada en pollo a la brasa, con tres sucursales en Ate Vitarte. Un mismo nombre, un mismo sabor y la misma idea: que comer bien sea fácil y se comparta.",
    },
    {
      strong: "",
      rest: "Nos encontrarás en Mariátegui, Manilsa y Los Ángeles. Puedes venir a la tienda, llamar o escribirnos por WhatsApp para pedir desde casa. Cada sucursal atiende a su manera, con la misma atención de siempre.",
    },
  ],
  stats: [
    { value: "03", label: "Sucursales en Ate Vitarte" },
    { value: "01", label: "Especialidad: pollo a la brasa" },
    { value: "07", label: "Días a la semana, sin excepción" },
  ],
  cta: "CONOCE NUESTRA ESPECIALIDAD",
};

export const ESPECIALIDAD = {
  label: "ESPECIALIDAD",
  number: "02",
  titleMain: "EL PROTAGONISTA",
  titleAccent: "de la mesa.",
  text: "Pollo a la brasa, servido para compartir. Lo que ves es lo que vamos a preparar para ti: una pieza entera, bien dorada, con todo su sabor.",
  quote: "“El sabor del fuego, directo a tu mesa.”",
  quoteTag: "HECHO A LA BRASA, TODOS LOS DÍAS",
  // TODO (pendiente): en la captura este texto vertical aparece cortado (se lee "VI…").
  // Escribe aquí el texto exacto; si queda vacío, no se muestra.
  verticalLabel: "",
  imageAlt: "Pollo entero a la brasa girando sobre carbones encendidos",
  imageAlt2: "Pollo a la brasa recién sacado, con la piel brillante",
  features: [
    {
      icon: "flame",
      number: "01",
      title: "FUEGO Y BRASAS",
      text: "El punto justo del pollo a la brasa nace del calor intenso y la paciencia de verlo dorarse.",
    },
    {
      icon: "sparkles",
      number: "02",
      title: "PIEL DORADA",
      text: "Ese acabado brillante y crocante que se reconoce desde la primera mesa.",
    },
    {
      icon: "users",
      number: "03",
      title: "PARA COMPARTIR",
      text: "Un plato pensado para la mesa familiar, la reunión y el antojo de todos los días.",
    },
  ],
  menu: {
    label: "MENÚ",
    title: "Nuestra carta",
    text: "Mira todo lo que preparamos a la brasa y elige tu antojo.",
    cta: "VER CARTA",
    // TODO (pendiente): poner el archivo carta.pdf dentro de la carpeta /public.
    href: "/carta.pdf",
  },
};

export const DELIVERY = {
  label: "DELIVERY",
  number: "04",
  titleLine1: "TU ANTOJO NO",
  titleLine2: "TIENE QUE ESPERAR.",
  textBefore:
    "Disfruta de Galponcito a la Leña desde casa. Elige tu sucursal y comunícate directamente para realizar tu pedido. Delivery en ",
  textStrong: "Ate Vitarte y alrededores",
  textAfter: ".",
  pills: [
    { icon: "bike", text: "Delivery gratis en Ate Vitarte y alrededores" },
    { icon: "pin", text: "Pedido por sucursal" },
  ],
  cta: "PEDIR POR WHATSAPP",
  imageAlt: "Pollo entero a la brasa servido con papas fritas y ensalada",
};

export const HORARIOS = {
  label: "HORARIOS",
  number: "06",
  titleLine1: "TE ESPERAMOS",
  titleLine2: "TODOS LOS DÍAS.",
  days: "LUNES A DOMINGO",
  open: "11:00 A. M.",
  close: "11:00 P. M.",
  note: "Sin horarios especiales por feriados.",
};

// La captura de Contacto no incluía su contenido: esta sección es una propuesta
// (solo WhatsApp + redes sociales, como se indicó). Ajusta los textos a gusto.
export const CONTACTO = {
  label: "CONTACTO",
  number: "07",
  titleMain: "¿ANTOJO DE POLLO?",
  titleAccent: "Escríbenos.",
  text: "Cuéntanos qué quieres y te respondemos por WhatsApp. Para pedidos, también puedes elegir tu sucursal más cerca de ti.",
  whatsappLabel: "WHATSAPP",
  whatsappCta: "ESCRIBIR POR WHATSAPP",
  whatsappMessage: "Hola Galponcito a la Leña, tengo una consulta.",
  socialsLabel: "SÍGUENOS",
};

export const FOOTER = {
  text: "Pollo a la brasa en Ate Vitarte. Tres sucursales, delivery en Ate Vitarte y alrededores, y pedidos directos por WhatsApp.",
  navTitle: "NAVEGACIÓN",
  branchesTitle: "SUCURSALES",
  contactTitle: "CONTACTO",
  hoursLine1: "Lunes a domingo",
  hoursLine2: "11:00 a. m. – 11:00 p. m.",
  area: "Ate Vitarte y alrededores",
  rights: "Todos los derechos reservados.",
  imagesNote: "IMÁGENES GASTRONÓMICAS DE REFERENCIA",
};

export const WHATSAPP_FLOAT = { label: "PEDIR" };