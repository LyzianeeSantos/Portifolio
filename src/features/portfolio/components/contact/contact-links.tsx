import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import type { PortfolioSocialLink } from "@/types/portfolio";

interface ContactLinksProps {
  email: string;
  phone: string;
  socialLinks: PortfolioSocialLink[];
}

export function ContactLinks({ email, phone, socialLinks }: ContactLinksProps) {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[0.68rem] uppercase tracking-[0.3em] text-zinc-500 sm:text-xs">
          Direct line
        </p>
        <p className="mt-4 max-w-md font-accent text-3xl italic leading-tight text-white md:text-4xl">
          Projetos com visao, estetica e proposito merecem uma conversa a altura.
        </p>
      </div>

      <div className="divide-y divide-white/10 border-y border-white/10">
        <Link
          href={`mailto:${email}`}
          className="flex items-center justify-between gap-4 py-4 text-zinc-200 transition hover:text-primary"
        >
          <span className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-primary" />
            {email}
          </span>
          <ArrowUpRight className="h-4 w-4" />
        </Link>
        <Link
          href={`tel:${phone}`}
          className="flex items-center justify-between gap-4 py-4 text-zinc-200 transition hover:text-primary"
        >
          <span className="flex items-center gap-3">
            <Phone className="h-4 w-4 text-primary" />
            {phone}
          </span>
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-3">
        {socialLinks.map((social) => (
          <Link
            key={social.id}
            href={social.url}
            target="_blank"
            className="flex items-center justify-between rounded-[1.25rem] border border-white/10 px-4 py-3 text-sm text-zinc-300 transition hover:border-primary/30 hover:bg-white/5"
          >
            <span>{social.platform}</span>
            <span className="text-zinc-500">{social.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
