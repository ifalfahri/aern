import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rating dan Pengaduan',
  description: 'Berikan Aern Store penilaian dan lakukan pengaduan jika ada kekurangan.',
}

export default function RatingPage() {
  return (
    <div className="max-h-screen mb-6 text-center">
      <p className="text-muted-foreground">
        Silahkan berikan penilaian dan keluh kesah anda. Tenang, pengaduan ini bersifat anonim. Nama anda tidak akan terlihat oleh kami.
      </p>
    </div>
  )
}