"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { HeroBackground } from "@/features/portfolio/components/hero/hero-background";
import { HeroCopy } from "@/features/portfolio/components/hero/hero-copy";
import { HeroImage } from "@/features/portfolio/components/hero/hero-image";
import { useHeroParallax } from "@/features/portfolio/hooks/use-hero-parallax";

interface HeroSectionProps {
  name: string;
  heroLabel: string;
}

export function HeroSection({ name, heroLabel }: HeroSectionProps) {
  const { sectionRef, backdropY, wordY, copyY, imageY, imageScale, glowX, overlayOpacity } =
    useHeroParallax();
  const displayName = name.toUpperCase();

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-stretch overflow-hidden bg-[#050505] text-white"
    >
      <HeroBackground backdropY={backdropY} glowX={glowX} overlayOpacity={overlayOpacity} />

      <div className="relative z-10 flex min-h-screen w-full flex-col px-5 pb-6 pt-5 sm:px-7 sm:pb-8 sm:pt-6 md:px-10 md:pb-10 md:pt-8 xl:px-14">
        <div className="flex items-center justify-between gap-4 text-[0.68rem] font-medium uppercase tracking-[0.36em] text-zinc-100/88 sm:text-xs">
          <span>{displayName}</span>
          <Link
            href="/login"
            className="border-b border-white/20 pb-1 text-right transition hover:border-primary hover:text-primary"
          >
            Login
          </Link>
        </div>

        <div className="relative grid flex-1 items-end gap-8 overflow-hidden py-6 sm:py-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-0 lg:py-10">
          <HeroCopy heroLabel={heroLabel} wordY={wordY} copyY={copyY} />
          <HeroImage imageY={imageY} imageScale={imageScale} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, delay: 0.34 }}
          className="relative z-20 flex flex-col gap-5 border-t border-white/10 pt-4 sm:pt-5 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="flex flex-wrap gap-x-5 gap-y-3 text-[0.65rem] uppercase tracking-[0.32em] text-zinc-400 sm:text-[0.72rem]">
            <span>lyziane.com</span>
            <span>@lyziane_lyzi</span>
            <span>{heroLabel}</span>
          </div>

          <Link
            href="#sobre"
            className="group inline-flex w-fit items-center gap-3 border border-white/14 bg-white/4 px-4 py-3 text-[0.7rem] uppercase tracking-[0.34em] text-white backdrop-blur-md transition hover:border-primary/50 hover:bg-primary/10 hover:text-primary sm:px-5"
          >
            VER APRESENTACAO
            <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
