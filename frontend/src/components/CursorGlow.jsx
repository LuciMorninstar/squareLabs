import { useEffect, useRef } from "react";

const CursorGlow = () => {
  const glowRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");

    let cleanup = () => {};

    const setup = () => {
      if (!mql.matches) return; // below lg — do nothing

      const handleMove = (e) => {
        pos.current = { x: e.clientX, y: e.clientY };
        if (!raf.current) {
          raf.current = requestAnimationFrame(updateGlow);
        }
      };

      const updateGlow = () => {
        if (glowRef.current) {
          glowRef.current.style.setProperty("--x", `${pos.current.x}px`);
          glowRef.current.style.setProperty("--y", `${pos.current.y}px`);
        }
        raf.current = null;
      };

      window.addEventListener("mousemove", handleMove);
      cleanup = () => {
        window.removeEventListener("mousemove", handleMove);
        if (raf.current) cancelAnimationFrame(raf.current);
      };
    };

    setup();
    mql.addEventListener("change", () => {
      cleanup();
      setup();
    });

    return () => cleanup();
  }, []);

  return (
    <div
      ref={glowRef}
      className="cursor-glow"
      aria-hidden="true"
    />
  );
};

export default CursorGlow;