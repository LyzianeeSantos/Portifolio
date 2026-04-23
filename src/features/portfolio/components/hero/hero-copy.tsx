"use client";

import { motion, type MotionValue } from "framer-motion";

interface HeroCopyProps {
  heroLabel: string;
  wordY: MotionValue<number>;
  copyY: MotionValue<number>;
}

export function HeroCopy({ heroLabel, wordY, copyY }: HeroCopyProps) {
  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[23%] w-[124vw] -translate-x-1/2 select-none lg:top-1/2 lg:w-[118vw] lg:-translate-y-1/2"
        style={{ y: wordY }}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="font-hero whitespace-nowrap text-center uppercase leading-[0.82] tracking-[-0.04em] text-primary [font-size:clamp(7rem,32vw,25rem)] [text-shadow:0_0_36px_rgba(255,42,42,0.22)]">
          LYZIANE
        </div>
      </motion.div>

      <motion.div
        className="relative z-20 order-2 max-w-[26rem] self-end pb-2 lg:order-1 lg:pb-12"
        style={{ y: copyY }}
        initial={{ opacity: 0, x: -28 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.82, delay: 0.2 }}
      >
        <p className="text-[0.68rem] uppercase tracking-[0.42em] text-zinc-300/76 sm:text-xs">
          {heroLabel}
        </p>
        <p className="mt-5 font-hero uppercase leading-[0.86] tracking-[-0.05em] text-white [font-size:clamp(2.8rem,7vw,5.8rem)]">
          <span className="block">SEJA</span>
          <span className="block">BEM-VINDO</span>
          <span className="block">AO MEU</span>
          <span className="block">PORTIFOLIO</span>
        </p>
      </motion.div>
    </>
  );
}
