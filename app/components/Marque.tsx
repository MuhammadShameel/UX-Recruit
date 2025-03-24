"use client";
import { useRef, useState, MouseEvent } from "react";
import Image from "next/image";

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
    <div
      className="w-full cursor-grab mt-10 overflow-hidden mb-20 relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
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
          <div
            key={i}
            className="flex-shrink-0  rounded-lg w-40 md:w-64  sm:w-52"
          >
            <Image
              src={marqueImg}
              alt="Marquee item"
              width={300}
              height={300}
              className="h-full rounded-lg w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
