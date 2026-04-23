import type { PortfolioProfile } from "@/types/portfolio";
import { SectionShell } from "@/features/portfolio/components/layout/section-shell";
import { ContactFormCard } from "@/features/portfolio/components/contact/contact-form-card";
import { ContactLinks } from "@/features/portfolio/components/contact/contact-links";

interface ContactSectionProps {
  profile: PortfolioProfile;
}

export function ContactSection({ profile }: ContactSectionProps) {
  return (
    <SectionShell
      id="contato"
      eyebrow="Contato"
      title="LET'S TALK"
      description="Um fechamento mais clean para projetos, collabs e oportunidades que conectem tecnologia, marca e presenca digital."
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
        <ContactLinks
          email={profile.email}
          phone={profile.phone}
          socialLinks={profile.socialLinks}
        />
        <ContactFormCard />
      </div>
    </SectionShell>
  );
}
