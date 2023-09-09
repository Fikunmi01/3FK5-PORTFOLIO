import React from "react";
import Navlinks from "./navlinks";

export const Navbar = () => {
  const [navIcon, setNavicon] = React.useState(false);

  return (
    <>
      <div className="bg-[#f3f5f7] z-20 lg:z-0 bottom-0 fixed w-screen lg:w-full  lg:top-0 lg:bg-[#102438] font-kalam lg:px-10 px-3 items-center text-[#102438] lg:text-[#e3f0fc] lg:relative lg:h-24 h-12 flex justify-between">
        <span className="text-xl lg:block font-logo">3FK5</span>

        <div className="lg:hidden w-full relative left-3/4">
          {navIcon ? (
            <i
              onClick={() => setNavicon(false)}
              className="uil uil-times  text-2xl "
            ></i>
          ) : (
            <i
              onClick={() => setNavicon(true)}
              className="uil uil-apps text-xl"
            ></i>
          )}
        </div>

        {navIcon ? (
          <div className="">
            <Navlinks />
          </div>
        ) : (
          <div className="relative hidden lg:block">
            <ul className="flex gap-8">
              <li>Home</li>
              <li>About</li>
              <li>Skills</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Contact Me</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
