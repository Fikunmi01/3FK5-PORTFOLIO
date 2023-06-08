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

function App() {
  return (
      <div className="min-h-full relative">
        <Navbar />
        <Hero />
        <Skills />
        <Qualifications />
        <Services />
        <Portfolio />
        <Cta />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
  );
}

export default App;
