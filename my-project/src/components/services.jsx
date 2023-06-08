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
            <h1 className="text-4xl text-[#102438] font-bold leading-normal">What I can do for you</h1>
            <p className="text-[rgba(0,0,0,.7)] text-xl">
              Your business will lose significant amounts of money when your
              customers have poor experiences with your products. This can occur
              due to poorly optimized and unresponsive web interfaces. Moreover,
              in today's digital age, it's essential for your business to have a
              strong online presence. Unfortunately, if potential customers
              can't easily find you online, your business may suffer even
              greater financial losses.
            </p>
          </div>

          <div className=" relative lg:w-96 lg:h-96 w-full rounded-2xl">
            <img src="./src/assets/lottieAnimation.svg" className="" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
