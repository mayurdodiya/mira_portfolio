"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.045,
      smooth: true,
      smoothTouch: true,
      direction: "vertical",
      wheelMultiplier: 0.8,
      syncTouch: true,
    });
    window.lenis = lenis;
    function onWheel(e) {
      if (
        e.target.closest('.leaders-model-right') ||
        e.target.closest('.project-info-dropdown-flx-mid')
      ) {
        return;
      }
      if (e.shiftKey) {
        lenis.stop();
      } else {
        lenis.start();
      }
    }
    window.addEventListener("wheel", onWheel, { passive: true });

    function raf(time) {
      const bodyOverflow = document.body.style.overflow;
      if (bodyOverflow === "hidden") {
        lenis.stop();
      } else {
        lenis.start();
        lenis.raf(time);
      }
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.removeEventListener("wheel", onWheel);
    };
  }, []);

  return null;
}
