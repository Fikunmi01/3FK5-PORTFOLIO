import React from "react";
import Swiperslide from "./swiper";

export const Portfolio = () => {
  return (
    <>
      <div className="bg-[#e3f0fc] relative font-kalam lg:px-24 px-3 py-12 lg:py-20">
        <span className="text-center  ">
          <h1 className="text-4xl text-[#000000] font-bold">Portfolio</h1>
          <p className="text-[rgba(0,0,0,.7)] text-xl">Most recent work</p>
        </span>

        <div className="mt-10">
            <Swiperslide/>
        </div>
      </div>
    </>
  );
};
