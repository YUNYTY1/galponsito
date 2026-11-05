export const PORTIONS_COPY = {
  label: "PORCIONES",
  number: "03",
  titleMain: "ELIGE TU PORCIÓN,",
  titleAccent: "Según Tu Antojo.",
  text: "Del cuarto individual para el antojo de mediodía al pollo entero para compartir en familia. Todos se sirven recién salidos de la brasa, con papas, ensalada y cremas.",
};

// Precios: el diseño dice "Precio a consultar". Cuando haya precios reales, cambiar `price`.
export const PORTIONS = [
  {
    id: "cuarto",
    forLabel: "PARA 1 PERSONA",
    title: "1/4 DE POLLO",
    subtitle: null,
    watermark: "1/4",
    price: "PRECIO A CONSULTAR",
    items: ["Papas fritas", "Ensalada fresca", "Cremas de la casa"],
    featured: false,
    message: "Hola Galponcito a la Leña, quiero pedir 1/4 de pollo.",
  },
  {
    id: "medio",
    forLabel: "PARA 2 PERSONAS",
    title: "1/2 POLLO",
    subtitle: null,
    watermark: "1/2",
    price: "PRECIO A CONSULTAR",
    items: ["Papas fritas", "Ensalada fresca", "Cremas de la casa"],
    featured: false,
    message: "Hola Galponcito a la Leña, quiero pedir 1/2 pollo.",
  },
  {
    id: "entero",
    badge: "EL FAVORITO DE LA CASA",
    title: "1 POLLO ENTERO",
    subtitle: "Para 3 a 4 personas",
    watermark: "1",
    price: "PRECIO A CONSULTAR",
    items: ["Papas fritas", "Ensalada fresca", "Cremas y ají de la casa"],
    featured: true,
    message: "Hola Galponcito a la Leña, quiero pedir 1 pollo entero.",
  },
];
