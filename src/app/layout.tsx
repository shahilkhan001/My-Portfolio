import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Mohammad Shahil Khan — Software Engineer & Full-Stack Developer",
    template: "%s | Mohammad Shahil Khan",
  },
  description:
    "Portfolio of Mohammad Shahil Khan, a software engineer and full-stack developer building practical web, Android, and AI-enabled software.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="sr-only z-50 rounded-md bg-ink px-4 py-2 text-sm font-medium text-ink-inverse focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <div id="main-content" tabIndex={-1} className="flex-1">
          {children}
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
