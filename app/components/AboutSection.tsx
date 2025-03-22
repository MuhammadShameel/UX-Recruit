import React from "react";
import Image from "next/image";
import imgTop from "../../public/assets/images/Img-Sect-Top.png";
import imgBottom from "../../public/assets/images/Img-Sect-Bottom.png";
import CardImgOne from "../../public/assets/images/image-card-1.png";
import CardImgTwo from "../../public/assets/images/image-card-2.png";
import CardImgThree from "../../public/assets/images/image-card-3.png";
import CardImgFour from "../../public/assets/images/image-card-4.png";
import CardImgFive from "../../public/assets/images/image-card-5.png";
import CardImgSix from "../../public/assets/images/image-card-6.png";

const AboutSection = () => {
  return (
    <div className="mx-auto w-full max-w-screen-xl">
      <hr className="mx-auto w-full max-w-screen-xl mt-10 secondary-color" />
      <div className="grid grid-cols-12 gap-8 pb-20 mt-10">
        {/* Left Side: Text Content (5 columns) */}
        <div className="col-span-12 lg:col-span-7 text-center lg:text-left">
          <h4 className="secondary-color font-anton">About</h4>
          <h2
            className="font-anton leading-[110%] uppercase font-normal"
            style={{ letterSpacing: "-1px" }}
          >
            Design Products Your Users Will Love Within Your Budget and Timeline
          </h2>
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
      <div className="bg-white rounded-4xl text-black mt-5 px-7">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Repeat this block 6 times for 6 cards */}
          <div className="  overflow-hidden  py-12">
            <Image src={CardImgOne} alt="img not found" className="w-full" />
            <div className="mt-10">
              <h5 className="font-anton text-xl mt-4">
                A Dedicated Design Team
              </h5>
              <p className="font-manrope text-black mt-2">
                Forget the hassle of hiring and managing multiple designers or
                freelancers. With us, you get a dedicated team, including a
                UI/UX Designer, Visual Designer, and a Creative Project Manager,
                all for the price of a single hire.
              </p>
            </div>
          </div>
          <div className="  overflow-hidden  py-12">
            <Image src={CardImgTwo} alt="img not found" className="w-full" />
            <div className="mt-10">
              <h5 className="font-anton text-xl mt-4">
                Real-Time Design Collaboration
              </h5>
              <p className="font-manrope text-black mt-2">
                Access a live project dashboard where you can review designs,
                request unlimited revisions, and communicate directly with your
                design team. Transparency and collaboration are at the heart of
                our process.
              </p>
            </div>
          </div>{" "}
          <div className="  overflow-hidden  py-12">
            <Image src={CardImgThree} alt="img not found" className="w-full" />
            <div className="mt-10">
              <h5 className="font-anton text-xl mt-4">Faster Design Cycles</h5>
              <p className="font-manrope text-black mt-2">
                Our proven design workflows eliminate delays and minimize
                feedback loops. Experience up to 4x faster project turnarounds
                compared to traditional design services.
              </p>
            </div>
          </div>{" "}
          <div className="  overflow-hidden  py-12">
            <Image src={CardImgFour} alt="img not found" className="w-full" />
            <div className="mt-10">
              <h5 className="font-anton text-xl mt-4">
                Weekly Active Design Sprints
              </h5>
              <p className="font-manrope text-black mt-2">
                We approach each week with focused design sprints, delivering
                prioritized tasks and updates on a weekly basis. This ensures
                consistent progress and rapid delivery of high-quality designs.
              </p>
            </div>
          </div>{" "}
          <div className="  overflow-hidden  py-12">
            <Image src={CardImgFive} alt="img not found" className="w-full" />
            <div className="mt-10">
              <h5 className="font-anton text-xl mt-4">
                Unlimited Tasks & Revisions
              </h5>
              <p className="font-manrope text-black mt-2">
                Once subscribed, you unlock unlimited design requests. Whether
                it's creating a mobile app interface, rebranding your website,
                or designing a complete SaaS dashboard, we've got you covered.
                Revisions are unlimited to ensure the final product aligns
                perfectly with your vision.
              </p>
            </div>
          </div>{" "}
          <div className="  overflow-hidden  py-12">
            <Image src={CardImgSix} alt="img not found" className="w-full" />
            <div className="mt-10">
              <h5 className="font-anton text-xl mt-4">
                We’re Not Just Designers, We’re Your Partners
              </h5>
              <p className="font-manrope text-black mt-2">
                You’re not just another client to us. You’re a partner. That’s
                why we offer resources and strategic support to help you launch
                and scale your product.
              </p>
            </div>
          </div>
          {/* Repeat the above block 5 more times */}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
