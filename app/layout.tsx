import { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aern Store",
  description:
    "Aern Store merupakan sebuah website dari toko online yang menjual berbagai macam barang dengan harga terjangkau dengan mottonya #SahabatBelanjaHemat. Berlokasi di Sulawesi Tengah, Indonesia",
  keywords: [
    "toko online",
    "belanja hemat",
    "Sulawesi Tengah",
    "e-commerce",
    "Aern Store",
    "Aern",
    "#SahabatBelanjaHemat",
    "Toili",
    "Toili Barat",
    "Uwelolu",
    "Unit 26",
    "Desa Uwelolu",
    "toko online toili",
  ],
  authors: [{ name: "Aldo", url: "https://www.aern.web.id" }],
  creator: "Aldo",
  publisher: "Aldo",
  metadataBase: new URL("https://aern.web.id"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Aern Store - #SahabatBelanjaHemat",
    description:
      "Aern Store merupakan sebuah website dari toko online yang menjual berbagai macam barang dengan harga terjangkau dengan mottonya #SahabatBelanjaHemat. Berlokasi di Sulawesi Tengah, Indonesia",
    url: "https://aern.web.id",
    siteName: "Aern Store",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Aern Store",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="95ff212a-1b5d-439f-b1ea-41d2af07bf2a"
          strategy="afterInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
