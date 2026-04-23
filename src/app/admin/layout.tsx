import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogoutButton } from "@/components/logout-button";
import { getAuthSession } from "@/services/auth";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getAuthSession();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen bg-black px-5 py-6 md:px-8">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-[2rem] border border-white/10 bg-white/5 px-6 py-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Painel administrativo</p>
          <p className="font-display text-3xl uppercase text-white">{session.user.name}</p>
        </div>
        <div className="flex items-center gap-3">
          <Button asChild variant="secondary">
            <Link href="/">Ver site</Link>
          </Button>
          <LogoutButton />
        </div>
      </div>
      <div className="mx-auto mt-8 w-full max-w-7xl">{children}</div>
    </main>
  );
}
