"use client";
import FeedbackTabs from "@/components/feedback-tabs";
import { Footer } from "@/components/footer";
import Aernime from "@/components/icons/aernime";
import { LoadingScreen } from "@/components/loading-screen";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function FeedbackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-[url('https://res.cloudinary.com/dyjxcujz4/image/upload/v1717142252/layered-waves-haikei_7_olvnqc.svg')] bg-cover">
      <main className="container mx-auto flex flex-col items-center justify-center py-6">
        <Link href="">
        <Aernime className="h-24 mt-2 mb-8" />
        </Link>
        <FeedbackTabs>{children}</FeedbackTabs>
      </main>
      <Footer />
    </div>
  );
}
