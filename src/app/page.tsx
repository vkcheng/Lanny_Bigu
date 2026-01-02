import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Philosophy from "@/components/Philosophy";
import Profile from "@/components/Profile";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-bamboo/30">
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
