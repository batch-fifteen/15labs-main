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
