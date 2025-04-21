"use client";
import React, { useRef, useState } from "react";
import marqueImg from "../../public/assets/images/marque-image.png";
import Image from "next/image";

const images = [
  "../../public/assets/images/marque-image.png",
  "../../public/assets/images/marque-image.png",
  "../../public/assets/images/marque-image.png",
  "../../public/assets/images/marque-image.png",
  "../../public/assets/images/marque-image.png ",
];

export default function Marquee() {
  return (
    <div className="w-full overflow-hidden py-10">
      <div className="flex gap-14 animate-marquee whitespace-nowrap">
        {images.concat(images).map((index) => (
          <Image
            key={index}
            src={marqueImg}
            alt={`marquee-image-${index}`}
            width={120}
            height={80}
            className="rounded-md pointer-events-none"
          />
        ))}
      </div>
    </div>
  );
}
