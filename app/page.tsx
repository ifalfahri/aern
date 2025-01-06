"use client";

import { LoadingScreen } from "@/components/loading-screen";
import { Navbar } from "@/components/navbar";
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
    <div className="max-w-screen min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
      <Navbar />

      <main className="container mx-auto flex flex-col items-center justify-center py-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
          Selamat Datang di AernStore
        </h1>
        <p className="mt-4 text-lg text-center text-gray-600 dark:text-gray-400">
          AernStore merupakan sebuah website dari toko online yang menjual
          berbagai macam barang dengan harga terjangkau dengan mottonya
          #SahabatBelanjaHemat.
        </p>
      </main>
    </div>
  );
}
