"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HeroSectionProps {
  name: string;
  headline: string;
  introTagline: string;
  heroImage: string;
  heroLabel: string;
  accentQuote: string;
}

export function HeroSection({
  name,
  headline,
  introTagline,
  heroImage,
  heroLabel,
  accentQuote,
}: HeroSectionProps) {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 1.08]);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 24;
      const y = (event.clientY / window.innerHeight - 0.5) * 24;
      setPointer({ x, y });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="relative overflow-hidden px-5 pb-14 pt-6 md:px-8 md:pb-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/60 px-6 py-10 shadow-[0_0_120px_rgba(255,42,42,0.12)] md:px-10 md:py-14">
        <motion.div
          aria-hidden
          className="absolute inset-0"
          style={{
            y,
          }}
        >
          <div className="absolute inset-x-[-15%] top-16 h-28 bg-linear-to-r from-transparent via-white/70 to-transparent blur-3xl" />
          <div className="absolute inset-x-[-10%] top-24 h-72 bg-linear-to-r from-zinc-950 via-zinc-400/20 to-zinc-950 blur-2xl" />
          <motion.div
            className="absolute -right-10 top-24 h-80 w-80 rounded-full bg-primary/40 blur-[140px]"
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.4, 0.75, 0.45],
            }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4.8 }}
          />
          <motion.div
            className="absolute -left-16 bottom-10 h-72 w-72 rounded-full bg-white/10 blur-[140px]"
            animate={{
              scale: [1.05, 0.95, 1.05],
              opacity: [0.16, 0.3, 0.18],
            }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 6 }}
          />
        </motion.div>

        <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Badge>{heroLabel}</Badge>
              <span className="text-xs uppercase tracking-[0.28em] text-zinc-400">
                10 abr 2026
              </span>
            </div>

            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.32em] text-zinc-400">{name}</p>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="font-display text-7xl uppercase leading-[0.9] tracking-[0.02em] text-white sm:text-8xl md:text-[10rem] lg:text-[11rem]"
              >
                Portfolio
              </motion.h1>
              <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-white md:text-5xl">
                {headline}
              </h2>
              <p className="max-w-xl text-base leading-7 text-zinc-300 md:text-lg">
                {introTagline}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="#projetos">
                  Ver projetos
                  <ArrowDownRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="#contato">
                  Vamos conversar
                  <Sparkles className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-6 border-t border-white/10 pt-8 md:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.26em] text-zinc-500">Assinatura</p>
                <p className="mt-2 text-sm leading-6 text-zinc-300">{accentQuote}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.26em] text-zinc-500">Foco</p>
                <p className="mt-2 text-sm leading-6 text-zinc-300">
                  Software, conteúdo, branding digital e experiências visuais premium.
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.26em] text-zinc-500">Mood</p>
                <p className="mt-2 text-sm leading-6 text-zinc-300">
                  Editorial, contemporâneo, ousado e orientado a presença.
                </p>
              </div>
            </div>
          </div>

          <motion.div
            className="relative mx-auto h-[480px] w-full max-w-md lg:mx-0 lg:h-[640px] lg:max-w-none"
            style={{
              y: useTransform(scrollYProgress, [0, 1], [0, 120]),
              rotateX: pointer.y * -0.3,
              rotateY: pointer.x * 0.55,
              scale,
            }}
          >
            <div className="absolute inset-0 rounded-[2.4rem] bg-linear-to-br from-white/8 via-transparent to-primary/20" />
            <div className="absolute -left-8 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full border border-white/10 bg-primary/90 mix-blend-screen blur-[4px]" />
            <div className="absolute right-8 top-10 h-24 w-24 rounded-full border border-white/15 bg-white/5 backdrop-blur-md" />
            <div className="absolute inset-x-10 bottom-0 rounded-t-[2rem] border border-white/10 bg-linear-to-b from-zinc-900 to-zinc-950 p-3 shadow-2xl">
              <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-black/40">
                <Image
                  src={heroImage}
                  alt={name}
                  width={800}
                  height={1100}
                  className="h-[420px] w-full object-cover object-center md:h-[560px]"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
