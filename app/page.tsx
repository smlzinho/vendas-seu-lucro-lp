import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Ecosystem } from "@/components/Ecosystem";
import { Testimonials } from "@/components/Testimonials";
import { Comparison } from "@/components/Comparison";
import { AggressiveCTA } from "@/components/AggressiveCTA";
import { FAQ } from "@/components/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg text-white selection:bg-neon-green selection:text-black">
      <Hero />
      <Problem />
      <Ecosystem />
      <Comparison />
      <Testimonials />
      <AggressiveCTA />
      <FAQ />
    </main>
  );
}
