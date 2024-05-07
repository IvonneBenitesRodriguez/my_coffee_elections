import "./styles/Navbar.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Recipes from "./pages/Recipes";
import Contact from "./pages/Contact";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="bg-pink-950 text-white justify-evenly hover:text-yellow-400  p-4 text-2xl" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />

      {/* <div className="flex justify-center">
        <img src={logo} alt="Logo" className="mt-4 w-36" />
      </div>
      <div className="font-bold mt-11">
        <Story />
      </div>
      <div className="">
        <Newsletter />
      </div>
      <div className="">
        <Recipes />
  </div> */}
    </div>
  );
}

export default App;
