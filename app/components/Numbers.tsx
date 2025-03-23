import React from "react";

const Numbers = () => {
  return (
    <div className="container mx-auto">
      <hr className="mx-auto w-full max-w-screen-xl mt-10 secondary-color" />
      <div className="grid grid-cols-12 gap-8 pb-20 mt-20 ">
        <div className="lg:col-span-5 lg:items-start items-center col-span-12">
          <h4 className="secondary-color font-anton ">In Numbers</h4>
        </div>
        <div className="lg:col-span-6 lg:items-start items-center col-span-12 ">
          <p className="font-manrope font-semibold leading-[160%]">
            Our UI/UX recruitment agency specializes in connecting top design
            talent with the right opportunities. Using advanced hiring tools and
            platforms like Behance, Dribbble, and LinkedIn, we streamline the
            recruitment process. Our tailored screening ensures businesses find
            the perfect fit, making hiring seamless and efficient.
          </p>
          <ul className="flex flex-col lg:flex-row md:flex-row sm:flex-row items-center lg:items-start md:items-start sm:items-start text-7xl gap-16 font-anton font-normal mt-14">
            <li>
              200+
              <p className="font-manrope secondary-color mt-2">
                Projects completed
              </p>
            </li>
            <li>
              20+
              <p className="font-manrope secondary-color mt-2">
                Rework customers
              </p>
            </li>
            <li>
              5+
              <p className="font-manrope secondary-color mt-2">
                Years experience
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
