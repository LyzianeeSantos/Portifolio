interface AboutFactsProps {
  name: string;
  age: number;
  degree: string;
  location: string;
}

export function AboutFacts({ name, age, degree, location }: AboutFactsProps) {
  return (
    <div className="mt-8 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <p className="text-[0.68rem] uppercase tracking-[0.32em] text-zinc-500 sm:text-xs">Nome</p>
        <p className="mt-2 text-base font-semibold text-white">{name}</p>
      </div>
      <div>
        <p className="text-[0.68rem] uppercase tracking-[0.32em] text-zinc-500 sm:text-xs">Idade</p>
        <p className="mt-2 text-base font-semibold text-white">{age} anos</p>
      </div>
      <div>
        <p className="text-[0.68rem] uppercase tracking-[0.32em] text-zinc-500 sm:text-xs">
          Formacao
        </p>
        <p className="mt-2 text-base font-semibold text-white">{degree}</p>
      </div>
      <div>
        <p className="text-[0.68rem] uppercase tracking-[0.32em] text-zinc-500 sm:text-xs">Base</p>
        <p className="mt-2 text-base font-semibold text-white">{location}</p>
      </div>
    </div>
  );
}
