import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./navbar.css";

// import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

 
  return (
<>
    {/* <IconContext.Provider value={{ color: "#fff" }}> */}
      <nav className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            {/* <GiRocketThruster className="navbar-icon" /> */}
            Tickets
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>


            <li className="nav-item">
              <NavLink
                to="/sell"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                Sell
              </NavLink>
            </li>

            
  
     
      </ul>
  </div>
</nav>
</>
)};

export default Navbar;
