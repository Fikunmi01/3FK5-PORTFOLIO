import React from "react";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

// import required modules
// import { Navigation,Pagination } from "swiper";

export const portfolioData = [
  {
    id: 0,
    img: "/assets/portfolioImg1.jpg",
    title: "Trabook",
    jobDescription:
      "Website Adapatable to all devices, with UI components and animated interactions for a travel booking website for easy bookings and accomodations",
    link: "https://trabookvac.netlify.app/",
  },
  {
    id: 1,
    img: "/assets/jasonsc.png",
    title: "Jason",
    jobDescription:
      "Website Adapatable to all devices, with UI components and animated interactions",
    link: "https://fantastic-faun-9b7101.netlify.app/",
  },
  {
    id: 2,
    img: "/assets/pixellab.png",
    title: "Pixel Lab",
    jobDescription:
      "Website Adapatable to all devices, with UI components and animated interactions",
    link: "https://pixelab-angular.vercel.app/",
  },
];

export default function Swiperslide() {
  return (
    <>
      <swiper-container
        // navigation={true}

        // modules={[Navigation]}
        className="mySwiper"
      >
        {portfolioData.map((portfolio, i) => (
          <swiper-slide key={portfolio.id}>
            <div className="flex lg:flex-row flex-col lg:px-16 gap-10">
              <img
                src={portfolio.img}
                className="w-full lg:w-1/2 rounded-xl"
                alt=""
              />

              <span>
                <h3 className="text-4xl leading-loose text-[#000] font-bold">
                  {portfolio.title}
                </h3>
                <p className="text-2xl text-[#000] mb-10 pb-2">
                  {portfolio.jobDescription}
                </p>
                <Link to={portfolio.link}>
                  <button className="px-5 rounded-xl bg-[#102438] text-white py-3 text-xl boxShadow">
                    Demo <i className="uil uil-arrow-right"></i>{" "}
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
