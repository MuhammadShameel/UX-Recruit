import React from "react";
import Image from "next/image";
import "../../styles/projects.css";

import heroShape from "../../../public/assets/images/heroShape.svg";

import imgTop from "../../../public/assets/images/Img-Sect-Top.png";
import imgBottom from "../../../public/assets/images/Img-Sect-Bottom.png";
import CardImgOne from "../../../public/assets/images/image-card-1.png";
import CardImgTwo from "../../../public/assets/images/image-card-2.png";
import CardImgThree from "../../../public/assets/images/image-card-3.png";
import CardImgFour from "../../../public/assets/images/image-card-4.png";
import CardImgFive from "../../../public/assets/images/image-card-5.png";
import CardImgSix from "../../../public/assets/images/image-card-6.png";

import AboutEllipse from "../../../public/assets/images/about_ellipse.svg";

import NumbersEllipse from "../../../public/assets/images/numbers-ellipse.svg";

// import ProjectsEllipse from "../../../public/assets/images/projects-ellipse.svg

const Blogs = () => {
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
                    OUR BLOG
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
                  OUR BLOG
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 overflow-x-hidden">
        <div className="container mx-auto">
          <div className=" rounded-4xl text-white mt-5 px-4 sm:px-7 relative">
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
                  <p className="text-white font-manrope mt-2 text-sm sm:text-base">
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
                  <p className="text-white font-manrope mt-2 text-sm sm:text-base">
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
                  <p className="text-white font-manrope mt-2 text-sm sm:text-base">
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
                  <p className="text-white font-manrope mt-2 text-sm sm:text-base">
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
                  <p className="text-white font-manrope mt-2 text-sm sm:text-base">
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
                  <p className="text-white font-manrope mt-2 text-sm sm:text-base">
                    You're not just another client to us. You're a partner.
                    That's why we offer resources and strategic support to help
                    you launch and scale your product.
                  </p>
                </div>
              </div>
              {/* Card 7 */}
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
                  <p className="text-white font-manrope mt-2 text-sm sm:text-base">
                    Forget the hassle of hiring and managing multiple designers
                    or freelancers. With us, you get a dedicated team, including
                    a UI/UX Designer, Visual Designer, and a Creative Project
                    Manager, all for the price of a single hire.
                  </p>
                </div>
              </div>

              {/* Card 8 */}
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
                  <p className="text-white font-manrope mt-2 text-sm sm:text-base">
                    Access a live project dashboard where you can review
                    designs, request unlimited revisions, and communicate
                    directly with your design team. Transparency and
                    collaboration are at the heart of our process.
                  </p>
                </div>
              </div>

              {/* Card 9 */}
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
                  <p className="text-white font-manrope mt-2 text-sm sm:text-base">
                    Our proven design workflows eliminate delays and minimize
                    feedback loops. Experience up to 4x faster project
                    turnarounds compared to traditional design services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section  */}

      {/* Projects Section  */}
      <section className="px-4 relative pt-16 md:pt-30 project-section">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="pagination flex items-center gap-3">
              <button className="pagination-btn active  rounded-full flex justify-center items-center font-anton text-2xl cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7.8284 13.0001L13.1924 18.3641L11.7782 19.7783L4 12.0001L11.7782 4.222L13.1924 5.6362L7.8284 11.0001L20 11.0001V13.0001L7.8284 13.0001Z"
                    fill="white"
                  />
                </svg>
              </button>

              <button className="pagination-btn  rounded-full flex justify-center items-center font-anton text-2xl cursor-pointer">
                1
              </button>

              <button className="pagination-btn  rounded-full flex justify-center items-center font-anton text-2xl cursor-pointer">
                2
              </button>

              <button className="pagination-btn  rounded-full flex justify-center items-center font-anton text-2xl cursor-pointer">
                3
              </button>

              <button className="pagination-btn  rounded-full flex justify-center items-center font-anton text-2xl cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
