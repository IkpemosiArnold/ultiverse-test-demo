"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { motion } from 'framer-motion';




export default function Demo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: { duration: 1, ease: 'easeOut' },
      }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.5 } }}
      className="flex items-center justify-center min-h-screen bg-black text-white"
    >
    <div className="min-h-dvh flex flex-col bg-black">
   <Navbar />
   <img src="/ultiverse-popup.png" className="mt-16 md:mt-0 md:p-16"/>
<Footer popupOpen={true} />
    </div>
    </motion.div>
  );
}
