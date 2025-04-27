"use client";

import { LoadingScreen } from "@/components/loading-screen";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MessageSquare, Star } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function FeedbackOverview() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="space-y-6">
      <Card className="border-0 shadow-transparent">
        <CardHeader className="text-center">
          <CardTitle>Selamat Datang ke Feedback Center AernStore</CardTitle>
          <CardDescription>
            Silahkan pilih menu yang diinginkan.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-400" />
                Rating dan Pengaduan
              </CardTitle>
              <CardDescription>
                Berikan penilaian dan keluh kesah anda agar kami dapat
                memperbaikinya.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="/feedback/rating">Aku mau Rating</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-blue-500" />
                Request Barang
              </CardTitle>
              <CardDescription>
                Beritahu kami barang apa yang kamu ingin kami sediakan di toko
                kami.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="/feedback/request">Aku mau Request</Link>
              </Button>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
