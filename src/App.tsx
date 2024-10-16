import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeComponent from "./components/home/HomeComponent";
import Portfolio from "./components/portfolio";
import ContactUs from "./components/contact-us/ContactUs";
import { useEffect, useRef, useState } from "react";
import OurTechnology from "./components/our-tech/OurTechnology";
import OurTeams from "./components/our-teams/OurTeams";
import WhatWeDo from "./components/what-we-do";
import OurServices from "./components/our-service";
import WhoWheAre from "./components/who-whe-are";
import LoadingScreen from "./components/loading-screen";
import FloatingButton from "./components/floating-button/floating-button";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutUsRef = useRef<HTMLDivElement | null>(null);
  const worksRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <LoadingScreen />
  ) : (
    <div>
      <Header
        homeRef={homeRef}
        aboutUsRef={aboutUsRef}
        worksRef={worksRef}
        contactRef={contactRef}
      />
      <HomeComponent />
      <div ref={aboutUsRef}>
        <WhoWheAre />
        <WhatWeDo />
        <OurServices />
        <OurTechnology />
        <OurTeams />
      </div>
      <div onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <FloatingButton homeRef={homeRef} />
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
