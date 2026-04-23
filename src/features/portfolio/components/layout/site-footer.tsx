export function SiteFooter() {
  return (
    <footer className="relative mx-auto w-full max-w-7xl px-5 pb-10 pt-6 md:px-8">
      <div className="absolute inset-x-5 top-0 h-px bg-white/10 md:inset-x-8" />
      <div className="flex flex-col gap-3 text-[0.68rem] uppercase tracking-[0.3em] text-zinc-500 sm:text-xs md:flex-row md:items-center md:justify-between">
        <p>Lyziane Santos. Software, design e presenca digital.</p>
        <p>Next.js / Prisma / PostgreSQL</p>
      </div>
    </footer>
  );
}
