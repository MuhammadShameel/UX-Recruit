"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "../../public/assets/images/logo.png";
import Border from "../../public/assets/images/hero-border.png";
import Shade from "../../public/assets/images/hero-shade.png";
// import heroVideo from "../../public/assets/images/";

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      {/* Navbar  */}
      <nav>
        <div className="max-w-6xl mx-auto ">
          <div className="flex lg:justify-between md:justify-between  sm:justify-between  justify-center items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src={Logo}
                alt="logo"
                className="lg:h-10 lg:w-[281px] md:h-10 md:w-[281px] sm:h-10 sm:w-[281px] h-6 w-[181px]"
              />
            </div>

            {/* Menu Button (Bars) for Mobile */}

            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="focus:outline-none px-5 lg:px-0 md:px-0 sm:px-0 hover:cursor-pointer"
            >
              <span className="text-lg font-anton font-medium">
                {isOpen ? "Close" : "Menu"}
              </span>
            </button>

            {/* Navigation Links */}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="/" className="block">
                Home
              </a>
              <a href="/about" className="block">
                About
              </a>
              <a href="/contact" className="block">
                Contact Us
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content  */}
      <section className="relative text-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          {/* Left Side: Text Content */}
          <div className="lg:w-2/3 text-center lg:text-left mt-20">
            <h2
              className=" font-anton font-normal leading-[100%] uppercase"
              style={{ letterSpacing: "-4px" }}
            >
              A FULL TEAM FOR{" "}
              <span className="primary-color">
                THE PRICE OF A SINGLE DESIGNER
              </span>
            </h2>
            <svg
              className="mt-[-25px]"
              xmlns="http://www.w3.org/2000/svg"
              width="636"
              height="50"
              viewBox="0 0 636 50"
              fill="none"
            >
              <path
                d="M233.479 30.4598C291.107 33.9261 349.161 32.1305 406.867 32.1305C470.245 32.1305 533.013 34.448 596.035 41.7839C600.495 42.303 604.955 42.8255 609.401 43.4546C612.299 43.8647 619.129 42.8222 617.941 45.4967C616.05 49.7501 578.476 47.1647 577.1 47.1674C462.468 47.3985 347.833 47.1674 233.2 47.1674C156.491 47.1674 79.6135 48.6424 2.91331 47.1674C-1.61834 47.0803 11.9543 46.4966 16.4651 46.0536C45.3761 43.2141 74.0893 38.8601 103.066 36.5859C235.907 26.1605 370.635 32.1305 503.772 32.1305C545.077 32.1305 668.992 32.1305 627.687 32.1305C511.569 32.1305 395.45 32.1305 279.332 32.1305C239.574 32.1305 199.816 32.1305 160.058 32.1305C137.936 32.1305 204.302 32.1305 226.425 32.1305C353.279 32.1305 733.842 32.1305 606.988 32.1305C543.13 32.1305 479.791 21.9468 416.242 16.7224C363.997 12.4271 311.821 10.152 259.469 7.99726C242.145 7.28423 226.786 5.7673 210.088 2.05676"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
            <div className="grid grid-cols-12 gap-8 mt-32">
              {/* First Column: Button (3 Columns) */}
              <div className="col-span-3 flex justify-center md:justify-end">
                <button className="px-10 py-6 bg-white text-[1.25rem] leading-[120%] font-normal gap-2 font-anton items-center justify-center primary-color rounded-[64px] hover:opacity-80 transition">
                  HIRE NOW
                </button>
              </div>

              {/* Second Column: Text (9 Columns) */}
              <div className="col-span-9 flex items-center">
                <p className="font-semibold leading-[160%] font-manrope">
                  Get unlimited UI/UX design services with a simple monthly
                  subscription. We specialize in helping non-technical founders
                  bring their ideas to life with stunning, user-focused designs.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Image with Overlay */}
          <div className="lg:w-1/3 relative">
            {/* Base Image */}
            <div className="relative lg:left-7">
              <Image
                src={Border}
                width={395} // Exact width
                height={576} // Exact height
                alt="Base Image"
                className="w-full h-auto rounded-[32px]"
              />
            </div>

            {/* Video */}
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-[395px] h-[60%] max-h-[576px] rounded-[192px] overflow-hidden z-20"
              style={{
                background:
                  "linear-gradient(0deg, rgba(157, 3, 134, 0.12) 0%, rgba(157, 3, 134, 0.12) 100%)",
              }}
            >
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source
                  src="/assets/images/bg-video-hero.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Overlay Image (Larger than Base Image) */}
            <div className="absolute top-0 left-0 w-full h-full z-10">
              <Image
                src={Shade}
                alt="Overlay Image"
                className="relative top-24 -left-1 w-[80%] max-w-[395px] h-[60%] max-h-[576px] rounded-[32px] scale-150"
              />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
