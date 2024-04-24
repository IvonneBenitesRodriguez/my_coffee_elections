import "./styles/main.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import logo from "./assets/logo.png";
import Story from "./components/Story";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="bg-pink-950 text-white justify-evenly hover:text-yellow-400  p-4 text-2xl">
        <Navbar />
      </div>
      <div className="text-center text-white bg-pink-400 pt-4">
        <Header />
        <div className="flex justify-center">
          <img src={logo} alt="Logo" className="mt-4 w-36" />
        </div>
        <div className="font-bold mt-11">
          <Story />
        </div>
        <div className="">
          <Newsletter />
        </div>
        <div className="bg-white flex justify-center pb-12">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
