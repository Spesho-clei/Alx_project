import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../main";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Lumina LifeCare" className="logo-img" />
        </Link>
      </div>
      <div className="navLinks">
        <div className="links">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/appointment" className="link">
            Appointment
          </Link>
          <Link to="/about" className="link">
            About
          </Link>
        </div>
        <div className="buttons">
          {isAuthenticated ? (
            <button onClick={handleLogout} className="logoutBtn btn">
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="loginBtn btn">
                Login
              </Link>
              <Link to="/register" className="registerBtn btn">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;