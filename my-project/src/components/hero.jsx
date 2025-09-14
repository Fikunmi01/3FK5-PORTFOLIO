import React from "react";
import { Link } from "react-router-dom";
import {
  Link as Links,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export const Hero = () => {
  return (
    <>
      <div className="bg-[#f3f5f7] relative flex flex-col-reverse lg:flex-row font-kalam text-[#102438] px-2 lg:py-16 lg:px-24 items-center">
        <div className="lg:flex lg:flex-col gap-8 mr-16 hidden ">
          <Link to="https://github.com/Fikunmi01">
            <i className="uil uil-github text-4xl"></i>
          </Link>
          <Link to="https://www.linkedin.com/in/fikunmi-adekunle">
            <i className="uil uil-linkedin text-4xl"></i>
          </Link>
          <Link to="https://www.instagram.com/fikunmi_a/">
            <i className="uil uil-instagram-alt text-4xl"></i>
          </Link>
        </div>

        <div>
          <h2 className="text-4xl leading-loose font-bold text-[#00000]">
            Hi,
          </h2>
          <h2 className="text-4xl lg:leading-loose font-bold text-[#00000]">
            {" "}
            I'm Oluwafikunmi.
          </h2>
          <p className="text-2xl lg:leading-loose">Frontend Developer</p>
          <p className="text-lg mb-8">
            High level experience in web design and development knowledge,
            producing quality work
          </p>

          <Links to="section5" spy={true} smooth={true} duration={500}>
            <button className="px-6 text-xl py-3 rounded-md mb-6 lg:mb-12 bg-[#102438] text-white">
              Contact Me <i className="uil uil-navigator"></i>
            </button>
          </Links>

          <div className="text-lg flex gap-2 items-center mb-2 animate-scroll-bounce">
            <i className="uil scroll-bounce uil-mouse-alt text-2xl "></i>
            <p>Scroll down</p>
          </div>
        </div>
        <div>
          <img src="/assets/heroImg.png" alt="" />
        </div>
      </div>
    </>
  );
};
