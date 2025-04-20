"use client";

import { LoadingScreen } from "@/components/loading-screen";
import { Navbar } from "@/components/navbar";
import ShuffleHero from "@/components/shuffle-hero";
import { useEffect, useState } from "react";
import { BouncyCardsFeatures } from "@/components/bouncy-cards-features";
import { TextParallax } from "@/components/text-parallax";
import { MainFooter } from "@/components/main-footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="bg-secondary">
      <Navbar />
      <div className="bg-[url('https://res.cloudinary.com/dyjxcujz4/image/upload/v1717142252/layered-waves-haikei_7_olvnqc.svg')] bg-cover">
        <ShuffleHero />
      </div>
      <BouncyCardsFeatures />
      <TextParallax />
      <MainFooter />
    </div>
  );
}
