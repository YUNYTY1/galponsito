import { useEffect, useRef } from "react";

// Brasas (naranja/rojo) y cenizas (gris) que suben lento por toda la pantalla.
// Un solo canvas fijo cubre todas las secciones. No se muestra si el usuario pidió "reducir movimiento".
const EMBER_COLORS = ["255,122,26", "255,179,71", "217,35,35", "255,214,120"];
const ASH_COLOR = "150,142,132";

export default function Embers() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let particles = [];
    let raf = 0;

    const spawn = (initial = false) => {
      const ash = Math.random() < 0.4;
      return {
        ash,
        x: Math.random() * w,
        y: initial ? Math.random() * h : h + 10,
        r: ash ? 1 + Math.random() * 2.2 : 0.8 + Math.random() * 2.2,
        vy: 0.4 + Math.random() * 1.0,
        sway: 0.3 + Math.random() * 0.9,
        phase: Math.random() * Math.PI * 2,
        speed: 0.004 + Math.random() * 0.012,
        alpha: ash ? 0.3 + Math.random() * 0.25 : 0.55 + Math.random() * 0.4,
        color: ash ? ASH_COLOR : EMBER_COLORS[Math.floor(Math.random() * EMBER_COLORS.length)],
      };
    };

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = w < 768 ? 22 : 48;
      particles = Array.from({ length: count }, () => spawn(true));
    };

    const tick = () => {
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.phase += p.speed;
        p.y -= p.vy;
        p.x += Math.sin(p.phase) * p.sway;

        if (p.y < -10) {
          particles[i] = spawn();
          continue;
        }

        // Aparece suave abajo y se desvanece al llegar arriba
        const fadeIn = Math.min(1, (h - p.y) / 60);
        const fadeOut = Math.min(1, p.y / (h * 0.35));
        const flicker = p.ash ? 1 : 0.75 + 0.25 * Math.sin(p.phase * 6);
        const a = p.alpha * fadeIn * fadeOut * flicker;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${a})`;
        ctx.shadowBlur = p.ash ? 0 : 8;
        ctx.shadowColor = `rgba(${p.color},${a})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };

    resize();
    tick();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30"
    />
  );
}