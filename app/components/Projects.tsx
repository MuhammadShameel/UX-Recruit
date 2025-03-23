import React from "react";
import Image from "next/image";
import CardOne from "../../public/assets/images/projects-card-one.png";
import CardTwo from "../../public/assets/images/projects-card-two.png";
import CardThree from "../../public/assets/images/projects-card-four.png";
import CardFour from "../../public/assets/images/projects-card-three.png";

const Projects = () => {
  return (
    <div>
      <hr className="mx-auto w-full max-w-screen-xl mt-10 secondary-color" />
      <h4 className="secondary-color font-anton mt-12">Projects</h4>
      <div className="grid grid-cols-12 gap-8 pb-20 mt-10">
        <div className="lg:col-span-6 flex flex-col lg:items-start items-center col-span-12">
          <Image src={CardOne} alt="img not found" />
          <h4
            className="font-anton mt-10 font-normal leading-[110%]"
            style={{ letterSpacing: "-1px" }}
          >
            NOVELIST WEBSITE
          </h4>
          <ul className="flex mt-2">
            <li className="font-anton secondary-color font-normal leading-[120%] hover:cursor-pointer pr-2.5">
              IOS
            </li>
            <li className="font-anton secondary-color font-normal leading-[120%] hover:cursor-pointer pr-2.5">
              SWIFT UI
            </li>
            <li className="font-anton secondary-color font-normal leading-[120%] hover:cursor-pointer pr-2.5">
              NODE.JS
            </li>
          </ul>
        </div>
        <div className="lg:col-span-6 flex flex-col lg:items-start items-center col-span-12 text-right">
          <Image src={CardTwo} alt="img not found" />
          <h4
            className="font-anton mt-10 font-normal leading-[110%]"
            style={{ letterSpacing: "-1px" }}
          >
            NOVELIST WEBSITE
          </h4>
          <ul className="flex mt-2 justify-end">
            <li className="font-anton secondary-color font-normal leading-[120%] hover:cursor-pointer pr-2.5">
              IOS
            </li>
            <li className="font-anton secondary-color font-normal leading-[120%] hover:cursor-pointer pr-2.5">
              SWIFT UI
            </li>
            <li className="font-anton secondary-color font-normal leading-[120%] hover:cursor-pointer pr-2.5">
              NODE.JS
            </li>
          </ul>
        </div>
        <div className="lg:col-span-6 flex flex-col lg:items-start items-center col-span-12 lg:mt-20">
          <Image src={CardThree} alt="img not found" />
          <h4
            className="font-anton mt-10 font-normal leading-[110%]"
            style={{ letterSpacing: "-1px" }}
          >
            NOVELIST WEBSITE
          </h4>
          <ul className="flex mt-2">
            <li className="font-anton secondary-color font-normal leading-[120%] hover:cursor-pointer pr-2.5">
              IOS
            </li>
            <li className="font-anton secondary-color font-normal leading-[120%] hover:cursor-pointer pr-2.5">
              SWIFT UI
            </li>
            <li className="font-anton secondary-color font-normal leading-[120%] hover:cursor-pointer pr-2.5">
              NODE.JS
            </li>
          </ul>
        </div>
        <div className="lg:col-span-6 flex flex-col lg:items-start items-center col-span-12 lg:mt-20 text-right">
          <Image src={CardFour} alt="img not found" />
          <h4
            className="font-anton mt-10 font-normal leading-[110%]"
            style={{ letterSpacing: "-1px" }}
          >
            NOVELIST WEBSITE
          </h4>
          <ul className="flex mt-2 justify-end">
            <li className="font-anton secondary-color font-normal leading-[120%] hover:cursor-pointer pr-2.5">
              IOS
            </li>
            <li className="font-anton secondary-color font-normal leading-[120%] hover:cursor-pointer pr-2.5">
              SWIFT UI
            </li>
            <li className="font-anton secondary-color font-normal leading-[120%] hover:cursor-pointer pr-2.5">
              NODE.JS
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
