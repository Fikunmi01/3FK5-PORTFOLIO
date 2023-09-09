import React from "react";

export default function Footer() {
  return (
    <>
      <div className="relative min-h-full">
      <div className="bg-[#102438] font-kalam flex justify-between px-3 py-8 lg:px-20 lg:py-16 items-center">
        <div className="flex flex-col gap-10">
          <h2 className="text-white text-3xl lg:text-4xl font-logo">3FK5</h2>
          <p className="text-white text-lg lg:text-2xl">Frontend Developer</p>
        </div>

        <div className="flex gap-4 text-2xl text-white">
          <a>
            <i className="uil uil-instagram"></i>
          </a>

          <a>
            <i className="uil uil-linkedin"></i>
          </a>

          <a>
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
      </div>

      <div className="px-3 bottom-0 py-3 lg:py-2 lg:px-5 font-kalam mb-12 lg:mb-0">
        <p className="text-lg lg:text-xl">&#169; Oluwafikunmi. All rights reserved.</p>
      </div>
      </div>
    </>
  );
}
