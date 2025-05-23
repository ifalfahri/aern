import Link from 'next/link'
import { FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa'

export function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 w-full">
      <div className="container mx-auto max-w-3xl px-4 py-4">
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="flex items-center space-x-4">
            <Link
              href="https://instagram.com/aernstore_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-100 transition-colors"
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              href="https://facebook.com/profile.php?id=100093138370890e"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-100 transition-colors"
            >
              <FaFacebook size={24} />
            </Link>
            <Link
              href="https://wa.me/6282334039853"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-100 transition-colors"
            >
              <FaWhatsapp size={24} />
            </Link>
          </div>
          <p className="text-sm text-white">
            © {new Date().getFullYear()} AernStore. Website oleh <Link href="https://ifal.me" className="hover:text-pink-600 transition-colors">ifalfahri</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}