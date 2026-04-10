import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-6 md:px-8">
      <div className="flex items-center gap-3">
        <span className="font-display text-2xl uppercase tracking-[0.2em] text-white">
          Lyziane
        </span>
        <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">
          Creative Portfolio
        </span>
      </div>
      <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
        <Link href="#sobre">Sobre</Link>
        <Link href="#skills">Stacks</Link>
        <Link href="#projetos">Projetos</Link>
        <Link href="#contato">Contato</Link>
      </nav>
      <Button asChild variant="secondary" size="sm">
        <Link href="/login">Login</Link>
      </Button>
    </header>
  );
}
