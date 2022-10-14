import React from "react";
import { Link } from "react-router-dom";

const Slider = ({ showMenu }) => {
  return (
    <nav
      className={`relative lg:hidden w-[100vh] h-[60vh] bg-slate-200/80 z-10 py-10`}
    >
      <span
        className="absolute top-2 right-4 cursor-pointer"
        onClick={() => showMenu((value) => !value)}
      >
        X
      </span>

      <Link to="/SModule">
        <h5 className="text-[20px] text-center text-black py-2 mx-10">
          Model S
        </h5>
      </Link>

      <Link to="/Module3">
        <h5 className="text-[20px] text-center text-black py-2 mx-10">
          Model 3
        </h5>
      </Link>
      <h5 className="text-[20px] text-center text-black py-2 mx-10">Model X</h5>
      <Link to="/YModule">
        <h5 className="text-[20px] text-center text-black py-2 mx-10">
          Model Y
        </h5>
      </Link>

      <Link to="/SolarPanel">
        <h5 className="text-[20px] text-center text-black py-2 mx-10">
          Solar Panels
        </h5>
      </Link>
    </nav>
  );
};

export default Slider;
