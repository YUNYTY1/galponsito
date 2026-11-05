import { useEffect, useState } from "react";

// Carrusel con fundido. Cambia de imagen cada `interval` ms (3500 = 3.5 s).
// Se pausa al pasar el mouse o enfocar con teclado, y no se mueve solo si el usuario
// tiene activada la opción "reducir movimiento" en su sistema.
export default function ImageCarousel({
  slides,
  interval = 3500,
  className = "",
  align = "center", // posición de los puntitos: "center" | "left"
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (slides.length < 2 || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setTimeout(() => setIndex((i) => (i + 1) % slides.length), interval);
    return () => clearTimeout(id);
  }, [index, paused, slides.length, interval]);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          aria-hidden={i !== index}
          loading={i === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[1200ms] ease-in-out ${
            i === index ? "scale-100 opacity-100" : "scale-105 opacity-0"
          }`}
        />
      ))}

      {slides.length > 1 && (
        <div
          className={`absolute bottom-4 z-10 flex items-center gap-1 ${
            align === "left" ? "left-4" : "left-1/2 -translate-x-1/2"
          }`}
        >
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ver imagen ${i + 1} de ${slides.length}`}
              aria-current={i === index}
              className="p-1.5"
            >
              <span
                className={`block h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-gold" : "w-2 bg-white/60 hover:bg-white"
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}