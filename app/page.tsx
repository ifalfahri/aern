"use client";

import { LoadingScreen } from "@/components/loading-screen";
import { Navbar } from "@/components/navbar";
import ShuffleHero from "@/components/shuffle-hero";
import { useEffect, useState } from "react";

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
    <div className="bg-gradient-to-br from-primary/20 to-secondary/20">
      <Navbar />

      <ShuffleHero />
    </div>
  );
}
