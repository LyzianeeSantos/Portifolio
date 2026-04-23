import { cn } from "@/utils/cn";

interface SectionShellProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  headerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  headerClassName,
  titleClassName,
  descriptionClassName,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn("relative mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-24", className)}
    >
      <div className="absolute inset-x-5 top-0 h-px bg-white/10 md:inset-x-8" />
      <div
        className={cn(
          "grid gap-6 pb-10 md:pb-14 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.55fr)] lg:items-end",
          headerClassName,
        )}
      >
        {eyebrow ? (
          <div className="space-y-4">
            <span className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-zinc-300">
              {eyebrow}
            </span>
            <h2
              className={cn(
                "max-w-5xl font-hero uppercase leading-[0.84] tracking-[-0.06em] text-white [font-size:clamp(3.4rem,11vw,8rem)]",
                titleClassName,
              )}
            >
              {title}
            </h2>
          </div>
        ) : (
          <h2
            className={cn(
              "max-w-5xl font-hero uppercase leading-[0.84] tracking-[-0.06em] text-white [font-size:clamp(3.4rem,11vw,8rem)]",
              titleClassName,
            )}
          >
            {title}
          </h2>
        )}
        {description ? (
          <p
            className={cn(
              "max-w-md text-sm leading-7 text-zinc-300 md:text-base",
              descriptionClassName,
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
