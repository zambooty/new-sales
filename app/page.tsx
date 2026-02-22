import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { Services } from "@/components/Services";
import { WhyMakesoft } from "@/components/WhyMakesoft";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <NavBar />
      <main className="flex-1">
        <Hero />
        <TrustedBy />
        <Services />
        <WhyMakesoft />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
