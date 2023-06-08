import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();
// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination'
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper";

export default function Testimonial() {
  const review = [
    {
      id: 0,
      name: "Sarah Williams",
      review:
        "I get a good impression, I carry out my project with the best possible quality and attention and support 24hours a day. They offer the best quality you can get.",
    },
    {
      id: 1,
      name: "John Agnes",
      review:
        "I get a good impression, I carry out my project with the best possible quality and attention and support 24hours a day",
    },
    {
      id: 2,
      name: "Bola Sobowale",
      review:
        "I get a good impression, I carry out my project with the best possible quality and attention and support 24hours a day",
    },
    {
      id: 3,
      name: "Michael Clayfield",
      review:
        "I get a good impression, I carry out my project with the best possible quality and attention and support 24hours a day",
    },
    {
      id: 4,
      name: "John Austin",
      review:
        "I get a good impression, I carry out my project with the best possible quality and attention and support 24hours a day",
    },
    {
      id: 5,
      name: "Nico Williams",
      review:
        "I get a good impression, I carry out my project with the best possible quality and attention and support 24hours a day",
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
          <Swiper navigation={true} pagination={{dynamicBullets: true}} modules={[Navigation, Pagination]} className="lg:w-3/5 rounded-xl mt-10 bg-[#e3f0fc] boxShadow">
            {review.map((review, i) => (
              <div key={review.id}>
                <SwiperSlide key={review.id} className="lg:px-10 p-5 lg:py-10">
                  <div>
                    <p className="text-2xl leading-loose">{review.name}</p>

                    <p className="text-xl leading-loose">Client</p>

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
