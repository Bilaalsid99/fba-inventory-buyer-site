import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import WhatWeReview from "@/components/WhatWeReview";
import NotSuitableSection from "@/components/NotSuitableSection";
import BestFitSection from "@/components/BestFitSection";
import QuoteForm from "@/components/QuoteForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sell Amazon FBA UK Removal Inventory | Free Inventory Quote",
  description:
    "Before you dispose of or liquidate Amazon FBA UK inventory, upload your removal or unfulfillable inventory list for a free, no-obligation quote.",
  keywords: [
    "Amazon FBA UK removal inventory",
    "Amazon FBA unfulfillable inventory",
    "Amazon FBA disposal alternative",
    "Amazon FBA liquidation alternative",
    "Amazon removal inventory buyer UK",
    "sell Amazon FBA inventory UK",
    "Amazon FBA customer returns",
    "Amazon FBA overstock"
  ]
};

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <WhatWeReview />
      <NotSuitableSection />
      <BestFitSection />
      <QuoteForm />
      <FAQ />
      <Footer />
    </main>
  );
}
