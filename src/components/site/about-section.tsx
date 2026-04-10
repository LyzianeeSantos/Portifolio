import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionShell } from "@/components/site/section-shell";

interface AboutSectionProps {
  name: string;
  age: number;
  degree: string;
  profession: string;
  about: string;
  aboutImage: string;
}

export function AboutSection(props: AboutSectionProps) {
  const { name, age, degree, profession, about, aboutImage } = props;

  return (
    <SectionShell
      id="sobre"
      eyebrow="Sobre mim"
      title="HELLO, I'M LYZIANE"
      description="Uma presença profissional construída entre arquitetura de software, narrativa visual e comunicação digital."
    >
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <Card className="overflow-hidden">
          <CardContent className="grid gap-8 p-0 md:grid-cols-[0.85fr_1.15fr]">
            <div className="relative min-h-[420px]">
              <div className="absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-primary" />
              <Image
                src={aboutImage}
                alt={name}
                width={900}
                height={1200}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between gap-6 p-8">
              <div className="space-y-4">
                <Badge variant="muted">{profession}</Badge>
                <p className="font-accent text-3xl italic text-zinc-100 md:text-4xl">
                  Autoridade técnica com sensibilidade estética e visão de marca.
                </p>
                <p className="text-base leading-8 text-zinc-300">{about}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.26em] text-zinc-500">Nome</p>
                  <p className="mt-2 text-base font-semibold text-white">{name}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.26em] text-zinc-500">Idade</p>
                  <p className="mt-2 text-base font-semibold text-white">{age} anos</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.26em] text-zinc-500">Formação</p>
                  <p className="mt-2 text-base font-semibold text-white">{degree}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionShell>
  );
}
