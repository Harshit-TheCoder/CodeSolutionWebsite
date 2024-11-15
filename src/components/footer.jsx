import React from 'react';
function Footer() {
  return (
    <footer className="navbar-dark bg-dark py-4 fixed-bottom z-index-1">
      <div className="container">
        <div className="row">
         <div className='col-md-1'><img src="image.png" alt="Instagram logo" width="50px" style={{borderRadius:"40%"}} /></div>
          <div className="col-md-5 footer_text" style={{ justifyContent:"center", alignItems:"content"}}>
            <p>&copy; 2024 Portfolio Website</p>
          </div>
          <div className="col-md-3 footer_text">
            
          </div>
          <div className='col-md-1'><a href="https://www.instagram.com/harlalkaharshit/"><img src="insta_icon.png" alt="Instagram logo" width="30px" /></a></div>
          <div className='col-md-1'><a href="https://www.facebook.com/harshit.harlalka.1/"><img src="facebook_icon.png" alt="Instagram logo" width="30px" /></a></div>
          <div className='col-md-1'><a href="https://www.linkedin.com/in/harshit-harlalka-26b200233/"><img src="linkedin_logo.png" alt="Instagram logo" width="30px" /></a></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
