import React, { useState, useEffect } from "react";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

// import required modules
import { Navigation, Pagination } from "swiper";

export const portfolioData = [
  {
    id: 0,
    img: "/assets/ecoHaven.png",
    title: "Real Estate Platform",
    jobDescription:
      "A modern real estate platform that simplifies property search and discovery. This responsive web application allows users to search, filter, and explore property listings with an intuitive and engaging interface.",
    link: "https://eco-haven.vercel.app/",
  },
  {
    id: 1,
    img: "/assets/jasonsc.png",
    title: "Restaurant Website",
    jobDescription:
      "A full-featured restaurant website with integrated online ordering system. this modern web application provides customers with an engaging dining experience from menu browsing to seamless order placement and checkout.",
    link: "https://fantastic-faun-9b7101.netlify.app/",
  },
  {
    id: 2,
    img: "/assets/legacy.png",
    title: "Legacy Life Assures",
    jobDescription:
      "A professional life insurance company website designed to build trust and guide customers through their insurance journey. ",
    link: "https://zky.f96.mytemp.website/",
  },
  {
    id: 6,
    img: "/assets/goldcore.png",
    title: "GoldCore",
    jobDescription:
      "Expert call center staffing solutions connecting businesses with qualified customer service professionals.",
    link: "https://goldcorecpro.com/",
  },
  {
    id: 3,
    img: "/assets/salty.png",
    title: "Salty",
    jobDescription:
      "Website Adapatable to all devices, with UI components and animated interactions",
    link: "https://salty-typescript.vercel.app/",
  },
  {
    id: 4,
    img: "/assets/boldo.png",
    title: "Boldo",
    jobDescription:
      "Website Adapatable to all devices, with UI components and animated interactions",
    link: "https://boldo-chi.vercel.app/",
  },
  {
    id: 5,
    img: "/assets/duplicateCharacter.png",
    title: "Duplicate Remover",
    jobDescription:
      "Website Adapatable to all devices, with UI components and animated interactions",
    link: "https://laughing-octo-engine.vercel.app/",
  },
];

export default function Swiperslide() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    // Check on mount
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      <swiper-container
        navigation={!isMobile} // Only show navigation on non-mobile devices
        modules={[Navigation]}
        className="mySwiper"
      >
        {portfolioData.map((portfolio, i) => (
          <swiper-slide key={portfolio.id}>
            <div className="flex lg:flex-row flex-col items-center lg:px-16 gap-10">
              <img
                src={portfolio.img}
                className="w-full lg:w-1/2 rounded-xl"
                alt=""
              />

              <span>
                <h3 className="text-4xl leading-loose text-[#000] font-bold">
                  {portfolio.title}
                </h3>
                <p className="text-xl text-[#000] mb-4 pb-2">
                  {portfolio.jobDescription}
                </p>
                <Link to={portfolio.link} target="_blank">
                  <button className="px-5 rounded-xl bg-[#102438] text-white py-3 text-xl boxShadow">
                    Demo <i className="uil uil-arrow-right "></i>{" "}
                  </button>
                </Link>
              </span>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
    </>
  );
}
