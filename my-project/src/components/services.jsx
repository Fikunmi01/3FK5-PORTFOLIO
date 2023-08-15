import React from "react";

export const Services = () => {
  return (
    <>
      <div className="bg-[#f3f5f7] font-kalam relative lg:px-24 py-10 lg:py-20">
        <span className="text-center">
          <h2 className="text-4xl font-bold text-[#000000]">Services</h2>
          <p className="text-xl text-[rgba(0,0,0,.7)]">What I Offer</p>
        </span>

        <div className="flex flex-col-reverse lg:flex-row gap-14 items-center justify-center px-3 mt-10 lg:mt-0">
          <div className="lg:w-3/5">
            <h1 className="text-4xl text-[#102438] font-bold leading-normal">
              What I can do for you
            </h1>
            <p className="text-[rgba(0,0,0,.7)] text-xl">
              Engineering Excellence: With expertise in JavaScript and a focus
              on performance and scalability, I deliver fast and resilient
              solutions that can handle any scale.{" "}
            </p>
            <p className="text-[rgba(0,0,0,.7)] text-xl">
              Exceptional User Experiences: I prioritise creating interfaces
              that are intuitive, accessible, and optimised for an outstanding
              user journey.
            </p>
          </div>

          <div className=" relative lg:w-96 lg:h-96 w-full rounded-2xl">
            <img src="/assets/lottieAnimation.svg" className="" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
