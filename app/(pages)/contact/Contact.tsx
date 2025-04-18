import React from "react";
import Image from "next/image";
import "../../styles/projects.css";

import heroShape from "../../../public/assets/images/heroShape.svg";

const Contact = () => {
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
                    Contact
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
                      We will inquire thoughtfully, explore potentialities, and
                      formulate an action plan. Let's create something
                      incredible together.
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
                  Contact
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 ">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row pt-[130px] gap-4  lg:p-4 md:p-4 sm:p-4 p-0">
            <div className="flex-1">
              <h4 className="font-anton secondary-color uppercase text-lg sm:text-xl">
                services
              </h4>
              <h2
                className="font-anton font-normal leading-[110%] pt-6 uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                style={{ letterSpacing: "-1px" }}
              >
                DISCUSS POSSIBILITIES AND MAKE AN ACTION PLAN.
              </h2>
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  className="contact-input font-anton text-[16px] font-normal leading-[140%] uppercase py-6 px-8 pb-6 w-full"
                  placeholder="First Name*"
                />
                <input
                  type="text"
                  className="contact-input font-anton text-[16px] font-normal leading-[140%] uppercase py-6 px-8 pb-6 w-full"
                  placeholder="Last Name*"
                />
              </div>

              <div className="mt-4">
                <input
                  type="text"
                  className="contact-input font-anton text-[16px] font-normal leading-[140%] uppercase py-6 px-8 pb-6 w-full"
                  placeholder="Enter your email *"
                />
              </div>

              <div className="mt-4">
                <textarea
                  name=""
                  id=""
                  rows={6}
                  className="contact-input font-anton text-[16px] font-normal leading-[140%] uppercase py-6 px-8 pb-6 w-full resize-none"
                  placeholder="Your message here *"
                ></textarea>
                {/* <input
                  
                /> */}
              </div>
              <div className="mt-4 flex items-start gap-2">
                <div className="py-[26px] flex items-center">
                  <input
                    type="checkbox"
                    id="privacyPolicy"
                    className="mt-1  border-2  rounded-sm w-6 h-6"
                   
                  />

                  <label
                    htmlFor="privacyPolicy"
                    className="text-[12px] ml-3 text-white font-semibold font-manrope uppercase leading-[160%]"
                  >
                    I accept the privacy policy
                  </label>
                </div>
                <button className="flex btn btn-primary ml-auto cursor-pointer font-anton  leading-[120%] transition uppercase">
                  send
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
