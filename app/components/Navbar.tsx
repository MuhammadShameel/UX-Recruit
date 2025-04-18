"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../public/assets/images/logo.png";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="px-4 relative z-50">
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-4">
            <div className="logo-wrapper max-w-[110px] sm:max-w-[140px]">
              <Image src={Logo} alt="logo" className="" />
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="focus:outline-none px-4 py-2 lg:px-0 md:px-0 sm:px-0"
            >
              <span className="text-lg font-anton font-medium cursor-pointer">
                {isOpen ? "Close" : "Menu"}
              </span>
            </button>
          </div>

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
    </>
  );
};
