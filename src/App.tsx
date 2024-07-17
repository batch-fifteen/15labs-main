import "./App.css";
import AboutUs from "./components/about-us/AboutUs";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeComponent from "./components/home/HomeComponent";

function App() {
  return (
    <div>
      <Header />
      <AboutUs />
      <HomeComponent />
      <Footer />
    </div>
  );
}

export default App;
