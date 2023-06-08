import React from "react";

export default function Navlinks() {
  return (
    <>
      <ul className="lg:flex lg:text-lg bottom-10 grid grid-cols-3 bg-[#f3f5f7] lg:bg-[#102438] lg:z-0 py-3 w-full absolute left-0 lg:gap-8">

        <li className="flex flex-col-reverse text-center">
          Home
          <i className="uil uil-estate lg:hidden"></i>
        </li>
        <li className="flex flex-col-reverse text-center">
          About
          <i className="uil uil-user lg:hidden"></i>
        </li>
        <li className="flex flex-col-reverse text-center">
          Skills
          <i className="uil uil-file-alt lg:hidden"></i>
        </li>
        <li className="flex flex-col-reverse text-center">
          Services
          <i className="uil uil-briefcase-alt lg:hidden"></i>
        </li>
        <li className="flex flex-col-reverse text-center">
          Portfolio
          <i className="uil uil-scenery lg:hidden"></i>
        </li>
        <li className="flex flex-col-reverse text-center">
          Contact Me
          <i className="uil uil-scenery lg:hidden"></i>
        </li>
      </ul>
    </>
  );
}
