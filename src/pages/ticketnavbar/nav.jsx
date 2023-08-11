import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./nav.css";

// import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
const Nav = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

 
  return (
<>
    {/* <IconContext.Provider value={{ color: "#fff" }}> */}
      <nav className="nav">
        <div className="nav-container container">
          <Link to="/" className="logo" onClick={closeMobileMenu}>
            {/* <GiRocketThruster className="navbar-icon" /> */}
            Tickets
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            
          </div>
          <ul className={click ? "nav-menu active" : "menu"}>
            <li className="link">
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


            <li className="link">
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

            <li className="link">
              <NavLink
                to="/support"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                Support
              </NavLink>
            </li>
  
  
     
      </ul>
  </div>
</nav>
</>
)};

export default Nav;
