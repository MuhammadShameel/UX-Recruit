import React from "react";
import Image from "next/image";
import Logo from "../../public/assets/images/logo.png";
import FooterSvg from "../../public/assets/images/footer_svg.svg";

const Footer = () => {
  return (
    <div className="container mx-auto px-4">
      <hr className="container w-full mt-36 mx-auto secondary-color" />
      <div className=" w-full text-left mt-20 mx-auto">
        <h1
          className="font-anton font-normal h1-footer leading-[100%] uppercase"
          style={{ letterSpacing: "-4px" }}
        >
          LET’s BUILD AMAZING <span className="primary-color">EXPERIENCES</span>
        </h1>
        <Image src={FooterSvg} alt="logo" className="mt-[-25px]" />
        <div className="flex mt-[60px]">
          <div>
            <button className="bg-white justify-center rounded-[64px] text-[1.25rem] font-anton font-normal gap-2 hover:opacity-80 items-center leading-[120%] primary-color px-10 py-6 transition">
              HIRE ME NOW
            </button>
          </div>
        </div>
      </div>

      <footer className="mt-28">
        <div className="w-full mx-auto">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Image
                src={Logo}
                alt="logo"
                className="h-6 w-[181px] lg:h-10 lg:w-[281px] md:h-10 md:w-[281px] sm:h-10 sm:w-[281px]"
              />
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <ul className="text-2xl text-left font-anton font-medium">
                  <li>
                    <a className="hover:underline">WORK</a>
                  </li>
                  <li>
                    <a className="hover:underline">SERVICE</a>
                  </li>
                  <li>
                    <a className="hover:underline">ABOUT</a>
                  </li>
                  <li>
                    <a className="hover:underline">JOURNAL</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="text-2xl text-left font-anton font-medium">
                  <li>
                    <a className="hover:underline">INSTAGRAM</a>
                  </li>
                  <li>
                    <a className="hover:underline">TWITTER</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:flex sm:items-center sm:justify-between">
            <span className="text-sm font-anton secondary-color sm:text-center">
              2024
            </span>
            <div className="grid grid-cols-2 gap-24">
              <div>
                <ul className="text-left font-anton font-medium secondary-color text">
                  <li>
                    <p className="hover:underline">WORK</p>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="text-left font-anton font-medium secondary-color">
                  <li>
                    <p className="hover:underline">INSTAGRAM</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
