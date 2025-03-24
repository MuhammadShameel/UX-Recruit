import React from "react";
import Image from "next/image";
import Logo from "../../public/assets/images/logo.png";

const Footer = () => {
  return (
    <div className="container mx-auto px-4">
      <hr className="container w-full mt-36 mx-auto secondary-color" />
      <div className=" w-full text-left max-w-screen-xl mt-20 mx-auto">
        <h1
          className="font-anton font-normal h1-footer leading-[100%] uppercase"
          style={{ letterSpacing: "-4px" }}
        >
          LET’s BUILD AMAZING <span className="primary-color">EXPERIENCES</span>
        </h1>
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
        <div className="flex mt-[60px]">
          <div>
            <button className="bg-white justify-center rounded-[64px] text-[1.25rem] font-anton font-normal gap-2 hover:opacity-80 items-center leading-[120%] primary-color px-10 py-6 transition">
              HIRE ME NOW
            </button>
          </div>
        </div>
      </div>

      <footer className="mt-28">
        <div className="w-full max-w-screen-xl mx-auto">
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
