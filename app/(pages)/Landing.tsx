import React from "react";
import Image from "next/image";
import { Check, X } from "lucide-react";
import Marquee from "../components/Marque";

import Border from "../../public/assets/images/hero-border.png";
import Shade from "../../public/assets/images/hero-shade.png";
import heroTopAvater from "../../public/assets/images/hero-top-avatar-1.svg";
import star from "../../public/assets/images/star.svg";
import heroShape from "../../public/assets/images/heroShape.svg";
import ServiceSvg from "../../public/assets/images/service_svg.svg";

import imgTop from "../../public/assets/images/Img-Sect-Top.png";
import imgBottom from "../../public/assets/images/Img-Sect-Bottom.png";
import CardImgOne from "../../public/assets/images/image-card-1.png";
import CardImgTwo from "../../public/assets/images/image-card-2.png";
import CardImgThree from "../../public/assets/images/image-card-3.png";
import CardImgFour from "../../public/assets/images/image-card-4.png";
import CardImgFive from "../../public/assets/images/image-card-5.png";
import CardImgSix from "../../public/assets/images/image-card-6.png";

import ProjectsLine from "../../public/assets/images/projects-line.svg";
import ProjectsEllipse from "../../public/assets/images/projects-ellipse.svg";
import ProjectsEllipseTwo from "../../public/assets/images/project-ellipse-two.svg";
import CardOne from "../../public/assets/images/projects-card-one.png";
import CardTwo from "../../public/assets/images/projects-card-two.png";
import CardThree from "../../public/assets/images/projects-card-four.png";
import CardFour from "../../public/assets/images/projects-card-three.png";

import ProcessEllipse from "../../public/assets/images/process-ellipse.svg";
import discoveryIcon from "../../public/assets/images/book-discovery-icon.png";
import designIcon from "../../public/assets/images/add-design-icon.png";
import createIcon from "../../public/assets/images/create-design-icon.png";
import requestIcon from "../../public/assets/images/request-revision-icon.png";
import trackIcon from "../../public/assets/images/track-manage-icon.png";

import AboutEllipse from "../../public/assets/images/about_ellipse.svg";
import AboutRoundEllipse from "../../public/assets/images/about-round-ellipse.svg";

import NumbersEllipse from "../../public/assets/images/numbers-ellipse.svg";

const Landing = () => {
  // Array of avatar images
  const avatars = [
    heroTopAvater,
    heroTopAvater,
    heroTopAvater,
    heroTopAvater,
    heroTopAvater,
    heroTopAvater,
  ];

  // Array of star images
  const stars = [star, star, star, star, star];
  return (
    <>
      {/* Hero section */}
      <section className=" text-white px-4 relative overflow-x-clip">
        <div className="container mx-auto">
          <div className="flex flex-col gap-10 items-center lg:flex-row mx-auto">
            <div className="lg:mt-20 lg:w-2/3 mt-12">
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

              <div className="flex flex-col-reverse lg:flex-row gap-6 lg:mt-32 mt-6 lg:items-center">
                <div className="w-fit">
                  <button className="flex btn btn-primary cursor-pointer font-anton leading-[120%] transition uppercase whitespace-nowrap">
                    HIRE NOW
                  </button>
                </div>
                <div className="w-full">
                  <p className="font-manrope font-semibold lg:leading-[160%]">
                    Get unlimited UI/UX design services with a simple monthly
                    subscription. We specialize in helping non-technical
                    founders bring their ideas to life with stunning,
                    user-focused designs.
                  </p>
                </div>
              </div>
            </div>
            {/* Right Side: Image with Overlay */}
            <div className="hero_base_img lg:w-1/3">
              <div className="w-fit relative">
                {/* Base Image */}
                <div className="relative">
                  <Image
                    src={Border}
                    width={395}
                    height={576}
                    alt="Base Image"
                    className="h-[700px] rounded-[32px] w-full lg:h-[576px]"
                  />
                </div>

                {/* Video */}
                <div
                  className="h-[68%] rounded-[200px] w-[100%] -translate-y-1/2 absolute  max-h-[576px] max-w-[405px] overflow-hidden top-1/2 transform z-20"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(157, 3, 134, 0.12) 0%, rgba(157, 3, 134, 0.12) 100%)",
                  }}
                >
                  <video
                    className="h-full w-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source
                      src="/assets/images/bg-video-hero.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Overlay Image (Larger than Base Image) */}
                <div className="flex h-full justify-items-center w-full absolute items-center left-0 top-0 z-10">
                  <Image
                    src={Shade}
                    alt="Overlay Image"
                    className="rounded-[32px] overlay_img scale-150"
                  />
                </div>

                {/* Left Card */}
                <div className="p-2.5 rounded-lg w-fit -right-5 absolute hero_top_left lg:-right-2 xl:-right-14 top-5 z-20">
                  {/* Avatar Images */}
                  <div className="flex mb-2.5">
                    {avatars.map((avatar, index) => (
                      <div
                        className={`image-wrapper w-[50px] h-[50px] ${
                          index !== 0 ? "-ml-7" : ""
                        }`}
                      >
                        <Image
                          key={index}
                          src={avatar}
                          alt="avatar"
                          draggable="false"
                        />
                      </div>
                    ))}
                  </div>
                  {/* Star Images */}
                  <div className="flex mb-1">
                    {stars.map((star, index) => (
                      <Image
                        key={index}
                        src={star}
                        alt="star"
                        draggable="false"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <div className="text-[15px] text-white capitalize font-medium tracking-[-0.45px]">
                    100K+ satisfied Customers
                  </div>
                </div>

                {/* Right Card */}
                <div className="rounded-lg text-[12px] w-[247px] -left-5 absolute bottom-5 sm:bottom-20 font-manrope font-medium hero_top_left px-5 py-2.5 sm:-left-14 z-20">
                  <div className="text-xs text-white capitalize">
                    Design speed : cost Ratio
                  </div>
                  <div className="mt-4">
                    <div className="text-xs text-white capitalize font-medium mb-1.5">
                      Us
                    </div>
                    <div className="bg-white h-2 rounded-2xl w-full mb-3 relative">
                      {/* 70% Progress Bar */}
                      <div className="bg-[#D68CCB] h-2 rounded-2xl w-[70%] relative z-10"></div>

                      {/* 20% Progress Bar (Overlapping with Gap) */}
                      <div className="bg-[#6155E1] h-2 rounded-2xl w-[30%] -translate-x-1/2 absolute left-[72%] top-0"></div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-white capitalize font-medium mb-1.5">
                      Other Agencies
                    </div>
                    <div className="bg-white h-2 rounded-2xl w-full mb-3">
                      {/* 50% Progress Bar */}
                      <div className="bg-[#989898] h-2 rounded-2xl w-[50%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-white capitalize font-medium mb-1.5">
                      Freelancer
                    </div>
                    <div className="bg-white h-2 rounded-2xl w-full mb-3">
                      {/* 40% Progress Bar */}
                      <div className="bg-[#989898] h-2 rounded-2xl w-[40%] mb-3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Marquee />

      {/* About Section  */}
      <section className="px-4 overflow-x-hidden">
        <div className="container mx-auto">
          <hr className="mt-10 secondary-color" />
          <div className="grid grid-cols-12 gap-4 md:gap-8 mt-10 pb-20">
            {/* Left Side: Text Content (5 columns) */}
            <div className="col-span-12  lg:col-span-7 text-left px-2 sm:px-0">
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

            {/* Right Side: Image with Overlay (7 columns) */}
            <div className="col-span-12 flex justify-center items-center lg:col-span-5 relative">
              {/* Image container */}
              <div className="flex flex-col justify-center w-full items-center mx-auto">
                <div className="relative my-4 sm:my-6 md:my-10 w-full flex justify-center">
                  <Image
                    src={imgTop}
                    alt="img not found"
                    className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[80%] lg:max-w-full"
                  />
                  <Image
                    src={AboutEllipse}
                    className="absolute top-[-50%] w-full max-w-[280px] sm:max-w-[350px] md:max-w-[80%] lg:max-w-full z-[-1] translate-y-[-13%]"
                    alt="img not found"
                  />
                </div>
                <div className="relative my-4 sm:my-6 md:my-10 w-full flex justify-center">
                  <Image
                    src={imgBottom}
                    alt="img not found"
                    className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[80%] lg:max-w-full"
                  />
                  <Image
                    src={AboutEllipse}
                    className="absolute top-[-50%] w-full max-w-[280px] sm:max-w-[350px] md:max-w-[80%] lg:max-w-full z-[-1] translate-y-[-15%]"
                    alt="img not found"
                  />
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

      {/* Projects Section  */}
      <section className="px-4 relative">
        <Image
          src={ProjectsLine}
          className="absolute right-0 top-0 mt-12 w-[50%] sm:w-auto"
          alt="img not found"
        />
        <Image
          src={ProjectsEllipse}
          className="absolute right-0 top-0 translate-y-[-50%] -z-1"
          alt="img not found"
        />
        <div className="container mx-auto">
          <hr className="w-full mt-10 mx-auto secondary-color" />
          <h4 className="font-anton mt-12 secondary-color">Projects</h4>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-10 pb-20">
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
                      className="font-anton font-normal hover:cursor-pointer leading-[120%] pr-5 text-gray-600"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <button className="flex bg-white justify-center rounded-[64px] text-[1.25rem] font-anton font-normal gap-2 hover:opacity-80 items-center leading-[120%] mx-auto primary-color px-10 py-6 transition">
            VIEW ALL
          </button>
        </div>

        <Image
          src={ProjectsEllipseTwo}
          className="absolute left-0 bottom-[-50%] -z-1"
          alt="img not found"
        />
      </section>

      {/* Service section  */}
      <section className="bg-purple lg:pb-32 mt-14 overflow-hidden pt-24 px-4 relative service-section">
        <div className="container mx-auto">
          <hr className="mb-[3.5rem]" style={{ color: "#ffffff66" }} />
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="col-span-12 lg:col-span-5 lg:mb-0 mb-4">
              <h4 className="font-anton">SERVICES</h4>
            </div>
            <div className="col-span-12 2xl:col-span-6 lg:col-span-7">
              <p className="font-manrope font-semibold leading-[160%] lg:pr-60 mb-6">
                Web development tools come as browser add-ons or built-in
                features in web browsers. Most popular web browsers, such as
                Google Chrome, Firefox, Internet Explorer, Safari, Microsoft
                Edge and Opera have built-in tools to help web developers, and
                many additional add-ons can be found in their respective plugin
                download centers.
              </p>
              <div className="flex flex-col gap-4 lg:gap-8 md:gap-6">
                <a
                  href="#"
                  className="flex text-[2.875rem] font-anton gap-2 items-center leading-[110%] lg:text-[4.25rem] md:text-[3.5rem] sm:text-[3.25rem] tracking-[-1px] uppercase xl:text-[4.75rem]"
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
                  className="flex text-[2.875rem] font-anton gap-2 items-center leading-[110%] lg:text-[4.25rem] md:text-[3.5rem] sm:text-[3.25rem] tracking-[-1px] uppercase xl:text-[4.75rem]"
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
                  className="flex text-[2.875rem] font-anton gap-2 items-center leading-[110%] lg:text-[4.25rem] md:text-[3.5rem] sm:text-[3.25rem] tracking-[-1px] uppercase xl:text-[4.75rem]"
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
                className="btn btn-primary font-anton inline-flex leading-[120%] mt-[2.125rem] transition uppercase"
              >
                Book Now
              </a>
            </div>
          </div>

          <h2
            className="text-outline -bottom-5 -mt-8 font-anton font-normal leading-[100%] lg:absolute lg:mt-0 tracking-[-0.25rem] uppercase"
            style={{ WebkitTextStrokeColor: "#fff" }}
          >
            SER
            <br />
            VICES
          </h2>
          <Image
            className="absolute left-0 bottom-[10%] lg:bottom-[20%] w-[50%] sm:w-auto"
            src={ServiceSvg}
            alt="img not found"
          />
        </div>
      </section>

      {/* Process Section  */}
      <section className="process-section overflow-x-hidden px-4 relative">
        <Image
          className="absolute top-[-50%] left-0 -z-1"
          src={ProcessEllipse}
          alt="img not found"
        />
        <div className="container mx-auto">
          <hr className="mt-24 secondary-color" />
          <h4 className="font-anton mb-14 mt-12 secondary-color uppercase">
            a simple process
          </h4>
          <div className="grid grid-cols-1 lg:grid-cols-12 pt-12">
            <div className="col-span-12 lg:col-span-8 xl:col-span-8">
              <div className="flex card lg:pb-34 md:gap-10 md:pb-30 pb-[5rem] relative sm:items-center xl:pb-38">
                <div className="icon-wrapper mt-8 sm:m-0">
                  <Image
                    className="h-100 w-100 object-contain"
                    src={discoveryIcon}
                    alt="img not found"
                  />
                </div>
                <div className="flex flex-col items-center self-stretch">
                  <div className="flex bg-white h-[2.188rem] justify-center rounded-br-none rounded-full w-[2.188rem] items-center md:h-[3.75rem] md:w-[3.75rem] sm:h-[3.25rem] sm:w-[3.25rem]">
                    <h5 className="font-normal leading-[1.375rem] primary-color">
                      1
                    </h5>
                  </div>
                  <div className="bg-[#353344] h-full w-[0.313rem] absolute top-0 z-[-1]">
                    <div className="bg-purple h-[0%] w-full"></div>
                  </div>
                </div>
                <div className="md:p-0 pl-4">
                  <p className="text-xl font-bold font-manrope mb-6 pink-color">
                    STEP 01
                  </p>
                  <h3 className="font-anton font-normal leading-[110%] mb-2 uppercase">
                    Book a Discovery Call:
                  </h3>
                  <p className="font-manrope font-semibold leading-[160%]">
                    Let’s discuss your project, vision, and goals. During this
                    call, we’ll understand your needs, review your ideas, and
                    outline actionable next steps to get started.
                  </p>
                </div>
              </div>

              <div className="flex card lg:pb-34 md:gap-10 md:pb-30 pb-[5rem] relative sm:items-center xl:pb-38">
                <div className="icon-wrapper mt-8 sm:m-0">
                  <Image
                    className="h-100 w-100 object-contain"
                    src={designIcon}
                    alt="img not found"
                  />
                </div>
                <div className="flex flex-col items-center self-stretch">
                  <div className="flex bg-[#353344] h-[2.188rem] justify-center rounded-br-none rounded-full w-[2.188rem] items-center md:h-[3.75rem] md:w-[3.75rem] sm:h-[3.25rem] sm:w-[3.25rem]">
                    <h5
                      className="font-normal leading-[1.375rem]"
                      style={{ color: "#B7B7B7" }}
                    >
                      2
                    </h5>
                  </div>
                  <div className="bg-[#353344] h-full w-[0.313rem] absolute top-0 z-[-1]">
                    <div className="bg-purple h-0 w-full"></div>
                  </div>
                </div>
                <div className="md:p-0 pl-4">
                  <p className="text-xl font-bold font-manrope mb-6 pink-color">
                    STEP 02
                  </p>
                  <h3 className="font-anton font-normal leading-[110%] mb-2 uppercase">
                    Add Your Design Details:
                  </h3>
                  <p className="font-manrope font-semibold leading-[160%]">
                    After subscribing, you’ll gain access to our project board.
                    Provide your project requirements, share your brand
                    guidelines, and upload any reference material. Don’t
                    worry—we’ll guide you through the setup process.
                  </p>
                </div>
              </div>

              <div className="flex card lg:pb-34 md:gap-10 md:pb-30 pb-[5rem] relative sm:items-center xl:pb-38">
                <div className="icon-wrapper mt-8 sm:m-0">
                  <Image
                    className="h-100 w-100 object-contain"
                    src={createIcon}
                    alt="img not found"
                  />
                </div>
                <div className="flex flex-col items-center self-stretch">
                  <div className="flex bg-[#353344] h-[2.188rem] justify-center rounded-br-none rounded-full w-[2.188rem] items-center md:h-[3.75rem] md:w-[3.75rem] sm:h-[3.25rem] sm:w-[3.25rem]">
                    <h5
                      className="font-normal leading-[1.375rem]"
                      style={{ color: "#B7B7B7" }}
                    >
                      3
                    </h5>
                  </div>
                  <div className="bg-[#353344] h-full w-[0.313rem] absolute top-0 z-[-1]">
                    <div className="bg-purple h-[0%] w-full"></div>
                  </div>
                </div>
                <div className="md:p-0 pl-4">
                  <p className="text-xl font-bold font-manrope mb-6 pink-color">
                    STEP 03
                  </p>
                  <h3 className="font-anton font-normal leading-[110%] mb-2 uppercase">
                    Create Design Tasks:
                  </h3>
                  <p className="font-manrope font-semibold leading-[160%]">
                    Your project details will be broken down into actionable
                    design tasks. Each week, your team will complete a ‘Design
                    Sprint,’ focusing on your highest-priority tasks.
                  </p>
                </div>
              </div>

              <div className="flex card lg:pb-34 md:gap-10 md:pb-30 pb-[5rem] relative sm:items-center xl:pb-38">
                <div className="icon-wrapper mt-8 sm:m-0">
                  <Image
                    className="h-100 w-100 object-contain"
                    src={requestIcon}
                    alt="img not found"
                  />
                </div>
                <div className="flex flex-col items-center self-stretch">
                  <div className="flex bg-[#353344] h-[2.188rem] justify-center rounded-br-none rounded-full w-[2.188rem] items-center md:h-[3.75rem] md:w-[3.75rem] sm:h-[3.25rem] sm:w-[3.25rem]">
                    <h5
                      className="font-normal leading-[1.375rem]"
                      style={{ color: "#B7B7B7" }}
                    >
                      4
                    </h5>
                  </div>
                  <div className="bg-[#353344] h-full w-[0.313rem] absolute top-0 z-[-1]">
                    <div className="bg-purple h-[0%] w-full"></div>
                  </div>
                </div>
                <div className="md:p-0 pl-4">
                  <p className="text-xl font-bold font-manrope mb-6 pink-color">
                    STEP 04
                  </p>
                  <h3 className="font-anton font-normal leading-[110%] mb-2 uppercase">
                    Request Unlimited Revisions:
                  </h3>
                  <p className="font-manrope font-semibold leading-[160%]">
                    We revise every task until you’re completely satisfied. Once
                    approved, we move on to the next task, ensuring a seamless
                    workflow for your project.
                  </p>
                </div>
              </div>

              <div className="flex card md:gap-10 relative sm:items-center">
                <div className="icon-wrapper mt-8 sm:m-0">
                  <Image
                    className="h-100 w-100 object-contain"
                    src={trackIcon}
                    alt="img not found"
                  />
                </div>
                <div className="flex flex-col items-center self-stretch">
                  <div className="flex bg-[#353344] h-[2.188rem] justify-center rounded-br-none rounded-full w-[2.188rem] items-center md:h-[3.75rem] md:w-[3.75rem] sm:h-[3.25rem] sm:w-[3.25rem]">
                    <h5
                      className="font-normal leading-[1.375rem]"
                      style={{ color: "#B7B7B7" }}
                    >
                      5
                    </h5>
                  </div>
                </div>
                <div className="md:p-0 pl-4">
                  <p className="text-xl font-bold font-manrope mb-6 pink-color">
                    STEP 05
                  </p>
                  <h3 className="font-anton font-normal leading-[110%] mb-2 uppercase">
                    Track & Manage Progress:
                  </h3>
                  <p className="font-manrope font-semibold leading-[160%]">
                    Stay in control with a real-time project management board
                    where you can review tasks, provide feedback, and request
                    updates. Our flexible subscription model allows you to pause
                    and resume services based on your needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-12 hidden lg:block lg:col-span-4 xl:col-span-4">
              <h2 className="text-outline font-anton font-normal leading-[100%] rotate-90 tracking-[-0.25rem] uppercase whitespace-nowrap">
                How it works
              </h2>
            </div>
          </div>
          <button className="flex btn btn-primary cursor-pointer font-anton leading-[120%] mt-12 mx-auto transition uppercase">
            Book Now
          </button>
        </div>
      </section>

      {/* Table Section  */}
      <section className="container mx-auto px-4">
        <hr className="w-full max-w-screen-xl mt-10 mx-auto pb-20 secondary-color" />

        <h4 className="text-[#62606F] text-[20px] font-anton leading-[24px] lg:leading-[48px] lg:mb-[100px] lg:text-[40px] mb-10 uppercase">
          Why Choose Us?
        </h4>

        <div className="mb-[100px] overflow-x-auto relative">
          <table className="table-fixed text-left text-sm w-[900px] md:w-full rtl:text-right">
            <thead className="text-2xl font-anton leading-[26px] lg:leading-[48px] lg:text-[42px] uppercase">
              <tr>
                <th
                  scope="col"
                  className="text-center w-[190px] md:table-cell md:w-[310px] pb-12 pt-7 px-6"
                >
                  Features
                </th>
                <th
                  scope="col"
                  className="table_border_left text-center w-[190px] md:table-cell md:w-[310px] pb-12 pt-7 px-6"
                >
                  Freelancers
                </th>
                <th
                  scope="col"
                  className="table_border_left text-center w-[190px] md:table-cell md:w-[310px] pb-12 pt-7 px-6"
                >
                  Agencies
                </th>
                <th
                  scope="col"
                  className="table_border_left text-center w-[190px] md:table-cell md:w-[310px] pb-12 pt-7 px-6"
                >
                  Us
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-[#555555] border-b">
                <th
                  scope="col"
                  className="border-[#555555] border-b text-sm lg:px-6 lg:text-lg px-0 py-7"
                >
                  Fixed Monthly Pricing
                </th>
                <td className="table_td_bg text-center px-6 py-7">
                  <div className="border border-[#666] p-2.5 rounded-full w-fit inline-block">
                    <X className="text-[#666666]" />
                  </div>
                </td>
                <td className="table_td_bg text-center px-6 py-7">
                  <div className="border border-[#666] p-2.5 rounded-full w-fit inline-block">
                    <X className="text-[#666666]" />
                  </div>
                </td>
                <td className="table_td_bg text-center px-6 py-7">
                  <div className="bg-[rgba(255,255,255,0.10)] p-2.5 rounded-full w-fit inline-block">
                    <Check className="text-[#D68CCB]" />
                  </div>
                </td>
              </tr>
              <tr className="border-[#555555] border-b">
                <th
                  scope="col"
                  className="border-[#555555] border-b text-sm lg:px-6 lg:text-lg px-0 py-7"
                >
                  Unlimited Design Requests
                </th>
                <td className="table_td_bg text-center px-6 py-7">
                  <div className="border border-[#666] p-2.5 rounded-full w-fit inline-block">
                    <X className="text-[#666666]" />
                  </div>
                </td>
                <td className="table_td_bg text-center px-6 py-7">
                  <div className="border border-[#666] p-2.5 rounded-full w-fit inline-block">
                    <X className="text-[#666666]" />
                  </div>
                </td>
                <td className="table_td_bg text-center px-6 py-7">
                  <div className="bg-[rgba(255,255,255,0.10)] p-2.5 rounded-full w-fit inline-block">
                    <Check className="text-[#D68CCB]" />
                  </div>
                </td>
              </tr>

              <tr className="border-[#555555] border-b">
                <th
                  scope="col"
                  className="border-[#555555] border-b text-sm lg:px-6 lg:text-lg px-0 py-7"
                >
                  Unlimited Revisions
                </th>
                <td className="table_td_bg text-center px-6 py-7">
                  <div className="border border-[#666] p-2.5 rounded-full w-fit inline-block">
                    <X className="text-[#666666]" />
                  </div>
                </td>
                <td className="table_td_bg text-center px-6 py-7">
                  <div className="border border-[#666] p-2.5 rounded-full w-fit inline-block">
                    <X className="text-[#666666]" />
                  </div>
                </td>
                <td className="table_td_bg text-center px-6 py-7">
                  <div className="bg-[rgba(255,255,255,0.10)] p-2.5 rounded-full w-fit inline-block">
                    <Check className="text-[#D68CCB]" />
                  </div>
                </td>
              </tr>

              <tr className="border-[#555555] border-b">
                <th
                  scope="col"
                  className="border-[#555555] border-b text-sm lg:px-6 lg:text-lg px-0 py-7"
                >
                  Dedicated Design Team
                </th>
                <td className="table_td_bg text-center px-6 py-7">
                  <div className="border border-[#666] p-2.5 rounded-full w-fit inline-block">
                    <X className="text-[#666666]" />
                  </div>
                </td>
                <td className="table_td_bg text-center px-6 py-7">
                  <div className="border border-[#666] p-2.5 rounded-full w-fit inline-block">
                    <X className="text-[#666666]" />
                  </div>
                </td>
                <td className="table_td_bg text-center px-6 py-7">
                  <div className="bg-[rgba(255,255,255,0.10)] p-2.5 rounded-full w-fit inline-block">
                    <Check className="text-[#D68CCB]" />
                  </div>
                </td>
              </tr>

              <tr className="border-[#555555] border-b rounded-br-[12px]">
                <th
                  scope="col"
                  className="text-sm lg:px-6 lg:text-lg px-0 py-7"
                >
                  Real-Time Collaboration
                </th>
                <td className="table_td_bg rounded-bl-[12px] rounded-br-[12px] text-center px-6 py-7">
                  <div className="border border-[#666] p-2.5 rounded-full w-fit inline-block">
                    <X className="text-[#666666]" />
                  </div>
                </td>
                <td className="table_td_bg rounded-bl-[12px] rounded-br-[12px] text-center px-6 py-7">
                  <div className="border border-[#666] p-2.5 rounded-full w-fit inline-block">
                    <X className="text-[#666666]" />
                  </div>
                </td>
                <td className="table_td_bg rounded-br-[12px] text-center px-6 py-7">
                  <div className="bg-[rgba(255,255,255,0.10)] p-2.5 rounded-full w-fit inline-block">
                    <Check className="text-[#D68CCB]" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[#6155E1] p-7 rounded-[30px] text-white lg:p-[50px] mb-[100px]">
          <div className="grid grid-cols-12 gap-6 items-center">
            {/* First Div: Heading (8 columns) */}
            <div className="col-span-12 text-left lg:col-span-8">
              <h2 className="text-[44px] font-anton leading-[110%] lg:leading-[90px] lg:text-[84px] tracking-[-1px] uppercase">
                Book Your <br /> Discovery Call
                <br />
                Today
              </h2>
            </div>

            {/* Third Div: Paragraph and Button (4 columns) */}
            <div className="col-span-12 text-left lg:col-span-4">
              {/* Paragraph */}
              <p className="text-[12px] lg:mb-6 lg:text-lg mb-[24px]">
                Let’s turn your vision into a reality. Join our network of
                founders who trust us to design the products their users love.
              </p>

              {/* Button */}
              <button className="bg-white justify-center rounded-[64px] text-[#6155E1] text-[12px] font-anton font-normal gap-2 hover:opacity-80 items-center leading-[120%] lg:px-10 lg:py-6 lg:text-[1.25rem] primary-color px-[20px] py-[14px] transition">
                Book a Call Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* InNumbers Section  */}
      <section className="px-4 relative">
        <Image
          className="absolute bottom-[-100%] translate-y-[15%] left-0 -z-1"
          src={NumbersEllipse}
          alt="img not found"
        />
        <div className="container mx-auto">
          <div className="border-[#62606f] border-t mt-20 pt-40">
            <div className="grid grid-cols-12 gap-6">
              {/* First Div: 4 columns on desktop, 12 columns on mobile */}
              <div className="col-span-12 lg:col-span-6">
                {/* Content for the first div */}
                <h2 className="text-[#62606F] text-[20px] font-anton lg:-mt-6 lg:mb-[100px] lg:text-[40px] mb-0 uppercase">
                  IN NUMBERS
                </h2>
              </div>

              {/* Second Div: 8 columns on desktop, 12 columns on mobile */}
              <div className="col-span-12 lg:col-span-6">
                {/* Content for the second div */}
                <p className="text-xs lg:mb-16 lg:text-lg mb-[24px]">
                  Our UI/UX recruitment agency specializes in connecting top
                  design talent with the right opportunities. Using advanced
                  hiring tools and platforms like Behance, Dribbble, and
                  LinkedIn, we streamline the recruitment process. Our tailored
                  screening ensures businesses find the perfect fit, making
                  hiring seamless and efficient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
