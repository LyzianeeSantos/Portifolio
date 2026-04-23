import type { PortfolioEducationItem } from "@/types/portfolio";

interface EducationTimelineProps {
  items: PortfolioEducationItem[];
}

export function EducationTimeline({ items }: EducationTimelineProps) {
  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {items.map((item, index) => (
        <div key={item.id} className="grid gap-5 py-6 lg:grid-cols-[96px_minmax(0,1fr)]">
          <div className="font-display text-5xl leading-none text-zinc-600">
            {String(index + 1).padStart(2, "0")}
          </div>

          <div>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h3 className="font-hero uppercase leading-[0.88] tracking-[-0.04em] text-white [font-size:clamp(2rem,4vw,4rem)]">
                {item.title}
              </h3>
              <span className="pt-2 text-[0.68rem] uppercase tracking-[0.3em] text-zinc-500 sm:text-xs">
                {item.period}
              </span>
            </div>

            <p className="mt-3 text-[0.72rem] uppercase tracking-[0.26em] text-primary sm:text-xs">
              {item.subtitle}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300 md:text-base">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
