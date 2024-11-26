import React from 'react';
import "../css/header.css";
const Header=()=>{
  
      return(
        <nav className={`navbar navbar-expand-lg navbar-dark bg-dark fixed-top z-index-1`} >
        <div className="container-fluid">
         
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav list_items" style={{ color:"green" }}>
            <li className="nav-item" id="1">
              <a className="nav-link list_items" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item" id="2">
              <a className="nav-link list_items" aria-current="page" href="/programs">Programs</a>
            </li>
            <li className="nav-item" id="3">
              <a className="nav-link" href="/signup">Sign Up</a>
            </li>
            <li className="nav-item" id="4">
              <a className="nav-link" href="/login">Login</a>
            </li>
            <li className="nav-item" id="5">
              <button type="button" className="btn btn-primary" id="generateBtn2">Logout</button>
            </li>
            
          </ul>
          </div>
        </div>
      </nav>
    );
};

export default Header;
