"use client";

import { LoadingScreen } from "@/components/loading-screen";
import { Navbar } from "@/components/navbar";
import ShuffleHero from "@/components/shuffle-hero";
import { useEffect, useState } from "react";
import { BouncyCardsFeatures } from "@/components/bouncy-cards-features";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <main className="bg-[#ff8dd3]">
      <Navbar />
      <div className="bg-[url('https://res.cloudinary.com/dyjxcujz4/image/upload/v1717142252/layered-waves-haikei_7_olvnqc.svg')] bg-cover">
      <ShuffleHero />
      </div>
      <BouncyCardsFeatures />
    </main>
  );
}
