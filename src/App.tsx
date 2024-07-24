import "./App.css";
import AboutUs from "./components/about-us/AboutUs";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeComponent from "./components/home/HomeComponent";
import Portfolio from "./components/portfolio";

function App() {
  return (
    <div>
      <Header />
      <HomeComponent />
      <AboutUs />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
