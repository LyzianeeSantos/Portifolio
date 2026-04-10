import type { Metadata } from "next";
import { Bebas_Neue, Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/components/providers/app-providers";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lyziane-portfolio.vercel.app"),
  title: {
    default: "Lyziane Santos | Software Engineer & Digital Influencer",
    template: "%s | Lyziane Santos",
  },
  description:
    "Portfólio premium de Lyziane Santos, unindo desenvolvimento de software, presença digital, criatividade e direção visual contemporânea.",
  keywords: [
    "Lyziane Santos",
    "Portfólio",
    "Desenvolvedora de Software",
    "Influencer Digital",
    "Next.js",
    "Software Engineer",
  ],
  openGraph: {
    title: "Lyziane Santos | Software Engineer & Digital Influencer",
    description:
      "Um portfólio editorial, fashion-tech e contemporâneo com projetos, trajetória e presença digital.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${manrope.variable} ${bebas.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-background text-foreground">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
