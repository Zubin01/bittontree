import './App.css';
import NavBarSection from "./components/NavBarSection";
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Banner />
        <NavBarSection />
        <AboutUs/>
        <Footer />
    </div>
  );
}

export default App;
