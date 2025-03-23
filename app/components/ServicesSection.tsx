import React from "react";

const ServicesSection = () => {
  return (
    <section className="bg-purple pt-24 lg:pb-32 px-4 mt-14 relative service-section overflow-hidden">
      <div className="container mx-auto">
        <hr className="mb-[3.5rem]" style={{ color: "#ffffff66" }} />
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="col-span-12 lg:col-span-5 mb-4 lg:mb-0">
            <h4 className="font-anton ">SERVICES</h4>
          </div>
          <div className="col-span-12 lg:col-span-7 2xl:col-span-6">
            <p className="font-manrope font-semibold leading-[160%] mb-6">
              Web development tools come as browser add-ons or built-in features
              in web browsers. Most popular web browsers, such as Google Chrome,
              Firefox, Internet Explorer, Safari, Microsoft Edge and Opera have
              built-in tools to help web developers, and many additional add-ons
              can be found in their respective plugin download centers.
            </p>
            <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
              <a
                href="#"
                className="font-anton text-[2.875rem] sm:text-[3.25rem] md:text-[3.5rem] lg:text-[4.25rem] xl:text-[4.75rem] uppercase flex items-center gap-2 tracking-[-1px] leading-[110%]"
              >
                UI/UX Design
                <svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                >
                  <mask
                    id="mask0_32_1551"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="80"
                    height="80"
                  >
                    <rect width="80" height="80" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_32_1551)">
                    <path
                      d="M17.9987 66.666L13.332 61.9993L51.9987 23.3327H29.9987V16.666L63.332 16.666V49.9993H56.6654V27.9993L17.9987 66.666Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </a>
              <a
                href="#"
                className="font-anton text-[2.875rem] sm:text-[3.25rem] md:text-[3.5rem] lg:text-[4.25rem] xl:text-[4.75rem] uppercase flex items-center gap-2 tracking-[-1px] leading-[110%]"
              >
                Mobile & Web Apps
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                >
                  <mask
                    id="mask0_32_1551"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="80"
                    height="80"
                  >
                    <rect width="80" height="80" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_32_1551)">
                    <path
                      d="M17.9987 66.666L13.332 61.9993L51.9987 23.3327H29.9987V16.666L63.332 16.666V49.9993H56.6654V27.9993L17.9987 66.666Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </a>
              <a
                href="#"
                className="font-anton text-[2.875rem] sm:text-[3.25rem] md:text-[3.5rem] lg:text-[4.25rem] xl:text-[4.75rem] uppercase flex items-center gap-2 tracking-[-1px] leading-[110%]"
              >
                Design Systems
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                >
                  <mask
                    id="mask0_32_1551"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="80"
                    height="80"
                  >
                    <rect width="80" height="80" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_32_1551)">
                    <path
                      d="M17.9987 66.666L13.332 61.9993L51.9987 23.3327H29.9987V16.666L63.332 16.666V49.9993H56.6654V27.9993L17.9987 66.666Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </a>
            </div>
            <a
              href="#"
              className="btn btn-primary inline-flex mt-[2.125rem] leading-[120%] font-anton uppercase transition"
            >
              Book Now
            </a>
          </div>
        </div>

        <h2
          className="font-anton uppercase font-normal tracking-[-0.25rem] leading-[100%] text-outline -mt-8 lg:mt-0 lg:absolute -bottom-5"
          style={{ WebkitTextStrokeColor: "#fff" }}
        >
          SER
          <br />
          VICES
        </h2>
      </div>
    </section>
  );
};

export default ServicesSection;
