// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import { Parallax } from "swiper";
import "./App.css";
import Contact from "./components/contact";
import { Cta } from "./components/cta";
import Footer from "./components/footer";
import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { Portfolio } from "./components/portfolio";
import { Qualifications } from "./components/qualifications";
import { Services } from "./components/services";
import { Skills } from "./components/skills";
import Testimonial from "./components/testimonial";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

function App() {
  return (
    <div className="min-h-full relative">
      <Navbar />

      <Element name="section1" className="section">
        <Hero />
      </Element>

      <Element name="section2" className="section">
        <Skills />
      </Element>

      {/* <Qualifications /> */}

      <Element name="section3" className="section">
        <Services />
      </Element>

      <Element name="section4" className="section">
        <Portfolio />
      </Element>

      <Element name="section5" className="section">
        <Cta />
      </Element>

      <Element name="section6" className="section">
        <Testimonial />
      </Element>

      <Element name="section7" className="section">
        <Contact />
      </Element>

      <Footer />
    </div>
  );
}

export default App;
