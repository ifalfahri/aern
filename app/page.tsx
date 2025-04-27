"use client";

import { BouncyCardsFeatures } from "@/components/bouncy-cards-features";
import { MainFooter } from "@/components/main-footer";
import { Navbar } from "@/components/navbar";
import ShuffleHero from "@/components/shuffle-hero";
import { TextParallax } from "@/components/text-parallax";

export default function Home() {
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
