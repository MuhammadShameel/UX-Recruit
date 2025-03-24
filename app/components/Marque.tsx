"use client";
import { useRef, useState, MouseEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import marqueImg from "../../public/assets/images/marque-image.png";

export default function Marquee() {
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  // Start dragging
  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!marqueeRef.current) return;

    setIsDragging(true);
    setStartX(e.pageX - marqueeRef.current.offsetLeft);
    setScrollLeft(marqueeRef.current.scrollLeft);
  };

  // Dragging logic
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !marqueeRef.current) return;
    e.preventDefault();

    const x = e.pageX - marqueeRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust for speed
    marqueeRef.current.scrollLeft = scrollLeft - walk;
  };

  // Stop dragging
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  return (
    <motion.div
      className="w-full cursor-grab mt-10 overflow-hidden mb-20 relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      initial={{ opacity: 0, y: 50 }} // Animation starts from below
      whileInView={{ opacity: 1, y: 0 }} // Becomes visible on scroll
      viewport={{ once: true, amount: 0.2 }} // Triggers animation when 20% of it is in view
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div
        ref={marqueeRef}
        className={`flex space-x-10 whitespace-nowrap transition-all ${
          isPaused ? "animate-none" : "animate-marquee"
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {/* Marquee items */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="flex-shrink-0 rounded-lg w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Image
              src={marqueImg}
              alt="Marquee item"
              width={300}
              height={300}
              className="h-full rounded-lg w-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
