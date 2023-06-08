import React from "react";

export const Skills = () => {
  const cardArray = [
    { imgSrc: "/assets/react.svg", title: "ReactJS", id: 1 },
    { imgSrc: "/assets/tailwindLogo.png", title: "TailwindCSS", id: 2 },
    { imgSrc: "/assets/githubLogo.png", title: "Github", id: 3 },
    { imgSrc: "/assets/typescriptLogo.png", title: "Typescript", id: 4 },
    { imgSrc: "/assets/reduxLogo.png", title: "Redux", id: 5 },
    { imgSrc: "/assets/angularLogo.png", title: "Angular", id: 6 },
  ];
  return (
    <>
      <div className="bg-[#e3f0fc] lg:py-20 font-kalam text-[[#102438]] justify-center flex relative flex-col p-3 lg:px-24">
        <span className="text-center">
          <h2 className="font-bold text-3xl lg:text-4xl text-[#000000] mt-3">Skills</h2>
          <p className="text-[rgba(0,0,0,.7)] text-xl text-subtitle">
            My technical level
          </p>
        </span>

        <div>
          <div>
            <p className="text-2xl mt-10">Technologies Used:</p>
            <ul className="lg:grid grid grid-cols-2 lg:grid-cols-3 gap-y-5 pb-5 lg:gap-y-10 mt-5 lg:mt-10">
              {cardArray.map((item) => (
                <div className="m-auto w-32" key={item.id}>
                  <li className="bg-[#f3f5f7] lg:px-8 text-[#102438] gap-y-4 rounded-xl lg:text-xl flex justify-center items-center flex-col h-36">
                    <img
                      className="lg:w-20 w-10 bg-[#f3f5f7]"
                      src={item.imgSrc}
                      alt="skills png"
                    />
                    {item.title}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
