import type { PortfolioProfile } from "@/types/portfolio";
import { splitDisplayName } from "@/features/portfolio/utils/split-display-name";
import { AboutFacts } from "@/features/portfolio/components/about/about-facts";
import { AboutPortraitCard } from "@/features/portfolio/components/about/about-portrait-card";

interface AboutSectionProps {
  profile: PortfolioProfile;
}

export function AboutSection({ profile }: AboutSectionProps) {
  const { firstName, lastName } = splitDisplayName(profile.name);

  return (
    <section id="sobre" className="relative mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <div className="absolute inset-x-5 top-0 h-px bg-white/10 md:inset-x-8" />

      <div className="flex items-center justify-between gap-4 text-[0.68rem] font-medium uppercase tracking-[0.36em] text-zinc-300/76 sm:text-xs">
        <span>Quem sou eu</span>
        <span>{profile.location}</span>
      </div>

      <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
        <div className="order-2 space-y-6 lg:order-1">
          <p className="text-[0.68rem] uppercase tracking-[0.42em] text-zinc-400 sm:text-xs">
            {profile.profession}
          </p>

          <h2 className="font-hero uppercase leading-[0.82] tracking-[-0.05em] text-white [font-size:clamp(4.2rem,12vw,9rem)]">
            <span className="block">HELLO, I&apos;M</span>
            <span className="block">{firstName}</span>
            {lastName ? <span className="block">{lastName}</span> : null}
          </h2>

          <p className="max-w-xl text-base leading-8 text-zinc-200 md:text-lg">{profile.headline}</p>
          <p className="max-w-xl font-accent text-3xl italic leading-tight text-zinc-100/92 md:text-4xl">
            {profile.introTagline}
          </p>
          <p className="max-w-2xl text-sm leading-7 text-zinc-300 md:text-base md:leading-8">
            {profile.about}
          </p>
        </div>

        <AboutPortraitCard
          name={profile.name}
          degree={profile.degree}
          imageUrl={profile.aboutImage}
        />
      </div>

      <AboutFacts
        name={profile.name}
        age={profile.age}
        degree={profile.degree}
        location={profile.location}
      />
    </section>
  );
}
