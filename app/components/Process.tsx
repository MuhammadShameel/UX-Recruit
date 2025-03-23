import React from "react";
import Image from "next/image";
import discoveryIcon from "../../public/assets/images/book-discovery-icon.png";
import designIcon from "../../public/assets/images/add-design-icon.png";
import createIcon from "../../public/assets/images/create-design-icon.png";
import requestIcon from "../../public/assets/images/request-revision-icon.png";
import trackIcon from "../../public/assets/images/track-manage-icon.png";

const Process = () => {
  return (
    <section className="process-section px-4">
      <div className="container mx-auto">
        <hr className="mt-24 secondary-color" />
        <h4 className="secondary-color font-anton uppercase mt-12 mb-14">
          a simple process
        </h4>
        <div className="grid grid-cols-1 lg:grid-cols-12 pt-12">
          <div className="col-span-12 lg:col-span-8 xl:col-span-8">
            <div className="card flex sm:items-center pb-[5rem] md:pb-30 lg:pb-34 xl:pb-38 relative md:gap-10">
              <div className="icon-wrapper mt-8 sm:m-0">
                <Image
                  className="w-100 h-100 object-contain"
                  src={discoveryIcon}
                  alt="img not found"
                />
              </div>
              <div className="self-stretch flex flex-col items-center">
                <div className="flex items-center justify-center bg-white w-[2.188rem] sm:w-[3.25rem] md:w-[3.75rem] h-[2.188rem]  sm:h-[3.25rem] md:h-[3.75rem] rounded-full rounded-br-none">
                  <h5 className="primary-color font-normal leading-[1.375rem]">
                    1
                  </h5>
                </div>
                <div className="bg-light-grey w-[0.313rem] absolute top-0 h-full z-[-1]">
                  <div className="w-full h-[0%] bg-purple"></div>
                </div>
              </div>
              <div className="pl-4 md:p-0">
                <p className="font-manrope pink-color text-xl font-bold mb-6">
                  STEP 01
                </p>
                <h3 className="font-anton font-normal uppercase leading-[110%] mb-2">
                  Book a Discovery Call:
                </h3>
                <p className="font-manrope font-semibold leading-[160%]">
                  Let’s discuss your project, vision, and goals. During this
                  call, we’ll understand your needs, review your ideas, and
                  outline actionable next steps to get started.
                </p>
              </div>
            </div>

            <div className="card flex sm:items-center pb-[5rem] md:pb-30 lg:pb-34 xl:pb-38 relative md:gap-10">
              <div className="icon-wrapper mt-8 sm:m-0">
                <Image
                  className="w-100 h-100 object-contain"
                  src={designIcon}
                  alt="img not found"
                />
              </div>
              <div className="self-stretch flex flex-col items-center">
                <div className="flex items-center justify-center bg-light-grey w-[2.188rem] sm:w-[3.25rem] md:w-[3.75rem] h-[2.188rem]  sm:h-[3.25rem] md:h-[3.75rem] rounded-full rounded-br-none">
                  <h5
                    className=" font-normal leading-[1.375rem]"
                    style={{ color: "#B7B7B7" }}
                  >
                    2
                  </h5>
                </div>
                <div className="bg-light-grey w-[0.313rem] absolute top-0 h-full z-[-1]">
                  <div className="w-full h-[0%] bg-purple"></div>
                </div>
              </div>
              <div className="pl-4 md:p-0">
                <p className="font-manrope pink-color text-xl font-bold mb-6">
                  STEP 02
                </p>
                <h3 className="font-anton font-normal uppercase leading-[110%] mb-2">
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

            <div className="card flex sm:items-center pb-[5rem] md:pb-30 lg:pb-34 xl:pb-38 relative md:gap-10">
              <div className="icon-wrapper mt-8 sm:m-0">
                <Image
                  className="w-100 h-100 object-contain"
                  src={createIcon}
                  alt="img not found"
                />
              </div>
              <div className="self-stretch flex flex-col items-center">
                <div className="flex items-center justify-center bg-light-grey w-[2.188rem] sm:w-[3.25rem] md:w-[3.75rem] h-[2.188rem]  sm:h-[3.25rem] md:h-[3.75rem] rounded-full rounded-br-none">
                  <h5
                    className=" font-normal leading-[1.375rem]"
                    style={{ color: "#B7B7B7" }}
                  >
                    3
                  </h5>
                </div>
                <div className="bg-light-grey w-[0.313rem] absolute top-0 h-full z-[-1]">
                  <div className="w-full h-[0%] bg-purple"></div>
                </div>
              </div>
              <div className="pl-4 md:p-0">
                <p className="font-manrope pink-color text-xl font-bold mb-6">
                  STEP 03
                </p>
                <h3 className="font-anton font-normal uppercase leading-[110%] mb-2">
                  Create Design Tasks:
                </h3>
                <p className="font-manrope font-semibold leading-[160%]">
                  Your project details will be broken down into actionable
                  design tasks. Each week, your team will complete a ‘Design
                  Sprint,’ focusing on your highest-priority tasks.
                </p>
              </div>
            </div>

            <div className="card flex sm:items-center pb-[5rem] md:pb-30 lg:pb-34 xl:pb-38 relative md:gap-10">
              <div className="icon-wrapper mt-8 sm:m-0">
                <Image
                  className="w-100 h-100 object-contain"
                  src={requestIcon}
                  alt="img not found"
                />
              </div>
              <div className="self-stretch flex flex-col items-center">
                <div className="flex items-center justify-center bg-light-grey w-[2.188rem] sm:w-[3.25rem] md:w-[3.75rem] h-[2.188rem]  sm:h-[3.25rem] md:h-[3.75rem] rounded-full rounded-br-none">
                  <h5
                    className=" font-normal leading-[1.375rem]"
                    style={{ color: "#B7B7B7" }}
                  >
                    4
                  </h5>
                </div>
                <div className="bg-light-grey w-[0.313rem] absolute top-0 h-full z-[-1]">
                  <div className="w-full h-[0%] bg-purple"></div>
                </div>
              </div>
              <div className="pl-4 md:p-0">
                <p className="font-manrope pink-color text-xl font-bold mb-6">
                  STEP 04
                </p>
                <h3 className="font-anton font-normal uppercase leading-[110%] mb-2">
                  Request Unlimited Revisions:
                </h3>
                <p className="font-manrope font-semibold leading-[160%]">
                  We revise every task until you’re completely satisfied. Once
                  approved, we move on to the next task, ensuring a seamless
                  workflow for your project.
                </p>
              </div>
            </div>

            <div className="card flex sm:items-center relative md:gap-10">
              <div className="icon-wrapper mt-8 sm:m-0">
                <Image
                  className="w-100 h-100 object-contain"
                  src={trackIcon}
                  alt="img not found"
                />
              </div>
              <div className="self-stretch flex flex-col items-center">
                <div className="flex items-center justify-center bg-light-grey w-[2.188rem] sm:w-[3.25rem] md:w-[3.75rem] h-[2.188rem]  sm:h-[3.25rem] md:h-[3.75rem] rounded-full rounded-br-none">
                  <h5
                    className=" font-normal leading-[1.375rem]"
                    style={{ color: "#B7B7B7" }}
                  >
                    5
                  </h5>
                </div>
              </div>
              <div className="pl-4 md:p-0">
                <p className="font-manrope pink-color text-xl font-bold mb-6">
                  STEP 05
                </p>
                <h3 className="font-anton font-normal uppercase leading-[110%] mb-2">
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
          <div className="col-span-12 lg:col-span-4 xl:col-span-4 hidden lg:block">
            <h2 className="font-anton uppercase font-normal tracking-[-0.25rem] leading-[100%] text-outline rotate-90 whitespace-nowrap">
              How it works
            </h2>
          </div>
        </div>
        <button className="btn btn-primary flex mt-12 leading-[120%] font-anton uppercase transition mx-auto cursor-pointer">
          Book Now
        </button>
      </div>
    </section>
  );
};

export default Process;
