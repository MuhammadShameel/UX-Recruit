import React from "react";
import Image from "next/image";
import { Check, X } from "lucide-react";

import heroShape from "../../public/assets/images/heroShape.svg";

const Projects = () => {
  return (
    <>
      {/* Hero Section  */}
      <section className=" text-white px-4 relative overflow-x-clip">
        <div className="container  mx-auto">
          <div className="flex flex-col gap-10 items-center lg:flex-row mx-auto">
            {/* Left Side: Text Content */}
            <div
              className="text-left lg:mt-20 lg:w-2/3 mt-12"
              data-aos="fade-up-right"
            >
              <h1 className="text-[70px] font-anton font-normal leading-[100%] lg:text-5xl tracking-[-2px] uppercase">
                A FULL TEAM FOR{" "}
                <span className="primary-color">
                  THE PRICE OF A SINGLE DESIGNER
                </span>
              </h1>

              <Image
                src={heroShape}
                width={636}
                height={50}
                alt="heroShape Image"
                className="lg:mt-[-25px] md:mt-[-25px] sm:mt-[-5px]"
              />

              <div className="grid grid-cols-12 gap-8 lg:mt-32 mt-6">
                {/* First Column: Paragraph (12 columns on mobile, 8 columns on desktop) */}
                <div className="col-span-12 flex order-1 items-center lg:col-span-8 lg:order-2">
                  <p className="font-manrope font-semibold lg:leading-[160%]">
                    Get unlimited UI/UX design services with a simple monthly
                    subscription. We specialize in helping non-technical
                    founders bring their ideas to life with stunning,
                    user-focused designs.
                  </p>
                </div>

                {/* Second Column: Button (12 columns on mobile, 4 columns on desktop) */}
                <div className="col-span-12 flex order-2 justify-start lg:col-span-3 lg:order-1">
                  <button className="bg-white justify-center rounded-[64px] text-sm font-anton font-normal gap-2 hover:opacity-80 items-center leading-[120%] lg:px-10 lg:py-6 lg:text-[1.25rem] primary-color px-5 py-4 transition">
                    HIRE NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
