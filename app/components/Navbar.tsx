"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import Logo from "../../public/assets/images/logo.png";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-4 relative z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4">
          <div className="logo-wrapper max-w-[110px] sm:max-w-[140px]">
            <Image src={Logo} alt="logo" className="" />
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="relative w-10 h-10 focus:outline-none"
          >
            {/* Hamburger Icon */}
            <FaBars
              className={`absolute inset-0 w-6 h-6 transition-all duration-300 transform ${
                isOpen
                  ? "opacity-0 scale-90 rotate-45"
                  : "opacity-100 scale-100 rotate-0"
              }`}
            />

            {/* Close Icon */}
            <IoClose
              className={`absolute inset-0 w-8 h-8  transition-all duration-300 transform ${
                isOpen
                  ? "opacity-100 scale-100 rotate-0"
                  : "opacity-0 scale-90 -rotate-45"
              }`}
            />
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2">
            <Link href="/" className="block font-anton text-base">
              Home
            </Link>
            <Link href="/about" className="block font-anton text-base">
              About
            </Link>
            <Link href="/projects" className="block font-anton text-base">
              Projects
            </Link>
            <Link href="/contact" className="block font-anton text-base">
              Contact Us
            </Link>
            <Link href="/blogs" className="block font-anton text-base">
              Blogs
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
