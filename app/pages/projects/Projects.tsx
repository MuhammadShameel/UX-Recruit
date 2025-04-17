import React from "react";
import Image from "next/image";
import { Check, X } from "lucide-react";
import "../../styles/projects.css";

import heroShape from "../../../public/assets/images/heroShape.svg";

import ProjectsEllipse from "../../../public/assets/images/projects-ellipse.svg";
import ProjectsEllipseTwo from "../../../public/assets/images/project-ellipse-two.svg";
import CardOne from "../../../public/assets/images/projects-card-one.png";
import CardTwo from "../../../public/assets/images/projects-card-two.png";
import CardThree from "../../../public/assets/images/projects-card-four.png";
import CardFour from "../../../public/assets/images/projects-card-three.png";

const Projects = () => {
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
                    PROJECTS
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
                      dedicated to crafting compelling and impactful digital and
                      physical projects.
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
                  PROJECTS
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section  */}
      <section className="px-4 relative pt-16 md:pt-30 project-section">
        <Image
          src={ProjectsEllipse}
          className="absolute right-0 top-0 translate-y-[-50%] -z-1"
          alt="img not found"
        />
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 md:gap-y-22 mt-10 pb-20">
            {[CardOne, CardTwo, CardThree, CardFour].map((card, index) => (
              <div
                key={index}
                className={`col-span-1 flex flex-col items-center text-center md:items-start md:text-left ${
                  index % 2 !== 0 ? "md:text-right md:items-end" : ""
                }`}
              >
                <Image
                  src={card}
                  alt="img not found"
                  className="w-full h-auto max-w-sm md:max-w-full"
                />
                <h4
                  className="font-anton font-normal leading-[110%] mt-6 md:mt-10"
                  style={{ letterSpacing: "-1px" }}
                >
                  NOVELIST WEBSITE
                </h4>
                <ul className="flex flex-wrap justify-center md:justify-start mt-2">
                  {["IOS", "SWIFT UI", "NODE.JS"].map((tech, i) => (
                    <li
                      key={i}
                      className="font-anton font-normal hover:cursor-pointer leading-[120%] px-2.5 text-gray-600"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

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

        <Image
          src={ProjectsEllipseTwo}
          className="absolute left-0 bottom-[-50%] -z-1"
          alt="img not found"
        />
      </section>
    </>
  );
};

export default Projects;
