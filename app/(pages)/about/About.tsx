import React from "react";
import Image from "next/image";
import { Check, X } from "lucide-react";
import "../../styles/projects.css";

import Border from "../../../public/assets/images/hero-border.png";
import Shade from "../../../public/assets/images/hero-shade.png";
import heroTopAvater from "../../../public/assets/images/hero-top-avatar-1.svg";
import star from "../../../public/assets/images/star.svg";
import heroShape from "../../../public/assets/images/heroShape.svg";
import ServiceSvg from "../../../public/assets/images/service_svg.svg";

import imgTop from "../../../public/assets/images/Img-Sect-Top.png";
import imgBottom from "../../../public/assets/images/Img-Sect-Bottom.png";
import CardImgOne from "../../../public/assets/images/image-card-1.png";
import CardImgTwo from "../../../public/assets/images/image-card-2.png";
import CardImgThree from "../../../public/assets/images/image-card-3.png";
import CardImgFour from "../../../public/assets/images/image-card-4.png";
import CardImgFive from "../../../public/assets/images/image-card-5.png";
import CardImgSix from "../../../public/assets/images/image-card-6.png";

import ProjectsLine from "../../../public/assets/images/projects-line.svg";
import ProjectsEllipse from "../../../public/assets/images/projects-ellipse.svg";
import ProjectsEllipseTwo from "../../../public/assets/images/project-ellipse-two.svg";
import CardOne from "../../../public/assets/images/projects-card-one.png";
import CardTwo from "../../../public/assets/images/projects-card-two.png";
import CardThree from "../../../public/assets/images/projects-card-four.png";
import CardFour from "../../../public/assets/images/projects-card-three.png";

import ProcessEllipse from "../../../public/assets/images/process-ellipse.svg";
import discoveryIcon from "../../../public/assets/images/book-discovery-icon.png";
import designIcon from "../../../public/assets/images/add-design-icon.png";
import createIcon from "../../../public/assets/images/create-design-icon.png";
import requestIcon from "../../../public/assets/images/request-revision-icon.png";
import trackIcon from "../../../public/assets/images/track-manage-icon.png";

import AboutEllipse from "../../../public/assets/images/about_ellipse.svg";
import AboutRoundEllipse from "../../../public/assets/images/about-round-ellipse.svg";

import NumbersEllipse from "../../../public/assets/images/numbers-ellipse.svg";

// import ProjectsEllipse from "../../../public/assets/images/projects-ellipse.svg

const AboutUs = () => {
  return (
    <>
      {/* Hero Section  */}
      <section className=" text-white px-4 relative overflow-x-clip pt-24 lg:pt-12">
        <div className="container  mx-auto">
          <div className="flex flex-col lg:gap-10 items-stretch lg:flex-row mx-auto">
            {/* Left Side: Text Content */}
            <div
              className="lg:w-1/2 lg:border-b border-b-[#62606F]"
              data-aos="fade-up-right"
            >
              <div className="flex flex-col justify-center h-full">
                <div className="w-fit">
                  <h1 className="primary-color text-[70px] font-anton font-normal leading-[100%] lg:text-5xl tracking-[-2px] uppercase">
                    ABOUT US
                  </h1>

                  <Image
                    src={heroShape}
                    width={636}
                    height={50}
                    alt="heroShape Image"
                    className="lg:mt-[-25px] md:mt-[-25px] sm:mt-[-5px] "
                  />
                </div>

                <div className="grid grid-cols-12 gap-6 lg:gap-0 lg:mt-24 mt-6 items-center">
                  {/* First Column: Paragraph (12 columns on mobile, 8 columns on desktop) */}
                  <div className="col-span-12 flex order-1 items-center lg:col-span-8 lg:order-2">
                    <p className="font-manrope font-semibold lg:leading-[160%]">
                      We design captivating digital and physical experiences,
                      uniquely tailored for seamless user engagement.
                    </p>
                  </div>

                  {/* Second Column: Button (12 columns on mobile, 4 columns on desktop) */}
                  <div className="col-span-12 flex order-2  lg:col-span-4 xl:col-span-4 lg:order-1">
                    <button className="flex btn btn-primary cursor-pointer font-anton leading-[120%] transition uppercase">
                      contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div>
                <h2 className="text-outline font-anton font-normal leading-[100%] tracking-[-0.25rem] uppercase mt-[-25px] relative -z-1">
                  ABOUT US
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 overflow-x-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 lg:items-center gap-4 md:gap-8 mt-10 pb-20">
            <div className="col-span-12 text-left lg:col-span-8 xl:col-span-7  px-2 sm:px-0">
              <h4 className="font-anton secondary-color text-lg sm:text-xl">
                About
              </h4>
              <h2
                className="font-anton font-normal leading-[110%] uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                style={{ letterSpacing: "-1px" }}
              >
                Design Products Your Users Will Love Within Your Budget and
                Timeline
              </h2>
              <p className="font-manrope font-semibold leading-[160%] mt-6 sm:mt-[50px] text-sm sm:text-base">
                Most design agencies only focus on aesthetics, but great design
                goes beyond visuals. You need a partner who understands user
                behavior, brand identity, and the bigger picture. Most
                importantly, you need a team that shares your vision and cares
                about your product as much as you do.
              </p>
            </div>
            <div className="col-span-12  lg:col-span-4 xl:col-span-5 flex justify-stretch lg:justify-end">
              <div className="flex flex-row w-full md:w-auto lg:flex-col justify-between md:justify-start sm:gap-12 md:gap-16 ">
                <div className="flex flex-col">
                  <h2 className="font-anton leading-[110%]">200+</h2>
                  <p className="text-[#62606F] text-xs lg:text-lg">
                    Projects completed
                  </p>
                </div>
                <div className="flex flex-col">
                  <h2 className="font-anton leading-[110%]">20+</h2>
                  <p className="text-[#62606F] text-xs lg:text-lg">
                    Rework customers
                  </p>
                </div>
                <div className="flex flex-col">
                  <h2 className="font-anton leading-[110%]">5+</h2>
                  <p className="text-[#62606F] text-xs lg:text-lg">
                    Years experience
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-4xl text-black mt-5 px-4 sm:px-7 relative">
            <Image
              src={AboutRoundEllipse}
              className="absolute top-0 -z-1 translate-y-[-100%] w-full"
              alt="img not found"
            />
            <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-3 md:grid-cols-2">
              {/* Card 1 */}
              <div className="overflow-hidden py-8 sm:py-12 px-2 sm:px-4">
                <Image
                  src={CardImgOne}
                  alt="img not found"
                  className="w-full"
                />
                <div className="mt-6 sm:mt-10">
                  <h5 className="text-lg sm:text-xl font-anton mt-2 sm:mt-4">
                    A Dedicated Design Team
                  </h5>
                  <p className="text-black font-manrope mt-2 text-sm sm:text-base">
                    Forget the hassle of hiring and managing multiple designers
                    or freelancers. With us, you get a dedicated team, including
                    a UI/UX Designer, Visual Designer, and a Creative Project
                    Manager, all for the price of a single hire.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="overflow-hidden py-8 sm:py-12 px-2 sm:px-4">
                <Image
                  src={CardImgTwo}
                  alt="img not found"
                  className="w-full"
                />
                <div className="mt-6 sm:mt-10">
                  <h5 className="text-lg sm:text-xl font-anton mt-2 sm:mt-4">
                    Real-Time Design Collaboration
                  </h5>
                  <p className="text-black font-manrope mt-2 text-sm sm:text-base">
                    Access a live project dashboard where you can review
                    designs, request unlimited revisions, and communicate
                    directly with your design team. Transparency and
                    collaboration are at the heart of our process.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="overflow-hidden py-8 sm:py-12 px-2 sm:px-4">
                <Image
                  src={CardImgThree}
                  alt="img not found"
                  className="w-full"
                />
                <div className="mt-6 sm:mt-10">
                  <h5 className="text-lg sm:text-xl font-anton mt-2 sm:mt-4">
                    Faster Design Cycles
                  </h5>
                  <p className="text-black font-manrope mt-2 text-sm sm:text-base">
                    Our proven design workflows eliminate delays and minimize
                    feedback loops. Experience up to 4x faster project
                    turnarounds compared to traditional design services.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="overflow-hidden py-8 sm:py-12 px-2 sm:px-4">
                <Image
                  src={CardImgFour}
                  alt="img not found"
                  className="w-full"
                />
                <div className="mt-6 sm:mt-10">
                  <h5 className="text-lg sm:text-xl font-anton mt-2 sm:mt-4">
                    Weekly Active Design Sprints
                  </h5>
                  <p className="text-black font-manrope mt-2 text-sm sm:text-base">
                    We approach each week with focused design sprints,
                    delivering prioritized tasks and updates on a weekly basis.
                    This ensures consistent progress and rapid delivery of
                    high-quality designs.
                  </p>
                </div>
              </div>

              {/* Card 5 */}
              <div className="overflow-hidden py-8 sm:py-12 px-2 sm:px-4">
                <Image
                  src={CardImgFive}
                  alt="img not found"
                  className="w-full"
                />
                <div className="mt-6 sm:mt-10">
                  <h5 className="text-lg sm:text-xl font-anton mt-2 sm:mt-4">
                    Unlimited Tasks & Revisions
                  </h5>
                  <p className="text-black font-manrope mt-2 text-sm sm:text-base">
                    Once subscribed, you unlock unlimited design requests.
                    Whether it's creating a mobile app interface, rebranding
                    your website, or designing a complete SaaS dashboard, we've
                    got you covered. Revisions are unlimited to ensure the final
                    product aligns perfectly with your vision.
                  </p>
                </div>
              </div>

              {/* Card 6 */}
              <div className="overflow-hidden py-8 sm:py-12 px-2 sm:px-4">
                <Image
                  src={CardImgSix}
                  alt="img not found"
                  className="w-full"
                />
                <div className="mt-6 sm:mt-10">
                  <h5 className="text-lg sm:text-xl font-anton mt-2 sm:mt-4">
                    We're Not Just Designers, We're Your Partners
                  </h5>
                  <p className="text-black font-manrope mt-2 text-sm sm:text-base">
                    You're not just another client to us. You're a partner.
                    That's why we offer resources and strategic support to help
                    you launch and scale your product.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
