"use client";

import { useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export function useHeroParallax() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.28,
  });

  return {
    sectionRef,
    backdropY: useTransform(smoothProgress, [0, 1], [0, 140]),
    wordY: useTransform(smoothProgress, [0, 1], [0, -76]),
    copyY: useTransform(smoothProgress, [0, 1], [0, -26]),
    imageY: useTransform(smoothProgress, [0, 1], [0, 94]),
    imageScale: useTransform(smoothProgress, [0, 1], [1, 0.95]),
    glowX: useTransform(smoothProgress, [0, 1], [0, 56]),
    overlayOpacity: useTransform(smoothProgress, [0, 0.65, 1], [0.18, 0.34, 0.52]),
  };
}
