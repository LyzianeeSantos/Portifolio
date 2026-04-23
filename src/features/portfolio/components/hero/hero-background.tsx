"use client";

import { motion, type MotionValue } from "framer-motion";

interface HeroBackgroundProps {
  backdropY: MotionValue<number>;
  glowX: MotionValue<number>;
  overlayOpacity: MotionValue<number>;
}

export function HeroBackground({
  backdropY,
  glowX,
  overlayOpacity,
}: HeroBackgroundProps) {
  return (
    <motion.div aria-hidden className="absolute inset-0" style={{ y: backdropY }}>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#030303_0%,#09090b_52%,#040404_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,255,255,0.12),transparent_22%),radial-gradient(circle_at_76%_44%,rgba(255,42,42,0.18),transparent_24%),radial-gradient(circle_at_50%_96%,rgba(255,255,255,0.05),transparent_26%)]" />
      <motion.div
        className="absolute left-[-16%] top-[12%] h-[20rem] w-[20rem] rounded-full bg-white/12 blur-[110px] sm:h-[26rem] sm:w-[26rem]"
        style={{ x: glowX }}
      />
      <motion.div
        className="absolute right-[-10%] top-[28%] h-[24rem] w-[24rem] rounded-full bg-primary/28 blur-[130px] sm:h-[34rem] sm:w-[34rem]"
        style={{ x: glowX }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_0,rgba(255,255,255,0.02)_1px,transparent_1px,transparent_92px)] opacity-20" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0,rgba(255,255,255,0.02)_1px,transparent_1px,transparent_92px)] opacity-10" />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_42%,rgba(0,0,0,0.78)_100%)]"
        style={{ opacity: overlayOpacity }}
      />
    </motion.div>
  );
}
