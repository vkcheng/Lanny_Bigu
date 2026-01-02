import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Philosophy from "@/components/Philosophy";
import Profile from "@/components/Profile";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

import Script from "next/script";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": "Lanny辟谷学院",
    "founder": "Lanny Lim Yee Yee",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kota Kinabalu",
      "addressRegion": "Sabah",
      "addressCountry": "MY"
    },
    "description": "专注于科学断食与九吉公老红糖调理的健康咨询服务。",
    "url": "https://www.lannybigu.com"
  };

  return (
    <main className="min-h-screen selection:bg-bamboo/30">
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Intro />
      <Philosophy />
      <Profile />
      <Testimonials />
      <FAQ />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
