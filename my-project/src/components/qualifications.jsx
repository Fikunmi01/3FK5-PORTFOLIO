import React from "react";
import { QualificationStepper } from "./qualificationsStepper";

export const Qualifications = () => {
  const [displayWork, setDisplayWork] = React.useState(true);

  const handleClick = (isWork) => {
    setDisplayWork(isWork);
  };

  const educationArray = [
    {
      id: 1,
      title: "Computer Engineer",
      details: "Peru - University",
      years: "2009 - 2014",
      imgSrc: "/assets/calendar-alt.svg",
      title2: "",
      details2: "",
      years2: "",
      imgSrc2: "",
    },
    {
      id: 2,
      title: "",
      details: "",
      years: "",
      imgSrc: "",
      title2: "Web Design",
      details2: "Spain - Institute",
      years2: "2014-2017",
      imgSrc2: "/assets/calendar-alt.svg",
    },
    {
      id: 3,
      title: "Web Development",
      details: "Peru - Institute",
      years: "2017 - 2019",
      imgSrc: "/assets/calendar-alt.svg",
      title2: "",
      details2: "",
      years2: "",
      imgSrc2: "",
    },
    {
      id: 4,
      title: "",
      details: "",
      years: "",
      imgSrc: "",
      title2: "Master in UI/IX",
      details2: "Peru - Institute",
      years2: "2019 - 2021",
      imgSrc2: "/assets/calendar-alt.svg",
    },
  ];

  const workArray = [
    {
      id: 1,
      title: "Web Developer Intern",
      details: "Meta Inc.",
      years: "2009 - 2011",
      imgSrc: "/assets/calendar-alt.svg",
      title2: "",
      details2: "",
      years2: "",
      imgSrc2: "",
    },
    {
      id: 2,
      title: "",
      details: "",
      years: "",
      imgSrc: "",
      title2: "Frontend Developer",
      details2: "Handrai Llc",
      years2: "2011 - 2016",
      imgSrc2: "/assets/calendar-alt.svg",
    },
    {
      id: 3,
      title: "Freelance Developer",
      details: "Fiverr",
      years: "2016 - 2020",
      imgSrc: "/assets/calendar-alt.svg",
      title2: "",
      details2: "",
      years2: "",
      imgSrc2: "",
    },
    {
      id: 4,
      title: "",
      details: "",
      years: "",
      imgSrc: "",
      title2: "Frontend Developer",
      details2: "Abc Inc.",
      years2: "2019 - Present",
      imgSrc2: "/assets/calendar-alt.svg",
    },
  ];
  return (
    <>
      {/* <QualificationStepper/> */}
      <div className="font-kalam py-10 lg:py-20 px-2">
        <span className="flex flex-col justify-center text-center">
          <h2 className="text-4xl font-bold text-[#000000]">Qualification</h2>
          <p className="text-[rgba(0,0,0,.7)] text-xl">My personal journery</p>
        </span>

        <div className="flex justify-between m-auto lg:px-96 pt-5 items-center">
          <div
            onClick={() => handleClick(true)}
            className="flex flex-row gap-2 cursor-pointer"
          >
            <i className="uil uil-graduation-cap text-2xl lg:text-3xl "></i>
            <h1 className={`text-2xl ${displayWork ? 'active' : 'notActive'} lg:text-3xl text-[#102438] font-bold`}>
              Education
            </h1>
          </div>
          <div
            onClick={() => handleClick(false)}
            className="flex flex-row gap-2 cursor-pointer "
          >
            <i className="uil uil-briefcase-alt text-2xl lg:text-3xl"></i>
            <h1 className={`text-[rgba(0,0,0,.7)] ${displayWork ? 'notActive' : 'active'} font-bold text-2xl lg:text-3xl `}>
              Work
            </h1>
          </div>
        </div>

        <div className="top-5 relative">
          {educationArray.map((item) => (
            <div
              key={item.id}
              className={`flex-row flex ${
                !displayWork ? "hidden" : "flex"
              } justify-around mb-10 right-2 gap-28 lg:px-80 relative`}
            >
              <span className="flex flex-col">
                <h3 className="lg:text-xl font-semibold text-[#010101]">
                  {item.title}
                </h3>
                <p className="text-base">{item.details}</p>
                <p className="flex gap-2 items-center">
                  <img className="w-5" src={item.imgSrc} alt="" />
                  {item.years}
                </p>
              </span>

              <span className="flex flex-col">
                <h3 className="lg:text-xl font-semibold text-[#000000]">
                  {item.title2}
                </h3>
                <p className="text-base">{item.details2}</p>
                <p className="flex items-center gap-2">
                  <img className="w-5" src={item.imgSrc2} alt="" />
                  {item.years2}
                </p>
              </span>
            </div>
          ))}
          <QualificationStepper />

          {workArray.map((item) => (
            <div
              key={item.id}
              className={`flex-row flex ${
                displayWork ? "hidden" : "flex"
              }  justify-around mb-10 right-2 gap-28 lg:px-80 relative`}
            >
              <span className="flex flex-col">
                <h3 className="lg:text-xl font-semibold text-[#000000]">
                  {item.title}
                </h3>
                <p className="text-base">{item.details}</p>
                <p className="flex gap-2 items-center">
                  <img className="w-5" src={item.imgSrc} alt="" />
                  {item.years}
                </p>
              </span>

              <span className="flex flex-col">
                <h3 className="lg:text-xl font-semibold text-[#000000]">
                  {item.title2}
                </h3>
                <p className="text-base">{item.details2}</p>
                <p className="flex items-center gap-2">
                  <img className="w-5" src={item.imgSrc2} alt="" />
                  {item.years2}
                </p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
