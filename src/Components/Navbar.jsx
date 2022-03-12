import React from 'react';
import logo from '../images/logo.png'

function Navbar() {
  return (
    <nav className = "navbar navbar-expand-lg navbar-fixed-top navbar-dark bg-dark" >
      <div className="container py-2">
        <a href="/" className="navbar-brand">
          <img src={logo} className="img-fluid" alt="" />
        </a>
        <button className="navbar-toggler" data-toggle="collapse" type="button" data-target="#mainNavigation" area-control="mainNavigation" area-expanded="false">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNavigation">
          <ul className="navbar-nav ml-auto justify-content-between w-75">
            <li className="nav-item">
              <a href="/" className="nav-link "> All Bots</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link active"> How It Works</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link "> Testimonials</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link "> Drop Calender</a>
            </li>
            <li className="nav-item">
              <a href="/" className="btn btn-primary active"> Go To Dashboard</a>
            </li>
          </ul>
        </div>
      </div>
      </nav >  
  )
}

export default Navbar;

