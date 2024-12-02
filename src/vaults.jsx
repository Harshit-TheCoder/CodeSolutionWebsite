import React, { useState, useEffect, useRef } from "react";
import Header from "./components/header";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-c.min.js";
import "prismjs/components/prism-clike.min.js";
import "prismjs/components/prism-cpp.min.js";
import "prismjs/components/prism-java.min.js";
import "prismjs/components/prism-python.min.js";


import Main from "./components/main";
import questions from "./components/question_description";

import "./css/programs.css";
import "./css/index.css";
import cLogo from './components/skills/C.png';
import cppLogo from './components/skills/CPP.png';
import javaLogo from './components/skills/Java.png';
import pythonLogo from './components/skills/Python.png';
import categories from "./components/categories.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Sidebar2 from "./components/Sidebar2.jsx";
import websitelogo from "./components/codingwebsitelogo.png";



function Vaults() {
  const logo = [cLogo, cppLogo, javaLogo, pythonLogo];
  const Programming_Language = ["C", "CPP", "Java", "Python"];
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [code, setCode] = useState(null);
  const [languageClass, setLanguageClass] = useState("");
  const codeRef = useRef();
  
  const [selectedFile, setSelectedFile] = useState("");


  const extractCodeForLanguage = (content, language) => {
    if (!content) {
      return "Content not found!";
    }
  
    const regex = new RegExp(
      `###\\s*${language}\\s*\\n([\\s\\S]*?)(?=\\n###|$)`,
      "g"
    );
  
    const match = regex.exec(content);
    if (match) {
      return match[1];
    }
  
    return `Code block not found for the selected language ${language}!`;
  };
  const handleClickLanguage = (heading, idx) => {
    let selectedCode = null;
    let langClass = "";
    

    if (idx === 0) {
      langClass = "language-c";
      selectedCode = extractCodeForLanguage(selectedFile, "C");
    } else if (idx === 1) {
      langClass = "language-cpp";
      selectedCode = extractCodeForLanguage(selectedFile, "CPP");
    } else if (idx === 2) {
      langClass = "language-java";
      selectedCode = extractCodeForLanguage(selectedFile, "Java");
    } else if (idx === 3) {
      langClass = "language-python";
      selectedCode = extractCodeForLanguage(selectedFile, "Python");
    }

    setCode(selectedCode);
    console.log(code);
    setLanguageClass(langClass);
  };
 
  const handleSelect = (filePath, heading) => {
    
    
    fetch(filePath)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then((content) => {
      console.log(content); // Logs the file content
      setSelectedFile(content);
    })
    .catch((error) => console.error('Error:', error));
    
    console.log(filePath);
    setSelectedQuestion({
      heading: heading,
      description: questions[heading],
    });
    setCode(null);
    setLanguageClass("");

  };


  

  function copyToClipboard() {
    const content = document.getElementById("code").innerText;
    navigator.clipboard
      .writeText(content)
      .then(() => {
        console.log("Copied to clipboard successfully");
      })
      .catch((error) => {
        console.log("Error while copying to clipboard");
      });
  }

  useEffect(() => {
    // Apply syntax highlighting after the code changes
    if (codeRef.current && code) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code]);

  return (
    <div>
      <Header />
      <Main>
        {/* <div className="container">
          <div className="row container-div"> */}
          <div style={{display:"flex", flexDirection:"row", }}>
            <div className="question-locator">
            <center>
                
                {/* <img src={websitelogo} alt="" height="250px" /> */}
                <h3 style={{ color: "#1560bd", fontFamily: "serif", fontWeight: "1000" }}>
                    Questions
                </h3>
            </center>
              <Sidebar2 categories={categories} onSelect={handleSelect}></Sidebar2></div>
            
            {/* <button className="btn btn-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop" style={{width:"100px"}}>
                Questions
            </button> */}

                <div  className="offcanvas offcanvas-start"  tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel" >
                <div className="offcanvas-header" style={{backgroundColor:"rgb(0,0,0,0.9)", color:"white", border:"1px solid magenta"}}>
                    <h5 className="offcanvas-title" id="staticBackdropLabel">Questions:</h5>
                    {/* data-bs-dismiss="offcanvas" */}
                    <button className="sidebar-button btn-close-white" type="button"  data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body" style={{backgroundColor:"rgb(0,0,0,0.9)"}}>
                  <div className="question-locator-bar col-12" >
                    <center><img src={websitelogo} alt="" height="250px" /></center>
                    <Sidebar categories={categories} onSelect={handleSelect}></Sidebar>
                    </div>
                    
                </div>
            </div>
            <div className="program-container">
              <nav className="navbar navbar-dark navbar-expand-lg bg-transparent z-index-4 ">
                <div className="container-fluid" style={{display:"flex", flexDirection:"row", gap:"3px"}}>
                    <button className="btn btn-success question-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop" style={{width:"100px", height:"40px"}}>
                        Questions
                    </button>
                    <button className="btn btn-info navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav1" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      Language
                    </button>
                    <center><h3 className="language-header" style={{color:"green"}}>Language:</h3></center>
                    <div className="collapse navbar-collapse" id="navbarNav1">
                      {/* <div  style={{display:"flex", flexDirection:"column", justifyContent:"space-evenly"}}> */}
                         
                        <ul className="navbar-nav list_items language-locator">
                          {Programming_Language.map((language, index) => (
                            <div className="question-locator-div" key={index}>
                              <li className="nav-item"
                                onClick={() => handleClickLanguage(selectedQuestion?.heading, index)}>
                                {/* {language} */}
                                {/* {<img src={`./components/skills/${language}.png`} alt="" />} */}
                                <img src={logo[index]} alt={`${language} logo`} />
                              </li>
                            </div>
                          ))}
                        </ul>
                      {/* </div> */}
                      
                    </div>
                </div>
              </nav>
              <div>
                <div className="program-question-heading">
                  {selectedQuestion && (
                    <>
                    {/* #ffed00 */}
                      <h1 style={{color: "green",fontFamily: "Poppins",fontWeight: "800",padding:"3px"}}>
                        {selectedQuestion.heading}:
                      </h1>
                      <p style={{ color: "#ffffff",fontStyle: "italic",fontWeight: "500"}}>
                        {selectedQuestion.description}
                      </p>
                    </>
                  )}
                </div>
                <div>
                  <div className="program-question-solution">
                    {selectedQuestion && (
                      <>
                      {/* #ffed00 */}
                        <h4 style={{color: "green",fontFamily: "Poppins",fontWeight: "800",}}>Solution:</h4>
                        {/* <button className="btn btn-primary" onClick={copyToClipboard} style={{height:"40px", width:"100px"}}>Copy</button> */}
                        <pre id="code">
                        <button className="btn btn-warning copy-button" onClick={copyToClipboard} style={{height:"40px", width:"100px"}}>
                            {/* <img src={copyimg} alt="" style={{ width:"35px", height:"35px"}} /> */}Copy
                        </button>
                          <code ref={codeRef} className={languageClass}>
                            {code}
                          </code>
                        </pre>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
 
        
      </Main>
      
    </div>
  );
}

export default Vaults;
