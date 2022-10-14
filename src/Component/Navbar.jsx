import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/tesla.svg";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-3 mx-2 mb-[-58px]  ">
      <div className="left w-[25%]">
        <Link to="/">
          <img src={logo} className="App-logo w-[180px] p-2 " alt="logo" />
        </Link>
      </div>
      <div className="center  w-[55%] ">
        <ul className="desktop-center-nav flex justify-around float-center">
          <li>Modal X</li>
          <Link to="/YModule">
            <li>Modal Y</li>
          </Link>
          <Link to="/SModule">
            <li>Modal S</li>
          </Link>
          <Link to="/Module3">
            <li>Modal 3</li>
          </Link>

          <Link to="/SolarPanel">
            <li>Solar Panels</li>
          </Link>
        </ul>
      </div>
      <div className="right w-[25%]">
        <ul className=" desktop-right-nav flex  justify-center">
          <li>Shop </li>
          <li>Account</li>
          <li>Menu</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
