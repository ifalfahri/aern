"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { StarRating } from "./star-rating";

export default function FeedbackTabs({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState(pathname);
  const [isSuccess, setIsSuccess] = useState(false);
  const [tabBounds, setTabBounds] = useState({ width: 0, left: 0 });
  const tabsRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Tentukan sheet name berdasarkan tab yang dipilih
    const sheetName = isRatingTab ? "Rating dan Pengaduan" : "Request Barang";

    // Data yang akan dikirim
    const data = {
      sheet: sheetName,
      feedback,
      rating: isRatingTab ? String(rating) : "",
    };

    await fetch(
      "https://script.google.com/macros/s/AKfycbx5wnt5fvKcLhyxKefIY3yjhgAkzdxyOn7b4sBcAtgVGuKxgwisZiAC_67opkm7-2v2/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(data),
        mode: "no-cors",
      }
    );

    setIsSuccess(true);
    setIsSubmitting(false);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    if (isSuccess) {
      setFeedback("");
      setRating(0);
    }
  };

  const isRatingTab = pathname === "/feedback/rating";

  useEffect(() => {
    setActiveTab(pathname);
  }, [pathname]);

  useEffect(() => {
    if (tabsRef.current) {
      const activeTabElement = tabsRef.current.querySelector(
        `a[href="${activeTab}"]`
      );
      if (activeTabElement) {
        const { width, left } = activeTabElement.getBoundingClientRect();
        const containerLeft = tabsRef.current.getBoundingClientRect().left;
        setTabBounds({ width, left: left - containerLeft });
      }
    }
  }, [activeTab]);

  const getPlaceholder = () => {
    if (pathname !== "/feedback/rating")
      return "Ceritakan permintaan atau saranmu di sini, ya! 😊";
    switch (rating) {
      case 1:
        return "Aduh, maaf banget ya atas pengalaman kurang menyenangkannya. Ceritain aja, kami siap dengerin!";
      case 2:
        return "Maaf ya kalau ada yang kurang nyaman. Boleh dong sharing apa yang bikin kurang sreg?";
      case 3:
        return "Makasih udah kasih masukan! Ada ide atau saran supaya kami bisa lebih baik lagi?";
      case 4:
        return "Senang dengar kamu cukup puas! Ada hal seru lain yang bisa kami perbaiki atau tambahkan?";
      case 5:
        return "Wah, makasih banyak! Ceritain dong apa yang paling kamu suka dari layanan kami?";
      default:
        return "Yuk, bagikan pengalamanmu di sini!";
    }
  };

  if (pathname === "/feedback") {
    return <>{children}</>;
  }

  return (
    <div className="w-full max-w-3xl mx-auto px-8 sm:px-6 lg:px-8 z-10">
      <div
        className="flex space-x-1 rounded-lg bg-muted p-1 mb-4"
        role="tablist"
        aria-orientation="horizontal"
      >
        <Link
          href="/feedback/rating"
          className={`flex-1 ${
            pathname === "/feedback/rating"
              ? "bg-background text-foreground"
              : ""
          } px-3 py-1.5 text-sm font-medium text-center rounded-md transition-all`}
          role="tab"
          aria-current={isRatingTab ? "page" : undefined}
        >
          Rating
        </Link>
        <Link
          href="/feedback/request"
          className={`flex-1 ${
            pathname === "/feedback/request"
              ? "bg-background text-foreground"
              : ""
          } px-3 py-1.5 text-sm font-medium text-center rounded-md transition-all`}
          role="tab"
          aria-current={!isRatingTab ? "page" : undefined}
        >
          Request
        </Link>
        <motion.div
          className="absolute top-1 bottom-1 left-1 rounded-md bg-background"
          initial={false}
          animate={{
            width: tabBounds.width,
            x: tabBounds.left,
          }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, x: isRatingTab ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: isRatingTab ? 20 : -20 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <Card className="mt-4">
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4 pt-6">
                {pathname === "/feedback/rating" && (
                  <div className="space-y-2 flex flex-col items-center">
                    <Label htmlFor="rating" className="text-sm sm:text-base">
                      Rating
                    </Label>
                    <StarRating onChange={setRating} />
                  </div>
                )}
                <div className="space-y-2">
                  <Label htmlFor="feedback" className="text-sm sm:text-base">
                    Pesan
                  </Label>
                  <Textarea
                    id="feedback"
                    placeholder={getPlaceholder()}
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    className="min-h-[100px] sm:min-h-[150px] text-sm sm:text-base"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button
                  type="submit"
                  className="w-full sm:w-auto sm:min-w-[100px]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Mengirim..." : "Kirim"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </motion.div>
      </AnimatePresence>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="w-80 rounded-lg sm:w-[500px]">
          <DialogHeader>
            <DialogTitle className="sm:mb-2">
              {isSuccess ? "Berhasil!" : "Error"}
            </DialogTitle>
            <DialogDescription>
              {isSuccess ? (
                <div className="flex items-center sm:space-x-2 text-green-600">
                  <CheckCircle className="w-8 h-8 sm:w-6 sm:h-6" />
                  <span className="text-sm sm:text-base">
                    Pesan{" "}
                    {pathname === "/feedback/rating"
                      ? "rating dan pengaduan"
                      : "request barang"}
                    mu telah berhasil terkirim.
                  </span>
                </div>
              ) : (
                <div className="flex items-center space-x-2 text-red-600">
                  <XCircle className="w-8 h-8 sm:w-6 sm:h-6" />
                  <span className="text-sm sm:text-base">
                    Terjadi error saat ingin mengirim{" "}
                    {pathname === "/feedback/rating" ? "rating" : "request"}.
                    Coba lagi.
                  </span>
                </div>
              )}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={handleCloseModal} className="w-full sm:w-auto">
              Baiklah
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
