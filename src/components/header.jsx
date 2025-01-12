import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import LoginForm from './loginform';
import SignUpForm from './signupform';
import "../css/header.css";
import FileUploadForm from './FileUploadForm';
const Header=()=>{
    const navigate = useNavigate();
    const auth = localStorage.getItem('user');
    const handleLogout=()=>{
      localStorage.clear();
      alert("Logout Successful");
      navigate("/");
    }
      return(
        <nav className={`navbar navbar-expand-lg navbar-dark bg-dark fixed-top z-index-1`} >

        <div className="modal fade" id="staticBackdrop1" data-bs-backdrop="false" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel1" aria-hidden="true">
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel1">Login</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <LoginForm />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                {/* <button type="button" className="btn btn-primary">Understood</button> */}
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="staticBackdrop3" data-bs-backdrop="false" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel3" aria-hidden="true">
          <div className="modal-dialog modal-dialog-scrollable modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel3">Upload your File</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                  <FileUploadForm />

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                {/* <button type="button" className="btn btn-primary">Understood</button> */}
              </div>
            </div>
          </div>
        </div>


        <div className="modal fade" id="staticBackdrop2" data-bs-backdrop="false" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel2" aria-hidden="true">
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel2">SignUp</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <SignUpForm />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                {/* <button type="button" className="btn btn-primary">Understood</button> */}
              </div>
            </div>
          </div>
        </div>


        <div className="container-fluid">
         
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav list_items flex flex-row justify-content-center">
            <li className="nav-item" id="1">
              <a className="nav-link list_items" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item" id="2">
              <a className="nav-link list_items" aria-current="page" href="/programs">Programs</a>
            </li>
          </ul>
          {
            auth?
            <ul className="navbar-nav list_items flex flex-row justify-content-center">
              <li className="nav-item" id="6">
                <a className="nav-link list_items" aria-current="page" href="/vaults">Vault</a>
              </li>
              <li className="nav-item" id="6">
                <a className="nav-link list_items" aria-current="page" href="/dashboard">Dashboard</a>
              </li>
              <li className="nav-item" id="7">
                <a className="nav-link list_items" aria-current="page" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop3">Upload</a>
              </li>
              <li className="nav-item" id="5">
                <Link to="/" onClick={handleLogout} className='btn btn-primary'> Logout</Link>
              </li>
            </ul>
            :
            <ul className="navbar-nav list_items flex flex-row justify-content-center">
              {/* <li className="nav-item" id="3">
                <a className="nav-link" href="#" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">Register</a>
              </li>
              <li className="nav-item" id="4">
                <a className="nav-link" href="#" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">Login</a>
              </li> */}
              <li className="nav-item" id="3">
                <a className="nav-link" href="/signup">Register</a>
              </li>
              <li className="nav-item" id="4">
                <a className="nav-link" href="/login">Login</a>
              </li>
            </ul>
          }
          
          </div>
        </div>


        




      </nav>
    );
};
export default Header;
