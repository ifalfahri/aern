import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const BouncyCardsFeatures = () => {
  return (
    <section className="bg-gradient-to-b from-secondary to-zinc-100">
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <h2 className="max-w-2xl text-4xl text-primary-foreground font-bold md:text-5xl">
          Belanja mudah dan murah
          <span className="text-pink-200"> hanya dari rumah!</span>
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="whitespace-nowrap rounded-lg bg-white/40 px-4 py-2 font-medium text-white transition-colors hover:bg-white/20"
        >
          <Link href="https://wa.me/6282334039853">
          Info Lebih Lanjut
          </Link>
        </motion.button>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4 text-violet-400">
          <CardTitle>Mudah</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-indigo-50">
              {/* FEATURE DEMO HERE */}
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-8 text-orange-400">
          <CardTitle>Murah</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-orange-50">
              {/* FEATURE DEMO HERE */}
            </span>
          </div>
        </BounceCard>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-8 text-emerald-400">
          <CardTitle>Ramah</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-400 to-emerald-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-emerald-50">
              {/* FEATURE DEMO HERE */}
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4 text-red-400">
          <CardTitle>Lengkap</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-400 to-red-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-red-50">
              {/* FEATURE DEMO HERE */}
            </span>
          </div>
        </BounceCard>
      </div>
    </div>
    </section>
  );
};

const BounceCard = ({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-white/80 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
  );
};