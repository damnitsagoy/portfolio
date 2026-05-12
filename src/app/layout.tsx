import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Portfolio — Creative Full-Stack Developer",
  description: "Creative full-stack developer portfolio showcasing diverse projects in web, mobile, and design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-dotted border-border py-8 px-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-text-muted">
              &copy; 2024 — All Rights Reserved
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-text-muted">
              Built with precision
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
