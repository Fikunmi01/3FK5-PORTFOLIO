import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper";

export default function Testimonial() {
  const review = [
    {
      id: 0,
      name: "Abiodun",
      client:'Marketing Manager',
      review:
        "Fikunmi is a true professional who understands the importance of user experience and pixel-perfect designs. He delivered our project on time, and the result was a visually stunning and highly functional website. I highly recommend his services. ",
    },
    {
      id: 1,
      name: "Yinka",
      client:'Small-scale Entrepreneur',
      review:
        "I've worked with several front-end developers in the past, but Fikunmi stands out from the rest. His ability to translate our ideas into a seamless user interface was impressive. They have a keen eye for design and a deep understanding of modern web technologies. It was a pleasure collaborating with him.",
    },
    {
      id: 2,
      name: "Peter Aondofar",
      client:'Real Estate Agent',
      review:
        "Working with Fikunmi was an absolute pleasure. Their attention to detail and commitment to delivering exceptional front-end solutions are commendable. They brought our vision to life and exceeded our expectations. Highly recommended!",
    },
    {
      id: 3,
      name: "Rogers Anyim ",
      client:'Startup Founder',
      review:
        "Fikunmi is an exceptional frontend developer who consistently delivers top-notch results. He is reliable, responsive, and highly skilled in his craft. His ability to optimize performance and create intuitive user experiences is remarkable. I wouldn't hesitate to work with him again in the future.",
    },
  ];
  return (
    <>
      <div className="lg:px-24 lg:py-20 py-12 px-5 bg-[#f3f5f7] font-kalam">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Testimonial</h2>
          <p className="text-[rgba(0,0,0,.7)] text-xl">What my client says</p>
        </div>

        <>
          <Swiper
            navigation={true}
            pagination={{ dynamicBullets: true }}
            modules={[Navigation, Pagination]}
            className="lg:w-3/5 rounded-xl mt-10 bg-[#e3f0fc] boxShadow"
          >
            {review.map((review, i) => (
              <div key={review.id}>
                <SwiperSlide key={review.id} className="lg:px-10 p-5 lg:py-10">
                  <div>
                    <p className="text-2xl leading-loose">{review.name}</p>

                    <p className="text-xl leading-loose">{review.client}</p>

                    <p className="text-lg">{review.review}</p>
                  </div>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </>
      </div>
    </>
  );
}
