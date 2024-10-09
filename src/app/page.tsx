"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import MainSection from "@/components/mainsection";

export default function Home() {
  return (
    <motion.div
      className="min-h-dvh flex flex-col bg-main-black-bg bg-cover bg-[#010101]/85 bg-blend-overlay"
      initial={{ scale: 2 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="relative w-full">
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <div className="w-full h-full flex flex-row justify-around">
            <div className="h-full w-px bg-[#FFFFFF26]"></div>
            <div className="h-full w-px bg-[#FFFFFF26]"></div>
            <div className="h-full w-px bg-[#FFFFFF26]"></div>
          </div>
        </div>

        <Navbar />
        <MainSection />
      </div>
    </motion.div>
  );
}
