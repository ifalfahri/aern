import React, { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export const TextParallax = () => {
  return (
    <section id="about" className="bg-zinc-50">
      <TextParallaxContent
        imgUrl="https://res.cloudinary.com/dyjxcujz4/image/upload/a_-90/c_crop,w_1600,h_960,x_0,y_0/v1745376146/aern/1a8bae8c-f711-4db2-8b88-d8423e0056e8_tain31.jpg"
        subheading="Aern Store"
        heading="Hadir untuk Kita Semua"
      >
        <Content />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://res.cloudinary.com/dyjxcujz4/image/upload/a_-90/c_crop,w_3661,h_2268,x_0,y_0/v1745376214/aern/IMG_8848_sdjdwu.webp"
        subheading="#SahabatBelanjaHemat"
        heading="Kualitas Terbaik dengan Harga Terjangkau"
      >
        <Content2 />
      </TextParallaxContent>
    </section>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: ReactNode;
}) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({
  subheading,
  heading,
}: {
  subheading: string;
  heading: string;
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const Content = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4 text-secondary">
      Kenapa Aern Store?
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-lg text-neutral-600 md:text-xl">
      Aern Store hadir sebagai solusi belanja modern yang mengedepankan kenyamanan dan kepuasan pelanggan. Dengan koleksi produk berkualitas dan layanan prima, kami berkomitmen menjadi partner terpercaya untuk memenuhi kebutuhan sehari-hari keluarga anda.
      </p>
      <p className="mb-8 text-lg text-neutral-600 md:text-xl">
      Nikmati pengalaman berbelanja yang berbeda, dengan harga bersahabat, produk lengkap, dan pelayanan ramah yang akan membuat Anda kembali lagi dan lagi. Karena di Aern Store, kepuasan Anda adalah prioritas utama kami.
      </p>
      <button className="w-full rounded-md bg-secondary px-9 py-4 text-lg md:text-xl text-white transition-opacity hover:opacity-80 md:w-fit">
        Jelajahi Sekarang <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);

const Content2 = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold text-primary md:col-span-4">
    Komitmen Kami
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-lg text-neutral-600 md:text-xl">
      Kami percaya bahwa produk berkualitas tinggi seharusnya dapat diakses oleh semua kalangan. Itulah mengapa Aern Store menjalin kemitraan langsung dengan produsen terpercaya untuk menghilangkan biaya yang tak perlu dan memberikan nilai lebih kepada pelanggan.
      </p>
      <p className="mb-8 text-lg text-neutral-600 md:text-xl">
      Pengalaman belanja yang menyenangkan, pelayanan prima, dan kepuasan pelanggan adalah tiga pilar yang menjadi landasan setiap langkah kami. Karena kesuksesan Aern Store adalah ketika Anda tersenyum puas setelah berbelanja.
      </p>
      <button className="w-full rounded-md bg-secondary px-9 py-4 text-lg md:text-xl text-white transition-opacity hover:opacity-80 md:w-fit">
        Jelajahi Sekarang <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);