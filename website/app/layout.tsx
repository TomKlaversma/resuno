import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Resuno | AI Architectuur voor MKB en Startups",
  description: "Van AI-chaos naar schaalbaar momentum. Wij bouwen de architectuur die jouw team versterkt. Veilig, volwassen en zonder houtje-touwtje oplossingen.",
  keywords: ["AI Architect", "AI Implementatie MKB", "Private LLM", "Data Security Audit", "AI consultancy Nederland"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${inter.variable} antialiased font-sans`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
