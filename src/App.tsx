import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeComponent from "./components/home/HomeComponent";
// import MaintenancePage from "./components/MaintenancePage";

function App() {
  return (
    <div>
      <Header />
      <HomeComponent />
      <Footer />
    </div>
  );
}

export default App;
