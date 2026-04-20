import React from "react";  
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

export function GlobalCursor() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Tight spring — keeps it feeling physically tethered, not sluggish
  const springX = useSpring(mouseX, { stiffness: 500, damping: 35, mass: 0.4 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 35, mass: 0.4 });

  // Scale up slightly on clickable elements
  const scale = useMotionValue(1);
  const springScale = useSpring(scale, { stiffness: 400, damping: 25 });

  const isVisible = useRef(false);

  useEffect(() => {
    function onMove(e: MouseEvent) {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible.current) isVisible.current = true;
    }

    function onOver(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const isClickable = target.closest("a, button, [role=button], input, textarea, label, select");
      scale.set(isClickable ? 1.8 : 1);
    }

    function onLeave() {
      mouseX.set(-200);
      mouseY.set(-200);
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [mouseX, mouseY, scale]);

  return (
    <motion.div
      aria-hidden
      className="cursor-core -translate-x-1/2 -translate-y-1/2"
      style={{
        x: springX,
        y: springY,
        scale: springScale,
      }}
    />
  );
}
