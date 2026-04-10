import { redirect } from "next/navigation";
import { LoginForm } from "@/components/admin/login-form";
import { getAuthSession } from "@/lib/auth";

export default async function LoginPage() {
  const session = await getAuthSession();

  if (session?.user) {
    redirect("/admin");
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-5 py-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(255,42,42,0.18),transparent_24%),linear-gradient(180deg,#050505_0%,#09090b_100%)]" />
      <LoginForm />
    </main>
  );
}
