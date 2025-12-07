// src/components/FaultyTerminalBackground.jsx
import { useEffect, useRef } from "react";

export default function FaultyTerminalBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();
    window.addEventListener("resize", resize);

    const CELL = 22;

    const baseColor = { r: 79, g: 89, b: 104 };
    const accentColor = { r: 56, g: 189, b: 248 };

    const lerp = (a, b, t) => a + (b - a) * t;

    const hash = (x, y) => {
      const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
      return s - Math.floor(s);
    };

    // --- new: controlled periodic flash ---
    const FLASH_INTERVAL = 45000; // ms between flashes
    const FLASH_DURATION = 600; // ms length of flash
    const FLASH_ALPHA = 0.32; // intensity of flash
    let lastFlashAt = -FLASH_INTERVAL; // so we get one near startup

    let frameId;

    const render = (time) => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const t = time * 0.001;

      // background
      ctx.fillStyle = "#020617";
      ctx.fillRect(0, 0, width, height);

      const cols = Math.ceil(width / CELL);
      const rows = Math.ceil(height / CELL);

      for (let gy = 0; gy < rows; gy++) {
        for (let gx = 0; gx < cols; gx++) {
          const nx = gx / cols;
          const ny = gy / rows;

          let pattern =
            Math.sin(nx * 9.3 + t * 0.8) * 0.5 +
            Math.sin(ny * 15.7 - t * 0.4) * 0.3 +
            Math.sin((nx + ny) * 7.1 + t * 0.6) * 0.2;

          pattern = pattern * 0.5 + 0.5;

          const grain = hash(gx * 1.3, gy * 0.9);
          let value = pattern * 0.7 + grain * 0.3;

          if (value < 0.62) continue;

          const alpha = 0.06 + value * 0.4;

          const mix = Math.pow(nx, 1.4);
          const r = Math.round(lerp(baseColor.r, accentColor.r, mix));
          const g = Math.round(lerp(baseColor.g, accentColor.g, mix));
          const b = Math.round(lerp(baseColor.b, accentColor.b, mix));

          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;

          const px = gx * CELL;
          const py = gy * CELL;

          const drift =
            Math.sin(t * 0.35 + gx * 0.25) * 2 +
            Math.sin(t * 0.18 + gy * 0.4) * 1.2;

          const shape = (gx + gy) % 4;
          const inset = 3;

          if (shape === 0) {
            ctx.fillRect(
              px + inset,
              py + inset + drift,
              CELL - inset * 2,
              3
            );
          } else if (shape === 1) {
            ctx.fillRect(
              px + inset + 2,
              py + inset + drift,
              3,
              CELL - inset * 2
            );
          } else if (shape === 2) {
            ctx.fillRect(
              px + inset,
              py + inset + drift,
              CELL - inset * 2,
              CELL / 2.4
            );
          } else {
            const size = CELL / 2.8;
            ctx.fillRect(px + inset, py + inset + drift, size, size);
            ctx.fillRect(px + inset + size + 2, py + inset + drift, size, size);
          }
        }
      }

      // scanlines
      ctx.fillStyle = "rgba(15, 23, 42, 0.45)";
      for (let y = 0; y < height; y += 3) {
        ctx.fillRect(0, y, width, 1);
      }

      // --- periodic global flash every ~45s ---
      const elapsedSinceLastFlash = time - lastFlashAt;

      // start a new flash if it's been long enough
      if (elapsedSinceLastFlash >= FLASH_INTERVAL) {
        lastFlashAt = time;
      }

      const flashAge = time - lastFlashAt;
      if (flashAge >= 0 && flashAge <= FLASH_DURATION) {
        const phase = flashAge / FLASH_DURATION; // 0 -> 1
        const alpha = FLASH_ALPHA * (1 - phase); // fade out
        ctx.fillStyle = `rgba(148, 163, 184, ${alpha})`;
        ctx.fillRect(0, 0, width, height);
      }

      frameId = requestAnimationFrame(render);
    };

    frameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="faulty-bg-canvas" />;
}
