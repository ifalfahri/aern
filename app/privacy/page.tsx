"use client";

import { MainFooter } from "@/components/main-footer";
import { Navbar } from "@/components/navbar";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-secondary/30 pb-24">
      <Navbar />

      <div className="container mx-auto max-w-4xl px-4 py-16 mt-16">
        <h1 className="text-4xl font-bold text-center mb-8 text-primary">
          Kebijakan Privasi
        </h1>

        <div className="bg-white/80 p-6 mb-8">
          <p className="text-sm text-gray-500 mb-6 text-center">
            Terakhir diperbarui: 20 April 2025
          </p>

          <div className="prose prose-pink max-w-none">
            <h2 className="text-2xl font-semibold mb-4">1. Pendahuluan</h2>
            <p className="mb-4">
              Di Aern Store, kami menghargai kepercayaan yang Anda berikan
              kepada kami saat Anda memberikan informasi pribadi Anda. Kebijakan
              Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan,
              dan melindungi informasi pribadi Anda.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
              2. Informasi yang Kami Kumpulkan
            </h2>
            <p className="mb-4">
              Kami dapat mengumpulkan informasi berikut dari Anda:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Informasi identitas (nama, alamat, nomor telepon)</li>
              <li>Informasi kontak (alamat email, nomor WhatsApp)</li>
              <li>Rincian transaksi (produk yang dibeli, metode pembayaran)</li>
              <li>Informasi teknis (alamat IP, jenis perangkat)</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">
              3. Bagaimana Kami Menggunakan Informasi Anda
            </h2>
            <p className="mb-4">
              Kami menggunakan informasi pribadi Anda untuk:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Memproses pesanan dan pengiriman</li>
              <li>Komunikasi tentang produk atau layanan kami</li>
              <li>Meningkatkan layanan pelanggan dan pengalaman belanja</li>
              <li>
                Mengirim informasi promosi yang relevan (dengan persetujuan
                Anda)
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">
              4. Berbagi Informasi Anda
            </h2>
            <p className="mb-4">
              Kami tidak akan menjual, mendistribusikan, atau menyewakan
              informasi pribadi Anda kepada pihak ketiga kecuali kami memiliki
              izin Anda atau diwajibkan oleh hukum untuk melakukannya. Kami
              mungkin menggunakan penyedia layanan pihak ketiga untuk membantu
              kami mengoperasikan bisnis kami, seperti layanan pengiriman atau
              pemrosesan pembayaran.
            </p>

            <h2 className="text-2xl font-semibold mb-4">5. Keamanan Data</h2>
            <p className="mb-4">
              Kami berkomitmen untuk memastikan bahwa informasi Anda aman. Untuk
              mencegah akses atau pengungkapan yang tidak sah, kami telah
              menerapkan prosedur fisik, elektronik, dan manajerial yang tepat
              untuk melindungi informasi yang kami kumpulkan secara online.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
              6. Penggunaan Cookies
            </h2>
            <p className="mb-4">
              Situs web kami menggunakan cookies untuk meningkatkan pengalaman
              pengguna Anda. Cookies adalah file kecil yang memungkinkan situs
              web untuk merekam aktivitas pengguna. Anda dapat mengatur browser
              Anda untuk menolak cookies atau memberi tahu Anda ketika cookies
              dikirim.
            </p>

            <h2 className="text-2xl font-semibold mb-4">7. Hak-hak Anda</h2>
            <p className="mb-4">Anda memiliki hak untuk:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Mengakses informasi pribadi Anda yang kami pegang</li>
              <li>Meminta koreksi informasi yang tidak akurat</li>
              <li>Meminta penghapusan data Anda (dengan ketentuan tertentu)</li>
              <li>Menarik persetujuan Anda untuk pengolahan data</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">
              8. Perubahan pada Kebijakan Privasi
            </h2>
            <p className="mb-4">
              Kami berhak untuk memperbarui Kebijakan Privasi ini kapan saja.
              Kami akan memposting perubahan apa pun di halaman ini dengan
              tanggal pembaruan. Kami mendorong Anda untuk sering memeriksa
              halaman ini untuk tetap mendapatkan informasi tentang bagaimana
              kami melindungi informasi pribadi Anda.
            </p>

            <h2 className="text-2xl font-semibold mb-4">9. Hubungi Kami</h2>
            <p className="mb-4">
              Jika Anda memiliki pertanyaan atau kekhawatiran tentang Kebijakan
              Privasi ini, silakan hubungi kami melalui:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                WhatsApp:{" "}
                <Link
                  href="https://wa.me/6282334039853"
                  className="text-primary hover:text-primary/80"
                >
                  082334039853
                </Link>
              </li>
              <li>
                Instagram:{" "}
                <Link
                  href="https://instagram.com/aernstore_"
                  className="text-primary hover:text-primary/80"
                >
                  @aernstore_
                </Link>
              </li>
              <li>
                Facebook:{" "}
                <Link
                  href="https://facebook.com/profile.php?id=100093138370890e"
                  className="text-primary hover:text-primary/80"
                >
                  Aern Store
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/80 transition-colors"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>

      <MainFooter />
    </div>
  );
}
