import React from "react";
import Header  from "./components/header";
// import Footer from "./components/footer";
import Main from "./components/main";
import logo from "./components/websitelogo.png";
import GIF from "./components/codinggif.gif";
import icon from "./components/linkedinicon.png";
import "./css/home.css";
import "./css/index.css";
function Home() {
  
    return (

        <div >
          <Header />
          <Main>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"space-evenly", gap:"3px"}}>
                  <div >
                    <center>
                      <img className="website_logo" src={logo} alt="coding website logo"/> 
                    </center> 
                  </div>
                  <div className="typewriter-container">
                     <span className="typewriter">
                        <center><h3 className="typewriter-text">A TREASURE TROVE OF ALGORITHMS AND CODING KNOWLEDGE</h3></center>
                      </span>
              
                    

                  </div>
                  <center><h5 style={{color:"white", fontFamily:"serif", marginTop:"100px"}}>How it Works?</h5></center>
                  <div className="guide-container">
                    <div className="guide" style={{backgroundColor:"rgba(21, 0, 64, 0.7)"}}>
                      <h5>Create Account</h5>
                        <p>
                        AlgoVault allows you to upload your
                        programs just by creating an account.
                         your name, email, password and
                        generate a username.
                        </p>
                    </div>
                    <div className="guide" style={{backgroundColor:"rgba(21, 0, 64, 0.7)"}}>
                        <h5>Upload Programs</h5>
                        <p>
                         Upload programs in pdf format.
                         Programs can be Java/Python/C/Cpp 
                         language. U can upload your points
                         if required in notes tab.
                        </p>
                    </div>
                    <div className="guide" style={{backgroundColor:"rgba(21, 0, 64, 0.7)"}}>
                        <h5>An AI-Powered Chatbot</h5>
                        <p>
                          U can take help of an AI powered Chatbot
                          by uploading the programs and getting detailed
                          explanations about the code.
                        </p>
                    </div>
                  </div>
                  <div className="info-coder-img-div"> 
                    <div className="info-div">
                      <h4>About:</h4>
                      <h5>Name: <span>Harshit Harlalka</span></h5>
                      <h5>Institute: <span>SRM Institute of Science and Technology</span></h5>
                      <h5>Role: <span>Web Developer</span></h5>
                      <h5>Links:</h5>
                      <ul>
                        <li className="list-1"><a href="https://portfolio-website-nine-red.vercel.app/"><h5>Portfolio</h5></a> </li>
                        <li className="list-2">
                          <a href="https://www.linkedin.com/in/harshit-harlalka-26b200233/">
                          
                          <h5><img src={icon} alt="" style={{ width:"20px", height:"20px" ,marginRight:"3px"}}/>Linked In</h5>
                          </a>
                        </li>
                      </ul>
                      
                    </div>
                    <div className="coder-img-div">
                      <center>
                      <img className="coder_image" alt="Coder GIF"  src={GIF} />
                      </center>
                    </div>
                    
                  </div>
              
            </div>
          </Main>
          {/* <Footer /> */}
        </div>
        
   

      
    );
  }
export default Home;
