import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Sebastian Arvin P. Reyes | Full Stack Developer & Data Engineering",
  description:
    "Portfolio of Sebastian Arvin P. Reyes (Vin), a Full Stack Developer and Data Engineering specialist based in Muntinlupa City, Philippines. Developer of ShineGuard Hulo Smart Streetlight & Security IoT Portal. Dean's Lister, University of Makati 2022–2026.",
  authors: [{ name: "Sebastian Arvin P. Reyes", url: "https://www.linkedin.com/in/sebastian-arvin-reyes-/" }],
  keywords: [
    "Sebastian Arvin P. Reyes",
    "Vin Reyes",
    "Full Stack Developer",
    "Data Engineering",
    "Data Specialist",
    "IoT Developer",
    "Zero Trust Architecture",
    "Muntinlupa City",
    "Philippines",
    "ShineGuard Hulo",
    "University of Makati",
    "Benchmark Valuers",
    "Remotasks",
  ],
  openGraph: {
    title: "Sebastian Arvin P. Reyes | Full Stack Developer & Data Engineering",
    description: "Portfolio of Sebastian Arvin P. Reyes — Full Stack Developer and Data Engineering specialist based in the Philippines.",
    type: "website",
    url: "https://arvinreyes.vercel.app",
  },
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
          <div className="noise-overlay"></div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
