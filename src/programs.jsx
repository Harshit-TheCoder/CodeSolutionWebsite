import React, { useState, useEffect, useRef } from "react";
import Header from "./components/header";
// import Footer from "./components/footer";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-c.min.js";
import "prismjs/components/prism-clike.min.js";
import "prismjs/components/prism-cpp.min.js";
import "prismjs/components/prism-java.min.js";
import "prismjs/components/prism-python.min.js";
import Main from "./components/main";
import headings from "./components/questions";
import questions from "./components/question_description";
import c from "./components/C_solutions";
import cpp from "./components/Cpp_solutions";
import java from "./components/Java_solutions";
import python from "./components/Python_solutions";
import "./css/programs.css";
import "./css/index.css";
import cLogo from './components/skills/C.png';
import cppLogo from './components/skills/CPP.png';
import javaLogo from './components/skills/Java.png';
import pythonLogo from './components/skills/Python.png';


function Programs() {
  const logo = [cLogo, cppLogo, javaLogo, pythonLogo];
  const Programming_Language = ["C", "CPP", "Java", "Python"];
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [code, setCode] = useState(null);
  const [languageClass, setLanguageClass] = useState(""); // To store the dynamic class for Prism.js
  const codeRef = useRef();

  const handleClickLanguage = (heading, idx) => {
    let selectedCode = null;
    let langClass = "";

    if (idx === 0) {
      selectedCode = c[heading];
      langClass = "language-c";
    } else if (idx === 1) {
      selectedCode = cpp[heading];
      langClass = "language-cpp";
    } else if (idx === 2) {
      selectedCode = java[heading];
      langClass = "language-java";
    } else if (idx === 3) {
      selectedCode = python[heading];
      langClass = "language-python";
    }

    setCode(selectedCode);
    setLanguageClass(langClass);
  };

  const handleClick = (heading) => {
    setSelectedQuestion({
      heading: heading,
      description: questions[heading],
    });
    setCode(null);
    setLanguageClass(""); // Reset language class when no language is selected
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
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code]);

  return (
    <body>
      <Header />
      <Main>
        {/* <div className="container">
          <div className="row container-div"> */}
          <div style={{display:"flex", flexDirection:"row", }}>
            <div className="question-locator" style={{width:"15%"}}>
              <center>
                <h3 style={{ color: "#1560bd", fontFamily: "serif", fontWeight: "1000" }}>
                  Questions
                </h3>
              </center>
              <ol>
                {headings.map((heading, index) => (
                  <div className="question-locator-div" key={index}>
                    <li onClick={() => handleClick(heading)}>{heading}</li>
                  </div>
                ))}
              </ol>
            </div>
            {/* <button class="btn btn-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop" style={{width:"100px"}}>
                Questions
            </button> */}

                <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="staticBackdropLabel">Offcanvas</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div className="col-12 question-locator-bar">
                        <center>
                            <h3 style={{ color: "#1560bd", fontFamily: "serif", fontWeight: "1000" }}>
                            Questions
                            </h3>
                        </center>
                        <ol>
                            {headings.map((heading, index) => (
                            <div className="question-locator-div-bar" key={index}>
                                <li onClick={() => handleClick(heading)}>{heading}</li>
                            </div>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
            <div className="program-container" style={{width:"85%"}}>
              <nav className="navbar navbar-dark navbar-expand-lg bg-transparent z-index-4 ">
                <div className="container-fluid" style={{display:"flex", flexDirection:"row", gap:"3px"}}>
                    <button class="btn btn-success question-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop" style={{width:"100px", height:"40px"}}>
                        Questions
                    </button>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav1" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav1">
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
                        <pre style={{overflowY: "scroll",height: "550px",fontFamily: "consolas",padding: "3px",margin: "3px",}}id="code">
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
          {/* </div> */}
        {/* </div> */}
      </Main>
    </body>
  );
}

export default Programs;
