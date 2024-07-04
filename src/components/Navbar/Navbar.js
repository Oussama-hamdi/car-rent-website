import { FaBars, FaHeart, FaBell } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import SearchBar from "../SearchBar/SearchBar";
import "./Navbar.css";
import ProfilePicture from "../../assets/profile-man.png";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

//TODO: Add the logo in the small screens for the RentCar page
function Navbar({ showLogo }) {
  const [showSearchBar, setShowSearchBar] = useState(false);

  useEffect(() => {
    // Check screen size on component mount
    const handleResize = () => {
      setShowSearchBar(window.innerWidth <= 767);
    };

    handleResize(); // Check initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-menu">
          <div className="logo">
            {showLogo ? (
              <NavLink to={"/"}>
                <h1>Morent</h1>
              </NavLink>
            ) : (
              <FaBars />
            )}
            {!showSearchBar && <SearchBar />}
          </div>
          <div className="navbar-profile-wrapper">
            <div className="navbar-icons">
              <div className="icon">
                <NavLink to={"/dashboard"}>
                  <FaHeart />
                </NavLink>
              </div>
              <div className="icon">
                <NavLink to={"/dashboard"}>
                  <FaBell />
                </NavLink>
              </div>
              <div className="icon">
                <NavLink to={"/dashboard"}>
                  <IoMdSettings />
                </NavLink>
              </div>
            </div>
            <NavLink to={"/dashboard"}>
              <img src={ProfilePicture} alt="Profile" />
            </NavLink>
          </div>
        </div>
        {showSearchBar && <SearchBar />}
      </div>
    </nav>
  );
}

export default Navbar;
