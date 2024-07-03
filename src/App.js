import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import CarRent from "./pages/CarRent/CarRent";
import CarRentDetails from "./pages/CarRentDetails/CarRentDetails";

function App() {
  return (
    <div className="App">
      <Navbar showLogo={true} showSearchBar={true} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carRent" element={<CarRent />} />
        <Route path="/carRent/:carId" element={<CarRentDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
