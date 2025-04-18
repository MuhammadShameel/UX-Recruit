"use client";

import React, { useEffect, useState } from "react";
import "flowbite";

import heroShape from "../../../public/assets/images/heroShape.svg";
import Image from "next/image";

const Service = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id: any) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };
  useEffect(() => {
    // Flowbite auto-inits on load
  }, []);

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
                    Services
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
                      Designing captivating digital and physical experiences
                      with bespoke solutions tailored to your needs.
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
                  Services
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 overflow-x-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 lg:items-end gap-4 md:gap-8 mt-10 pb-20">
            <div className="col-span-12 text-left lg:col-span-8 xl:col-span-7  px-2 sm:px-0">
              <h4 className="font-anton secondary-color text-lg sm:text-xl">
                Services
              </h4>
              <h2
                className="font-anton font-normal leading-[110%] uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                style={{ letterSpacing: "-1px" }}
              >
                maximizing Your Digital Presence with our best services
              </h2>
            </div>
            <div className="col-span-12  lg:col-span-4 xl:col-span-5 flex justify-stretch lg:justify-end">
              <div className="flex flex-row w-full md:w-auto lg:flex-col justify-between md:justify-start sm:gap-12 md:gap-16 ">
                <button className="flex btn btn-primary cursor-pointer font-anton leading-[120%] transition uppercase">
                  contact Us
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              id="accordion-collapse"
              className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12"
            >
              <div className="accordion">
                <h5 className="font-anton   text-white">
                  <button
                    type="button"
                    className="flex items-center w-full justify-start gap-2 sm:gap-8 xl:gap-12 transition cursor-pointer py-2.5"
                    onClick={() => toggleAccordion(1)}
                    aria-expanded={openAccordion === 1}
                    aria-controls="accordion-collapse-body-1"
                  >
                    <span className="w-[10%] text-left">01</span>
                    <span className="flex-1/2 text-left">UI/UX Design</span>
                    <div className="w-[15%] sm:w-[10%] lg:w-[5%]">
                      <div
                        className={`pagination-btn rounded-full flex justify-center items-center justify-self-end font-anton text-2xl cursor-pointer ${
                          openAccordion === 1 ? "active" : ""
                        }`}
                      >
                        <svg
                          className={`transition-transform duration-200 ${
                            openAccordion === 1 ? "rotate-180" : ""
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M13.0008 16.1716L18.3648 10.8076L19.779 12.2218L12.0008 20L4.22266 12.2218L5.63688 10.8076L11.0008 16.1716V4H13.0008V16.1716Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                  </button>
                </h5>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openAccordion === 1
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pt-4 lg:pt-6 flex gap-2 sm:gap-8 xl:gap-12">
                      <div className="w-[10%]"></div>
                      <p className="flex-1/2">
                        We design intuitive mobile apps and web pages that
                        elevate user experiences and drive engagement. Our team
                        blends creativity with functionality to craft seamless,
                        user-centric digital solutions tailored to your needs.
                      </p>
                      <div className="w-[15%] sm:w-[10%] lg:w-[5%]"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion">
                <h5 className="font-anton text-4xl text-white">
                  <button
                    type="button"
                    className="flex items-center w-full justify-start gap-2 sm:gap-8 xl:gap-12 transition cursor-pointer py-2.5"
                    onClick={() => toggleAccordion(2)}
                    aria-expanded={openAccordion === 2}
                    aria-controls="accordion-collapse-body-2"
                  >
                    <span className="w-[10%] text-left">02</span>
                    <span className="flex-1/2 text-left">
                      Mobile & Web Apps
                    </span>
                    <div className="w-[15%] sm:w-[10%] lg:w-[5%]">
                      <div
                        className={`pagination-btn rounded-full flex justify-center items-center justify-self-end font-anton text-2xl cursor-pointer ${
                          openAccordion === 2 ? "active" : ""
                        }`}
                      >
                        <svg
                          className={`transition-transform duration-200 ${
                            openAccordion === 2 ? "rotate-180" : ""
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M13.0008 16.1716L18.3648 10.8076L19.779 12.2218L12.0008 20L4.22266 12.2218L5.63688 10.8076L11.0008 16.1716V4H13.0008V16.1716Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                  </button>
                </h5>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openAccordion === 2
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pt-6 flex gap-2 sm:gap-8 xl:gap-12">
                      <div className="w-[10%]"></div>
                      <p className="flex-1/2">
                        We design intuitive mobile apps and web pages that
                        elevate user experiences and drive engagement. Our team
                        blends creativity with functionality to craft seamless,
                        user-centric digital solutions tailored to your needs.
                      </p>
                      <div className="w-[15%] sm:w-[10%] lg:w-[5%]"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion">
                <h5 className="font-anton text-4xl text-white">
                  <button
                    type="button"
                    className="flex items-center w-full justify-start gap-2 sm:gap-8 xl:gap-12 transition cursor-pointer py-2.5"
                    onClick={() => toggleAccordion(3)}
                    aria-expanded={openAccordion === 3}
                    aria-controls="accordion-collapse-body-3"
                  >
                    <span className="w-[10%] text-left">03</span>
                    <span className="flex-1/2 text-left">Design Systems</span>
                    <div className="w-[15%] sm:w-[10%] lg:w-[5%]">
                      <div
                        className={`pagination-btn rounded-full flex justify-center items-center justify-self-end font-anton text-2xl cursor-pointer ${
                          openAccordion === 3 ? "active" : ""
                        }`}
                      >
                        <svg
                          className={`transition-transform duration-200 ${
                            openAccordion === 3 ? "rotate-180" : ""
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M13.0008 16.1716L18.3648 10.8076L19.779 12.2218L12.0008 20L4.22266 12.2218L5.63688 10.8076L11.0008 16.1716V4H13.0008V16.1716Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                  </button>
                </h5>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openAccordion === 3
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pt-6 flex gap-2 sm:gap-8 xl:gap-12">
                      <div className="w-[10%]"></div>
                      <p className="flex-1/2">
                        We design intuitive mobile apps and web pages that
                        elevate user experiences and drive engagement. Our team
                        blends creativity with functionality to craft seamless,
                        user-centric digital solutions tailored to your needs.
                      </p>
                      <div className="w-[15%] sm:w-[10%] lg:w-[5%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
