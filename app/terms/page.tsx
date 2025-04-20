"use client";

import { Navbar } from "@/components/navbar";
import { MainFooter } from "@/components/main-footer";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-secondary/30 pb-24">
      <Navbar />
      
      <div className="container mx-auto max-w-4xl px-4 py-16 mt-16">
        <h1 className="text-4xl font-bold text-center mb-8 text-primary">Syarat dan Ketentuan</h1>
        
        <div className="bg-white/80 p-6 mb-8">
          <p className="text-sm text-gray-500 mb-6 text-center">
            Terakhir diperbarui: 20 April 2025
          </p>
          
          <div className="prose prose-pink max-w-none">
            <h2 className="text-2xl font-semibold mb-4">1. Pengenalan</h2>
            <p className="mb-4">
              Selamat datang di Aern Store. Syarat dan Ketentuan ini mengatur penggunaan layanan kami. Dengan mengakses atau menggunakan layanan kami, Anda menyetujui untuk terikat oleh Syarat dan Ketentuan ini.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">2. Definisi</h2>
            <p className="mb-4">
              &ldquo;Aern Store&rdquo; atau &ldquo;kami&rdquo; mengacu pada platform belanja online yang menjual berbagai produk rumah tangga dan kebutuhan sehari-hari.
              &ldquo;Layanan&rdquo; mengacu pada produk, informasi, dan layanan yang disediakan oleh Aern Store.
              &ldquo;Pengguna&rdquo; atau &ldquo;Anda&rdquo; mengacu pada individu yang mengakses atau menggunakan Layanan kami.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">3. Akun Pengguna</h2>
            <p className="mb-4">
              Saat melakukan pemesanan di Aern Store, Anda mungkin diminta untuk memberikan informasi pribadi tertentu. Anda bertanggung jawab untuk menjaga kerahasiaan informasi akun Anda dan bertanggung jawab penuh atas semua aktivitas yang terjadi di bawah akun Anda.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">4. Pemesanan dan Pembayaran</h2>
            <p className="mb-4">
              Dengan melakukan pemesanan, Anda menyatakan bahwa produk atau layanan yang dibeli akan digunakan untuk tujuan yang sah dan sesuai dengan hukum yang berlaku. Kami berhak menolak atau membatalkan pesanan kapan saja karena alasan tertentu, termasuk tetapi tidak terbatas pada ketersediaan produk, kesalahan dalam deskripsi atau harga produk, atau identifikasi aktivitas yang mencurigakan.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">5. Pengiriman dan Pengembalian</h2>
            <p className="mb-4">
              Aern Store berusaha untuk memastikan bahwa semua produk dikirimkan tepat waktu. Namun, kami tidak bertanggung jawab atas keterlambatan pengiriman yang disebabkan oleh faktor-faktor di luar kendali kami. Untuk informasi lebih lanjut tentang kebijakan pengembalian kami, silakan hubungi layanan pelanggan kami.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">6. Perubahan pada Syarat dan Ketentuan</h2>
            <p className="mb-4">
              Kami berhak mengubah Syarat dan Ketentuan ini kapan saja. Perubahan tersebut akan segera berlaku setelah dipublikasikan di situs web kami. Anda setuju untuk secara berkala meninjau Syarat dan Ketentuan ini untuk memastikan Anda tetap mengetahui perubahan apa pun.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">7. Hubungi Kami</h2>
            <p className="mb-4">
              Jika Anda memiliki pertanyaan atau kekhawatiran tentang Syarat dan Ketentuan ini, silakan hubungi kami melalui:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>WhatsApp: <Link href="https://wa.me/6282334039853" className="text-primary hover:text-primary/80">082334039853</Link></li>
              <li>Instagram: <Link href="https://instagram.com/aernstore_" className="text-primary hover:text-primary/80">@aernstore_</Link></li>
              <li>Facebook: <Link href="https://facebook.com/profile.php?id=100093138370890e" className="text-primary hover:text-primary/80">Aern Store</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <Link href="/" className="inline-block px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/80 transition-colors">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
      
      <MainFooter />
    </div>
  );
}