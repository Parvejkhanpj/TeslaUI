import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import logo from "../assets/tesla.svg";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import Slider from "./Component/Slider";
import YModule from "./Products/YModule";
import SModule from "./Products/SModule";
import Module3 from "./Products/Module3";
import SolarPanel from "./Products/SolarPanel";
import Solarroof from "./Products/Solarroof";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <BrowserRouter>
      <div className="App relative">
        <header className="hidden lg:block sticky top-0">
          <Navbar />
        </header>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/YModule" exact element={<YModule />} />
          <Route path="/SModule" exact element={<SModule />} />
          <Route path="/Module3" exact element={<Module3 />} />
          <Route path="/SolarPanel" exact element={<SolarPanel />} />
          <Route path="/Solarroof" exact element={<Solarroof />} />
        </Routes>
        <header className="App-header lg:hidden flex items-center justify-between p-1 fixed top-0 left-0 right-0 bg-slate-100/60">
          <Link to="/">
            <img src={logo} className="App-logo w-[180px] p-2 " alt="logo" />
          </Link>
          {showMenu ? (
            <Slider showMenu={setShowMenu} />
          ) : (
            <button
              onClick={() => setShowMenu((value) => !value)}
              className="m-3 bg-slate-50/50 ring-2 ring-slate-200 text-black px-6 py-1 rounded-full text-[18px] "
            >
              Menu
            </button>
          )}
        </header>
        {/* moblie Menu  */}
      </div>
    </BrowserRouter>
  );
}

export default App;
