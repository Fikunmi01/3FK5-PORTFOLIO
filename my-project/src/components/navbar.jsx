import React from "react";
import Navlinks from "./navlinks";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

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
              <li className="cursor-pointer">
                <Link to="/" spy={true} smooth={true} duration={500}>
                  Home
                </Link>
              </li>

              <li className="cursor-pointer">
                <Link to="section1" spy={true} smooth={true} duration={500}>
                  About
                </Link>
              </li>
              <li  className="cursor-pointer">
                <Link to="section2" spy={true} smooth={true} duration={500}>
                  Skills
                </Link>
              </li>

              <li className="cursor-pointer">
                <Link to="section3" spy={true} smooth={true} duration={500}>
                  Service
                </Link>
              </li>

              <li className="cursor-pointer">
                <Link to="section4" spy={true} smooth={true} duration={500}>
                  Portfolio
                </Link>
              </li>

              <li className="cursor-pointer">
                <Link to="section5" spy={true} smooth={true} duration={500}>
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
