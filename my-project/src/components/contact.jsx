import React from "react";

export default function Contact() {
  return (
    <>
      <div className="lg:py-20 lg:px-24 bg-[#e3f0fc] font-kalam">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Contact Me</h2>
          <p className="text-xl text-[rgba(0,0,0,.7)]">Get in touch</p>
        </div>

        <div className="lg:flex px-3 relative justify-center lg:gap-16">
          <div>
            <div className="mb-5 flex items-center gap-3 relative">
              <div>
                <i className="uil text-xl uil-phone"></i>
              </div>

              <div>
                <h3 className="text-lg lg:text-xl text-[#102438] font-bold">Call Me</h3>
                <p className="text-lg lg:text-xl text-[#9FA1AD]">2348075332918</p>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-5 lg:mb-28">
              <div>
                <i className="uil uil-envelope text-xl"></i>
              </div>

              <div>
                <h3 className="text-lg lg:text-xl font-bold text-[#102438]">Email</h3>
                <p className="text-lg lg:text-xl text-[#9FA1AD]">
                  fikunmiadekunle@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-5">
              <div>
                <i className="uil uil-map-marker text-xl"></i>
              </div>

              <div>
                <h3 className="font-bold text-[#102438] text-lg lg:text-xl">Location</h3>
                <p className="text-lg lg:text-xl text-[#9FA1AD]">
                  Peru - Lima Av.Bolivar #123
                </p>
              </div>
            </div>
          </div>

          <div>
            <form>
              <div className="mb-10 flex flex-col lg:flex lg:flex-row gap-5 lg:gap-6 lg:items-center">
                <input
                  type="text"
                  className="p-3 rounded-lg lg:w-72 outline-none"
                  placeholder="Name"
                />
                <input
                  type="email"
                  required
                  className="lg:w-72 rounded-lg outline-none p-3"
                  placeholder="Email"
                />
              </div>

              <div className="lg:h-40 mb-10 relative">
                <textarea
                  placeholder="Project"
                  className="w-full rounded-lg p-3 outline-none"
                  rows="3"
                ></textarea>
              </div>

              <div>
                <textarea
                  className="w-full outline-none rounded-lg mb-3 p-3"
                  rows="6"
                  placeholder="Message"
                ></textarea>
              </div>

              <div>
                <button className="boxShadow mb-10 p-3 rounded-lg bg-[#102438] text-white text-xl">
                  Send Message <i className="uil uil-message"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
