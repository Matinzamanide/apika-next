"use client"; 
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LoadingApika() {
  const [, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 px-4 relative overflow-hidden">
            <h1 className="relative text-6xl md:text-8xl font-extrabold text-gray-800 tracking-wide mb-8">
        <span className="relative inline-block">
          <span className="absolute top-0 right-1/2 w-3 h-3 bg-blue-500 rounded-full opacity-0 animate-bounce-dot"></span>
        </span>
        APIKA
      </h1>
      <div className="flex gap-4 mt-8">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="w-4 h-4 bg-blue-500 rounded-full shadow-lg"
            animate={{ y: [0, -20, 0] }}
            transition={{ delay: i * 0.2, repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
          />
        ))}
      </div>

      <p className="text-gray-600 text-sm mt-6 animate-pulse">
        در حال بارگذاری سیستم...
      </p>
      <style jsx>{`
        .animate-bounce-dot {
          animation: bounce-dot 1.5s ease-in-out infinite;
        }
        @keyframes bounce-dot {
          0% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1.2); }
          100% { opacity: 0; transform: scale(0); }
        }
      `}</style>
    </div>
  );
}
