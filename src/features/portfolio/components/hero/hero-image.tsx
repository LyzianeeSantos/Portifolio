"use client";

import { motion, type MotionValue } from "framer-motion";

interface HeroImageProps {
  imageY: MotionValue<number>;
  imageScale: MotionValue<number>;
}

export function HeroImage({ imageY, imageScale }: HeroImageProps) {
  return (
    <motion.div
      className="relative z-20 order-1 flex min-h-[24rem] items-end justify-center lg:order-2 lg:min-h-[40rem] lg:justify-end"
      style={{ y: imageY, scale: imageScale }}
      initial={{ opacity: 0, y: 54, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.96, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}
