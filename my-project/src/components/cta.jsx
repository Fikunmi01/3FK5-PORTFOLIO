import React from "react";

export const Cta= ()=> {
    return (
        <div className="w-full flex justify-center px-3 py-10 lg:py-20 lg:px-24 font-kalam">
            <div className=" bg-[#f3f5f7] flex items-center px-3 py-6 lg:px-10 rounded-2xl">
                <div>
                    <h1 className="font-bold text-xl lg:text-4xl text-[#102438] leading-relaxed">You have a new project?</h1>
                    <p className="lg:text-xl text-[#102438] font-medium lg:w-3/4 mb-5">Contact me and get 30% on your new project</p>
                    <button className="boxShadow px-3 rounded-xl bg-[#102438] flex gap-2 text-white text-sm py-2 lg:text-xl lg:py-4">
                        Contact Me
                        <i className="uil uil-navigator lg:text-xl"></i>
                    </button>
                </div>
                <div>
                    <img src="./src/assets/Humaans.png" alt="" />
                </div>
            </div>
        </div>
    )
}