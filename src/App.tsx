import "./App.css";
import AboutUs from "./components/about-us/AboutUs";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeComponent from "./components/home/HomeComponent";
import Portfolio from "./components/portfolio";
import ContactUs from "./components/contact-us/ContactUs";
import { useRef } from "react";
import OurTechnology from "./components/our-tech/OurTechnology";
import OurTeams from "./components/our-teams/OurTeams";
import WhatWeDo from "./components/what-we-do";

function App() {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutUsRef = useRef<HTMLDivElement | null>(null);
  const worksRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  return (
    <div>
      <Header
        homeRef={homeRef}
        aboutUsRef={aboutUsRef}
        worksRef={worksRef}
        contactRef={contactRef}
      />
      <HomeComponent />
      <div ref={aboutUsRef}>
        <AboutUs />
        <WhatWeDo />
        <OurTechnology />
        <OurTeams />
      </div>
      <div ref={worksRef}>
        <Portfolio />
      </div>
      <div ref={contactRef}>
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}

export default App;
