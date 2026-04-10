"use client";

import { SessionProvider } from "next-auth/react";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { Toaster } from "@/components/ui/sonner";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <SmoothScrollProvider>
        {children}
        <Toaster
          position="top-right"
          richColors
          toastOptions={{
            classNames: {
              toast: "!bg-zinc-950 !text-zinc-50 !border !border-white/10",
            },
          }}
        />
      </SmoothScrollProvider>
    </SessionProvider>
  );
}
