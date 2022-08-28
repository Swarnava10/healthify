import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../Images/logo.png";
import "../Css/header.css";


export const Header = () => {
  return (
    <div className='Header'>
          {/* HEADER */}
          <nav className="navbar  bg_colorset fixed-top">
              <div className="container-fluid">
                <Link className="navbar-brand nav_title" to="/">
                  <img src={logo} alt="None" className='logo' />
                   <div className='nav_text'>
                   Healthify
                   </div>
                </Link>
                <button className="navbar-toggler burger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Healthify</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#home">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#services">Services</a>
                        <a className="nav-link" href="#aboutus">About Us</a>
                        <a className="nav-link" href="#contact">Contact Us</a>
                        <div className="centered">
                         <Link className="lgbtn green nav-link" to="/login">Login / Signup</Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
    </div>
  )
}
