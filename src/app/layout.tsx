import type { Metadata } from "next";
import "./fonts.css";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Wordmark } from "@/components/Wordmark";
import { SiteChrome } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "AI Playground · Pakistan's Biggest AI Film Making Competition · 6 June 2026",
  description:
    "ImagineArt presents AI Playground, Pakistan's Biggest AI Film Making Competition. Two days. Three stages. Approx $5,000 prize pool. For Content Creators, Film Makers, AI Content Creators, Storytellers, Screenwriters — and every creative mind. Limited to 150 seats. 6 June 2026.",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <SiteChrome />
          <Wordmark />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
