import React from "react";
import Header  from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import logo from "./components/codingwebsitelogo.png";
import GIF from "./components/codinggif.gif";
import "./css/home.css";
import "./css/index.css";
function Home() {
    
  
    return (

        <body >
          <Header />
          <Main>
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12" style={{display:"flex", flexDirection:"column", gap:"3px", alignItems:"center", justifyContent:"center"}}>
                {/* style={{display:"flex", flexDirection:"column", gap:"3px"}} */}
                  <div >
                      <center>
                        <img className="website_logo" src={logo} alt="coding website logo" height="500px"/> 
                      </center> 
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <center>
                  <img className="coder_image" alt="Coder GIF" height="350px" width="350px" src={GIF} />
                  </center>
                </div>
              </div>
            </div>
            {/* <div style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly", gap:"3px"}}>
                
                <div>
                  
                  
                </div>
            </div> */}
          </Main>
          {/* <Footer /> */}
        </body>
        
   

      
    );
  }
export default Home;
