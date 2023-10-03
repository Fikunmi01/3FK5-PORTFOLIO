import React from "react";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export default function Navlinks() {
  const scrollToTop = () => {
    scroll.scrollToTop({
      smooth: true,
      duration: 500,
    });
  };

  return (
    <>
      <ul className="lg:flex lg:text-lg bottom-10 grid grid-cols-3 bg-[#f3f5f7] lg:bg-[#102438] lg:z-0 py-3 w-full absolute left-0 lg:gap-8">
        <li onClick={scrollToTop} className="flex flex-col-reverse text-center cursor-pointer">
          Home
          <i className="uil uil-estate lg:hidden"></i>
        </li>

        <li className="flex flex-col-reverse text-center cursor-pointer">
          <Link to="section1" spy={true} smooth={true} duration={500}>
            About
          </Link>
          <i className="uil uil-user lg:hidden"></i>
        </li>

        <li className="flex flex-col-reverse text-center cursor-pointer">
          <Link to="section2" spy={true} smooth={true} duration={500}>
            Skills
          </Link>
          <i className="uil uil-user lg:hidden"></i>
        </li>

        <li className="flex flex-col-reverse text-center cursor-pointer">
          <Link to="section3" spy={true} smooth={true} duration={500}>
            Services
          </Link>
          <i className="uil uil-user lg:hidden"></i>
        </li>

        <li className="flex flex-col-reverse text-center cursor-pointer">
          <Link to="section4" spy={true} smooth={true} duration={500}>
            Portfolio
          </Link>
          <i className="uil uil-user lg:hidden"></i>
        </li>

        <li className="flex flex-col-reverse text-center cursor-pointer">
          <Link to="section5" spy={true} smooth={true} duration={500}>
            Contact Me
          </Link>
          <i className="uil uil-user lg:hidden"></i>
        </li>
      </ul>
    </>
  );
}
