"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../public/assets/images/logo.png";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src={Logo}
              alt="logo"
              className="h-6 w-[181px] lg:h-10 lg:w-[281px] md:h-10 md:w-[281px] sm:h-10 sm:w-[281px]"
            />
          </div>

          {/* Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="focus:outline-none px-4 py-2 lg:px-0 md:px-0 sm:px-0"
          >
            <span className="text-lg font-anton font-medium">
              {isOpen ? "Close" : "Menu"}
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 px-4 space-y-2">
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
