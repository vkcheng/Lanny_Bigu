import type { Metadata } from "next";
import { Noto_Serif_SC, Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const notoSerif = Noto_Serif_SC({
  variable: "--font-serif",
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoSans = Noto_Sans_SC({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "忆养身心 · 辟谷学院 | Lanny Bigu",
  description: "从断食中找回自己，从坚持中重塑健康。结合现代营养学和古法智慧的科学辟谷。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={clsx(
          notoSerif.variable,
          notoSans.variable,
          "antialiased bg-rice text-ink font-sans selection:bg-cinnabar/20"
        )}
      >
        {children}
      </body>
    </html>
  );
}
