import React from "react";
import Image from "next/image";
import imgTop from "../../public/assets/images/Img-Sect-Top.png";
import imgBottom from "../../public/assets/images/Img-Sect-Bottom.png";

const AboutSection = () => {
  return (
    <div className="mx-auto w-full max-w-screen-xl">
      <hr className="mx-auto w-full max-w-screen-xl mt-10 secondary-color" />
      <div className="grid grid-cols-12 gap-8 mt-10">
        {/* Left Side: Text Content (5 columns) */}
        <div className="col-span-12 lg:col-span-7 text-center lg:text-left">
          <h5 className="secondary-color font-anton">About</h5>
          <h3
            className="font-anton leading-[110%] uppercase font-normal"
            style={{ letterSpacing: "-1px" }}
          >
            Design Products Your Users Will Love Within Your Budget and Timeline
          </h3>
          <p className="font-semibold leading-[160%] font-manrope mt-[50px]">
            Most design agencies only focus on aesthetics, but great design goes
            beyond visuals. You need a partner who understands user behavior,
            brand identity, and the bigger picture. Most importantly, you need a
            team that shares your vision and cares about your product as much as
            you do.
          </p>
        </div>

        {/* Right Side: Image with Overlay (7 columns) */}
        <div className="lg:col-span-5 col-span-12 relative flex justify-center items-center ">
          {/* Image container */}
          <div className="flex flex-col justify-center items-center mx-auto w-full">
            <Image src={imgTop} className="my-10" alt="img not found" />
            <Image src={imgBottom} className="my-10" alt="img not found" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
