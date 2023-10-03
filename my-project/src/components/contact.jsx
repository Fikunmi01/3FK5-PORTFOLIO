import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xbjvpazg");
  if (state.succeeded) {
    return (
      <p className="text-center">
        Thanks for contacting me, I'll get back to you shortly!
      </p>
    );
  }
  return (
    <>
      <div className="lg:py-20 lg:px-24 bg-[#e3f0fc] font-kalam">
        <div className="text-center">
          <h2 className="text-4xl font-bold pt-5">Contact Me</h2>
          <p className="text-xl text-[rgba(0,0,0,.7)]">Get in touch</p>
        </div>

        <div className="lg:flex px-3 relative justify-center lg:gap-16">
          <div>
            <div className="mb-5 flex items-center gap-3 relative">
              <div>
                <i className="uil text-xl uil-phone"></i>
              </div>

              <div>
                <h3 className="text-lg lg:text-xl text-[#102438] font-bold">
                  Call Me
                </h3>
                <p className="text-lg lg:text-xl text-[#9FA1AD]">
                  2348075332918
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-5 lg:mb-28">
              <div>
                <i className="uil uil-envelope text-xl"></i>
              </div>

              <div>
                <h3 className="text-lg lg:text-xl font-bold text-[#102438]">
                  Email
                </h3>
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
                <h3 className="font-bold text-[#102438] text-lg lg:text-xl">
                  Location
                </h3>
                <p className="text-lg lg:text-xl text-[#9FA1AD]">Akure</p>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit}>
              <div className="mb-10 flex flex-col lg:flex lg:flex-row gap-5 lg:gap-6 lg:items-center">
                <input
                  type="text"
                  className="p-3 rounded-lg lg:w-72 outline-none"
                  placeholder="Name"
                  id="name"
                  name="name"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="lg:w-72 rounded-lg outline-none p-3"
                  placeholder="Email"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div className="lg:h-40 mb-10 relative">
                <textarea
                  placeholder="Project"
                  className="w-full rounded-lg p-3 outline-none"
                  rows="3"
                  id="project"
                  name="project"
                ></textarea>
                <ValidationError
                  prefix="Project"
                  field="project"
                  errors={state.errors}
                />
              </div>

              <div>
                <textarea
                  className="w-full outline-none rounded-lg mb-3 p-3"
                  rows="6"
                  placeholder="Message"
                  id="message"
                  name="message"
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="boxShadow mb-10 p-3 rounded-lg bg-[#102438] text-white text-xl"
                >
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
