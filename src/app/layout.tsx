import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sebastian Arvin P. Reyes | Full-Stack Developer & AI QA Auditor",
  description: "Portfolio of Sebastian Arvin P. Reyes (Vin), a Full-Stack Developer and AI Quality Auditor based in Muntinlupa City, Philippines. Developer of ShineGuard Hulo Smart Streetlight & Security IoT Portal.",
  authors: [{ name: "Sebastian Arvin P. Reyes", url: "https://linkedin.com/in/sebastian-arvin-reyes" }],
  keywords: [
    "Sebastian Arvin P. Reyes",
    "Vin Reyes",
    "Full-Stack Developer",
    "AI QA Auditor",
    "IoT Developer",
    "Zero Trust Architecture",
    "Muntinlupa City",
    "Philippines",
    "ShineGuard Hulo",
    "University of Makati"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
