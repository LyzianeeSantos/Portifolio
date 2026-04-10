import { SectionShell } from "@/components/site/section-shell";
import { Card, CardContent } from "@/components/ui/card";

interface EducationSectionProps {
  educationItems: {
    id: string;
    title: string;
    subtitle: string;
    period: string;
    description: string;
  }[];
}

export function EducationSection({ educationItems }: EducationSectionProps) {
  return (
    <SectionShell
      id="educacao"
      eyebrow="Educação e formação"
      title="MY EDUCATION"
      description="Trajetória acadêmica e técnica construída com base analítica, atualização constante e visão multidisciplinar."
    >
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Card className="relative overflow-hidden">
          <CardContent className="flex min-h-full flex-col justify-between gap-6 p-8">
            <div className="absolute -left-10 top-10 h-64 w-64 rounded-full bg-primary" />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">Editorial path</p>
              <p className="mt-6 max-w-sm font-accent text-4xl italic text-white">
                Técnica, criatividade e comunicação moldando uma atuação digital mais estratégica.
              </p>
            </div>
            <div className="relative border-t border-white/10 pt-6 text-sm leading-7 text-zinc-300">
              Uma formação que conversa com performance, engenharia, design e posicionamento.
            </div>
          </CardContent>
        </Card>
        <div className="space-y-4">
          {educationItems.map((item, index) => (
            <Card key={item.id}>
              <CardContent className="grid gap-5 p-6 md:grid-cols-[120px_1fr] md:items-start">
                <div className="font-display text-5xl leading-none text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="font-display text-4xl uppercase tracking-[0.06em] text-white">
                      {item.title}
                    </h3>
                    <span className="text-xs uppercase tracking-[0.26em] text-zinc-500">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-2 text-sm uppercase tracking-[0.22em] text-primary">
                    {item.subtitle}
                  </p>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-300">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
