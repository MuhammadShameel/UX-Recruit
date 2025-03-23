import React from "react";
import { Check, X } from "lucide-react";

const Table = () => {
  return (
    <section className="container mx-auto">
      <hr className="mx-auto w-full max-w-screen-xl mt-10 secondary-color pb-20" />

      <h4 className="text-[#62606F] text-[20px]leading-[24px] lg:text-[40px] lg:leading-[48px] uppercase font-anton mb-10 lg:mb-[100px]">
        Why Choose Us?
      </h4>

      <div className="relative overflow-x-auto mb-[100px]">
        <table className="w-[900px] md:w-full table-fixed text-sm text-left rtl:text-right">
          <thead className="text-2xl leading-[26px] lg:text-[42px] lg:leading-[48px] uppercase font-anton">
            <tr>
              <th
                scope="col"
                className="px-6 pt-7 pb-12 text-center w-[190px] md:w-[310px] md:table-cell"
              >
                Features
              </th>
              <th
                scope="col"
                className="px-6 pt-7 pb-12 table_border_left text-center w-[190px] md:w-[310px] md:table-cell"
              >
                Freelancers
              </th>
              <th
                scope="col"
                className="px-6 pt-7 pb-12 table_border_left text-center w-[190px] md:w-[310px] md:table-cell"
              >
                Agencies
              </th>
              <th
                scope="col"
                className="px-6 pt-7 pb-12 table_border_left text-center w-[190px] md:w-[310px] md:table-cell"
              >
                Us
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#555555]">
              <th
                scope="col"
                className="px-0 lg:px-6 py-7 text-sm lg:text-lg border-b border-[#555555]"
              >
                Fixed Monthly Pricing
              </th>
              <td className="px-6 py-7 text-center table_td_bg">
                <div className="border border-[#666] rounded-full w-fit p-2.5 inline-block">
                  <X className="text-[#666666]" />
                </div>
              </td>
              <td className="px-6 py-7 text-center table_td_bg">
                <div className="border border-[#666] rounded-full w-fit p-2.5 inline-block">
                  <X className="text-[#666666]" />
                </div>
              </td>
              <td className="px-6 py-7 text-center table_td_bg">
                <div className="bg-[rgba(255,255,255,0.10)] rounded-full w-fit p-2.5 inline-block">
                  <Check className="text-[#D68CCB]" />
                </div>
              </td>
            </tr>
            <tr className="border-b border-[#555555]">
              <th
                scope="col"
                className="px-0 lg:px-6 py-7 text-sm lg:text-lg border-b border-[#555555]"
              >
                Unlimited Design Requests
              </th>
              <td className="px-6 py-7 text-center table_td_bg">
                <div className="border border-[#666] rounded-full w-fit p-2.5 inline-block">
                  <X className="text-[#666666]" />
                </div>
              </td>
              <td className="px-6 py-7 text-center table_td_bg">
                <div className="border border-[#666] rounded-full w-fit p-2.5 inline-block">
                  <X className="text-[#666666]" />
                </div>
              </td>
              <td className="px-6 py-7 text-center table_td_bg">
                <div className="bg-[rgba(255,255,255,0.10)] rounded-full w-fit p-2.5 inline-block">
                  <Check className="text-[#D68CCB]" />
                </div>
              </td>
            </tr>

            <tr className="border-b border-[#555555]">
              <th
                scope="col"
                className="px-0 lg:px-6 py-7 text-sm lg:text-lg border-b border-[#555555]"
              >
                Unlimited Revisions
              </th>
              <td className="px-6 py-7 text-center table_td_bg">
                <div className="border border-[#666] rounded-full w-fit p-2.5 inline-block">
                  <X className="text-[#666666]" />
                </div>
              </td>
              <td className="px-6 py-7 text-center table_td_bg">
                <div className="border border-[#666] rounded-full w-fit p-2.5 inline-block">
                  <X className="text-[#666666]" />
                </div>
              </td>
              <td className="px-6 py-7 text-center table_td_bg">
                <div className="bg-[rgba(255,255,255,0.10)] rounded-full w-fit p-2.5 inline-block">
                  <Check className="text-[#D68CCB]" />
                </div>
              </td>
            </tr>

            <tr className="border-b border-[#555555]">
              <th
                scope="col"
                className="px-0 lg:px-6 py-7 text-sm lg:text-lg border-b border-[#555555]"
              >
                Dedicated Design Team
              </th>
              <td className="px-6 py-7 text-center table_td_bg">
                <div className="border border-[#666] rounded-full w-fit p-2.5 inline-block">
                  <X className="text-[#666666]" />
                </div>
              </td>
              <td className="px-6 py-7 text-center table_td_bg">
                <div className="border border-[#666] rounded-full w-fit p-2.5 inline-block">
                  <X className="text-[#666666]" />
                </div>
              </td>
              <td className="px-6 py-7 text-center table_td_bg">
                <div className="bg-[rgba(255,255,255,0.10)] rounded-full w-fit p-2.5 inline-block">
                  <Check className="text-[#D68CCB]" />
                </div>
              </td>
            </tr>

            <tr className="border-b border-[#555555] rounded-br-[12px]">
              <th scope="col" className="px-0 lg:px-6 py-7 text-sm lg:text-lg">
                Real-Time Collaboration
              </th>
              <td className="px-6 py-7 text-center table_td_bg rounded-bl-[12px] rounded-br-[12px]">
                <div className="border border-[#666] rounded-full w-fit p-2.5 inline-block">
                  <X className="text-[#666666]" />
                </div>
              </td>
              <td className="px-6 py-7 text-center table_td_bg rounded-bl-[12px] rounded-br-[12px]">
                <div className="border border-[#666] rounded-full w-fit p-2.5 inline-block">
                  <X className="text-[#666666]" />
                </div>
              </td>
              <td className="px-6 py-7 text-center table_td_bg rounded-br-[12px]">
                <div className="bg-[rgba(255,255,255,0.10)] rounded-full w-fit p-2.5 inline-block">
                  <Check className="text-[#D68CCB]" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mb-[100px] bg-[#6155E1] rounded-[30px] lg:p-[50px] p-7 text-white">
        <div className="grid grid-cols-12 gap-6 items-center">
          {/* First Div: Heading (8 columns) */}
          <div className="col-span-12 lg:col-span-8 text-left">
            <h2 className="text-[44px] leading-[110%] uppercase font-anton tracking-[-1px] lg:text-[84px] lg:leading-[90px]">
              Book Your <br /> Discovery Call
              <br />
              Today
            </h2>
          </div>

          {/* Third Div: Paragraph and Button (4 columns) */}
          <div className="col-span-12 lg:col-span-4 text-left">
            {/* Paragraph */}
            <p className="text-[12px] mb-[24px] lg:text-lg lg:mb-6">
              Let’s turn your vision into a reality. Join our network of
              founders who trust us to design the products their users love.
            </p>

            {/* Button */}
            <button className="px-[20px] py-[14px] bg-white text-[#6155E1] text-[12px] leading-[120%] font-normal gap-2 font-anton items-center justify-center primary-color rounded-[64px] hover:opacity-80 transition lg:px-10 lg:py-6 lg:text-[1.25rem]">
              Book a Call Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Table;
