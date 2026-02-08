'use client';

import { motion, useMotionValue, useTransform } from "framer-motion";

export default function HeroMotion() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  return (
    <motion.div
      onMouseMove={handleMouse}
      style={{ rotateX, rotateY, perspective: 1000 }}
      className="relative order-1 lg:order-2"
    >
      <motion.img
        src="https://apitak.ir/images/pumpbanner.jpg"
        alt="Industrial Pump"
        className="rounded-[3rem] shadow-2xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      />
    </motion.div>
  );
}
