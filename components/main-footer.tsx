import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export function MainFooter() {
  return (
    <footer className="bg-white text-gray-800">
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">
              Tentang Kami
            </h3>
            <p className="text-gray-700 mb-4">
              Aern Store hadir sebagai solusi belanja modern yang mengedepankan
              kenyamanan dan kepuasan pelanggan. Produk berkualitas dengan harga
              terjangkau untuk kebutuhan sehari-hari keluarga Indonesia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">
              Tautan Cepat
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  Syarat dan Ketentuan
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link
                  href="/feedback"
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  Kritik & Saran
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">
              Hubungi Kami
            </h3>
            <div className="flex items-center space-x-4 mb-4">
              <Link
                href="https://instagram.com/aernstore_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                <FaInstagram size={24} />
              </Link>
              <Link
                href="https://facebook.com/profile.php?id=100093138370890e"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                <FaFacebook size={24} />
              </Link>
              <Link
                href="https://wa.me/6282334039853"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                <FaWhatsapp size={24} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            © {new Date().getFullYear()} Aern Store. Hak Cipta Dilindungi.
          </p>
          <p className="text-sm text-gray-600">
            Website oleh{" "}
            <Link
              href="https://ifal.me"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              ifalfahri
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
