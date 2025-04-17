"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../public/assets/images/logo.png";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src={Logo}
                alt="logo"
                className="h-6 w-[181px] lg:h-10 lg:w-[281px] md:h-10 md:w-[281px] sm:h-10 sm:w-[281px]"
              />
            </div>

            {/* Menu Button (Bars) for Mobile */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="focus:outline-none hover:cursor-pointer lg:px-0 md:px-0 px-5 sm:px-0"
            >
              <span className="text-lg font-anton font-medium">
                {isOpen ? "Close" : "Menu"}
              </span>
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="mt-4">
              <div className="pb-3 pt-2 px-2 sm:px-3 space-y-1">
                <Link href="/" className="block">
                  Home
                </Link>
                <Link href="/about" className="block">
                  About
                </Link>
                <Link href="/projects" className="block">
                  Projects
                </Link>
                <Link href="/contact" className="block">
                  Contact Us
                </Link>
                <Link href="/blogs" className="block">
                  Blogs
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};
