import { motion } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const ShuffleHero = () => {
  return (
    <section id="home" className="w-full h-screen pt-28 md:pt-20 px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-7xl mx-auto">
      <div>
        <span className="block mb-4 text-sm md:text-md text-primary font-medium">
          #SahabatBelanjaHemat
        </span>
        <h3 className="text-4xl md:text-6xl text-[#ff8dd3] font-extrabold">
          Aern Store <span className="text-[#ffabde]">hadir untuk anda</span>
        </h3>
        <p className="text-base md:text-lg text-zinc-600 my-4 md:my-6">
        Kami menyediakan berbagai macam produk yang berkualitas dengan harga yang terjangkau. Kami juga menyediakan layanan reseller untuk anda yang ingin berjualan tanpa harus mengeluarkan modal yang besar.
        </p>
        <Link href="https://wa.me/6282334039853">
        <Button>Gabung Reseller</Button>
        </Link>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dyjxcujz4/image/upload/f_auto/v1745376134/aern/IMG_9490_n9wxax.webp",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dyjxcujz4/image/upload/f_auto/v1745376359/aern/IMG_6694_qpmk1e.webp",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dyjxcujz4/image/upload/f_auto/v1745376340/aern/IMG_6589_twwp4f.webp",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dyjxcujz4/image/upload/f_auto/v1745376263/aern/IMG_0895_pzezpe.webp",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dyjxcujz4/image/upload/f_auto/v1745376262/aern/IMG_0921_tdmsyk.webp",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dyjxcujz4/image/upload/f_auto/v1745376211/aern/db68e10c-7b1a-417f-a0ae-7f8585fdb3d0_gytlup.webp",
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/dyjxcujz4/image/upload/f_auto/v1745376175/aern/IMG_2119_gfdpqz.webp",
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/dyjxcujz4/image/upload/f_auto/v1745376168/aern/IMG_3173_xkbmdg.webp",
  },
  {
    id: 9,
    src: "https://res.cloudinary.com/dyjxcujz4/image/upload/f_auto/v1745376164/aern/IMG_5099_s5tubi.webp",
  },
  {
    id: 10,
    src: "https://res.cloudinary.com/dyjxcujz4/image/upload/f_auto/v1745376157/aern/IMG_7298_nsf8ee.webp",
  },
  {
    id: 11,
    src: "https://res.cloudinary.com/dyjxcujz4/image/upload/f_auto/v1745376166/aern/IMG_5098_rdxwu4.webp",
  },
  {
    id: 12,
    src: "https://res.cloudinary.com/dyjxcujz4/image/upload/f_auto/v1745376146/aern/1a8bae8c-f711-4db2-8b88-d8423e0056e8_tain31.webp",
  },
  {
    id: 13,
    src: "https://res.cloudinary.com/dyjxcujz4/image/upload/f_auto/v1745376215/aern/e8566fe3-64f0-4e49-ab1f-18279db8be41_ufbwib.webp",
  },
  {
    id: 14,
    src: "https://res.cloudinary.com/dyjxcujz4/image/upload/f_auto/v1745376234/aern/IMG_0177_om4v3l.webp",
  },
  {
    id: 15,
    src: "https://res.cloudinary.com/dyjxcujz4/image/upload/f_auto/v1745376214/aern/IMG_8848_sdjdwu.webp",
  },
  {
    id: 16,
    src: "https://res.cloudinary.com/dyjxcujz4/image/upload/f_auto/v1745376137/aern/IMG_7973_k2ra7o.webp",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [squares, setSquares] = useState(() => generateSquares());

  const shuffleSquares = useCallback(() => {
    setSquares(generateSquares());
    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  }, []);

  useEffect(() => {
    shuffleSquares();
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [shuffleSquares]);

  return (
    <div className="hidden md:grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares}
    </div>
  );
};

export default ShuffleHero;