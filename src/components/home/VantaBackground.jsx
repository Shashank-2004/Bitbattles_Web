import { useEffect, useRef } from "react";
import * as THREE from "three";

export function VantaBackground() {
  const vantaRef = useRef(null);
  const effectRef = useRef(null);

  useEffect(() => {
    if (!vantaRef.current) return undefined;

    let isMounted = true;

    async function initVanta() {
      try {
        window.THREE = THREE;

        const module = await import("vanta/dist/vanta.fog.min");
        const createFog = module.default ?? module;

        if (!isMounted || effectRef.current || !vantaRef.current) return;

        effectRef.current = createFog({
          el: vantaRef.current,
          THREE,

          // INTERACTION
          mouseControls: true,
          touchControls: true,
          gyroControls: false,

          minHeight: 200.0,
          minWidth: 200.0,

          // COLORS
          highlightColor: 0xff6a2a,
          midtoneColor: 0x10182b,
          lowlightColor: 0x2563eb,
          baseColor: 0x040816,

          // MORE 3D / DEPTH
          blurFactor: 0.59,
          speed: 1.9,
          zoom: 1.0,
        });
      } catch (error) {
        console.error("Vanta background failed to load:", error);
      }
    }

    initVanta();

    return () => {
      isMounted = false;

      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, []);

  return (
    <>
      {/* MAIN OVERLAY */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_75%_20%,rgba(255,106,42,0.14),transparent_26%),radial-gradient(circle_at_20%_35%,rgba(37,99,235,0.20),transparent_34%),linear-gradient(120deg,#020307,#06101f_48%,#02050d)]" />

      {/* EXTRA DEPTH GLOWS */}
      <div className="pointer-events-none absolute -left-32 top-0 z-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="pointer-events-none absolute right-0 top-20 z-0 h-[420px] w-[420px] rounded-full bg-bitOrange/10 blur-3xl" />

      {/* VANTA */}
      <div
        ref={vantaRef}
        className="absolute inset-0 z-0 h-full w-full opacity-100"
      />

      {/* DARK CINEMATIC OVERLAY */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-black/20" />
    </>
  );
}