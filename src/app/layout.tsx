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
  title: "Lanny辟谷学院 | 科学断食减肥与九吉公红糖调理 - 马来西亚沙巴",
  description: "Lanny辟谷学院提供结合现代营养学与古法智慧的科学辟谷课程。位于马来西亚沙巴，通过九吉公老红糖调理，帮助您改善月经不调、手脚冰冷，实现不反弹的健康瘦身。立即咨询领取《现代辟谷入门电子书》！",
  keywords: "辟谷, 科学断食, 九吉公老红糖, 减肥, 瘦身, 马来西亚辟谷, 沙巴亚庇, Lanny Lim, 产后修复, 排毒",
  openGraph: {
    title: "Lanny辟谷学院 - 从断食中找回自己",
    description: "不节食、不反弹。Lanny老师带你用九吉公红糖科学辟谷，重塑健康体质。点击领取免费入门电子书。",
    images: [
      {
        url: "https://akovkxdzyilbwfaauyhz.supabase.co/storage/v1/object/public/images/hero/Lanny_Bigu_hero-min.png",
        width: 1200,
        height: 630,
        alt: "Lanny辟谷学院 Hero Image",
      },
    ],
    type: "website",
    locale: "zh_MY",
  },
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
