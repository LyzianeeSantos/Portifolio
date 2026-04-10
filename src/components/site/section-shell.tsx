import { cn } from "@/lib/utils";

interface SectionShellProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children: React.ReactNode;
  className?: string;
}

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  children,
  className,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn("relative mx-auto w-full max-w-7xl px-5 py-20 md:px-8 md:py-28", className)}
    >
      <div
        className={cn(
          "mb-12 flex flex-col gap-5",
          align === "center" && "items-center text-center",
        )}
      >
        {eyebrow ? (
          <span className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-zinc-300">
            {eyebrow}
          </span>
        ) : null}
        <h2 className="max-w-4xl font-display text-6xl uppercase leading-none tracking-[0.04em] text-white sm:text-7xl md:text-8xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-3xl text-base leading-7 text-zinc-300 md:text-lg">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
