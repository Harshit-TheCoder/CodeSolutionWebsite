import React from "react";
import Header  from "./components/header";
// import Footer from "./components/footer";
import Main from "./components/main";
import logo from "./components/websitelogo.png";
import GIF from "./components/codinggif.gif";
import "./css/home.css";
import "./css/index.css";
function Home() {
  
    return (

        <body >
          <Header />
          <Main>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"space-evenly", gap:"3px"}}>
                  <div >
                    <center>
                      <img className="website_logo" src={logo} alt="coding website logo"/> 
                    </center> 
                  </div>
                  <div class="typewriter-container">
                     <span class="typewriter">
                        <center><h3>A TREASURE TROVE OF ALGORITHMS AND CODING KNOWLEDGE</h3></center>
                      </span>
                      {/* <span class="typewriter">
                        <center><h3>Your Personal DSA Repository & Coding Companion.</h3></center>
                      </span> 
                      <span class="typewriter">
                        <center><h3>Code Smarter, Not Harder-Store Your DSA Journey Here.</h3></center>
                      </span>
                      <span class="typewriter">
                        <center><h3>Store, Solve, and Succeed with AlgoVault.</h3></center>
                      </span>
                      <span class="typewriter">
                        <center><h3>Empowering Your Coding Journey, Program by Program.</h3></center>
                      </span> */}
                    

                  </div>
                  <div> 
                  
                    <center>
                    <img className="coder_image" alt="Coder GIF"  src={GIF} />
                    </center>
                  </div>
              
            </div>
          </Main>
          {/* <Footer /> */}
        </body>
        
   

      
    );
  }
export default Home;
