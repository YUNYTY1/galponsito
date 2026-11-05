// Todas las imágenes de carruseles y fondos. Cambia aquí los textos `alt` para que describan tus fotos reales.
import hero1 from "../assets/hero-1.jpg";
import hero2 from "../assets/hero-2.jpeg";
import hero3 from "../assets/hero-3.jpg";
import hero4 from "../assets/hero-4.jpg";
import nosotros1 from "../assets/nosotros-1.jpeg";
import nosotros2 from "../assets/nosotros-2.jpeg";
import nosotros3 from "../assets/nosotros-3.jpeg";
import nosotrosDetalle from "../assets/nosotros-detalle.jpeg";
import porcionesFondo from "../assets/porciones-fondo.jpeg";

// Hero: 4 imágenes
export const HERO_SLIDES = [
  { src: hero1, alt: "Pollo a la brasa dorado sobre las brasas encendidas" },
  { src: hero2, alt: "Pollo entero girando en el asador con fuego de leña" },
  { src: hero3, alt: "Primer plano de la piel crocante del pollo a la brasa" },
  { src: hero4, alt: "Pollo a la brasa servido con papas fritas y ensalada" },
];

// Nosotros: 3 imágenes en carrusel + 1 imagen pequeña fija
export const NOSOTROS_SLIDES = [
  { src: nosotros1, alt: "Pollo girando en el asador sobre una fogata de leña" },
  { src: nosotros2, alt: "Pollo a la brasa recién sacado del fuego" },
  { src: nosotros3, alt: "Brasas y leña encendidas en la parrilla" },
];

export const NOSOTROS_DETAIL = {
  src: nosotrosDetalle,
  alt: "Primer plano de la piel dorada del pollo a la brasa",
};

// Porciones: fondo de la card
export const PORCIONES_BG = porcionesFondo;