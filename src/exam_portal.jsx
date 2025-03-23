

import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./components/header";
import Main from "./components/main";
import { io } from "socket.io-client";
import { Editor } from "@monaco-editor/react";
import CodeMirror from "@uiw/react-codemirror";
import { cpp } from "@codemirror/lang-cpp";
import { oneDark } from "@codemirror/theme-one-dark";



// const socket = io("http://localhost:5000");

const ExamPortal = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const [warnings, setWarnings] = useState(0);
  const questions = location.state?.questions || [];
  const examDuration = location.state?.time * 60 || 1800; // 30 minutes in seconds
  const [socket, setSocket] = useState(null);
  const containerRef = useRef(null);

  const enterFullScreen = () => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  };

  useEffect(() => {
    enterFullScreen();

    // Event listener to detect when fullscreen exits
    const handleFullScreenChange = () => {
      if (!document.fullscreenElement) {
        enterFullScreen(); // Re-enter fullscreen mode
      }
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullScreenChange);
    document.addEventListener("mozfullscreenchange", handleFullScreenChange);
    document.addEventListener("MSFullscreenChange", handleFullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullScreenChange);
      document.removeEventListener("mozfullscreenchange", handleFullScreenChange);
      document.removeEventListener("MSFullscreenChange", handleFullScreenChange);
    };
  }, []);

  const [timeLeft, setTimeLeft] = useState(() => {
    return parseInt(localStorage.getItem("examTimeLeft")) || examDuration;
  });

  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          handleSubmitExam();
          return 0;
        }
        localStorage.setItem("examTimeLeft", prev - 1);
        return prev - 1;
      });
    }, 1000);
  
    return () => clearInterval(timerRef.current); // Cleanup on unmount
  }, []); // Run only once when component mounts
   // Re-run if timeLeft changes

  useEffect(() => {
    localStorage.setItem("examTimeLeft", timeLeft);
  }, [timeLeft]);
  

  // Load responses from local storage if they exist, otherwise initialize empty
  const [userResponses, setUserResponses] = useState(() => {
    return JSON.parse(localStorage.getItem("examResponses")) || Array(questions.length).fill("");
  });

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [editorTheme, setEditorTheme] = useState("vs-dark");

  // Save responses to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("examResponses", JSON.stringify(userResponses));
  }, [userResponses]);

  // Handle code change in the editor
  // const handleCodeChange = (value) => {
  //   const newResponses = [...userResponses];
  //   newResponses[currentQuestionIndex] = value || ""; // Update current question's answer
  //   setUserResponses(newResponses);
  // };
  const handleCodeChange = (value = "") => {
    if (typeof value !== "string") {
      console.error("Expected a string but got:", value);
      return;
    }
    const newResponses = [...userResponses];
    newResponses[currentQuestionIndex] = value; // Ensure it stores only string values
    setUserResponses(newResponses);
  };

  // Convert seconds to MM:SS format
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Save Answer (Stores in local storage)
  const handleSaveAnswer =  (e) => {
    e.preventDefault();
    const savedResponses = JSON.parse(localStorage.getItem("examResponses")) || [];
    savedResponses[currentQuestionIndex] = {
      questionNumber: currentQuestionIndex + 1,
      name: questions[currentQuestionIndex]?.Name,
      description: questions[currentQuestionIndex]?.Description,
      difficulty: questions[currentQuestionIndex]?.Difficulty,
      userCode: userResponses[currentQuestionIndex] || "Unattempted",
    };
    localStorage.setItem("examResponses", JSON.stringify(savedResponses));
    alert("Answer Saved!");
  };

  // Skip Question (Stores "Unattempted" in local storage)
  const handleSkipQuestion = (e) => {
    e.preventDefault();
    const savedResponses = JSON.parse(localStorage.getItem("examResponses")) || [];
    savedResponses[currentQuestionIndex] = {
      questionNumber: currentQuestionIndex + 1,
      name: questions[currentQuestionIndex]?.Name,
      description: questions[currentQuestionIndex]?.Description,
      difficulty: questions[currentQuestionIndex]?.Difficulty,
      userCode: "Unattempted",
    };
    localStorage.setItem("examResponses", JSON.stringify(savedResponses));
    alert("Question Skipped!");

    // Move to next question
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  // Next Question
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  // Previous Question
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;
  
    const reader = new FileReader();
    reader.onload = (e) => {
      const fileContent = e.target.result;
      handleCodeChange(fileContent); // Store in responses
    };
  
    reader.readAsText(file);
  };
  

  // Submit Exam (Send responses to backend)
  const handleSubmitExam = async (e) => {
    e.preventDefault();
    const savedResponses = JSON.parse(localStorage.getItem("examResponses")) || [];

    if (savedResponses.length === 0) {
      alert("No responses found. Please attempt or skip at least one question.");
      return;
    }

    let user = JSON.parse(localStorage.getItem('user'));
    let storedDetails = JSON.parse(localStorage.getItem("Details"));

    const payload = {
      questions: savedResponses,
      name: user.name,
      email: user.email,
      userId: user._id,
      duration: storedDetails.Duration,
      difficulty: storedDetails.Difficulty
    };

    console.log("Submitting Exam Data:", payload);
    localStorage.removeItem("examResponses");
    localStorage.removeItem("examTimeLeft");
    try {
      const response = await fetch("http://localhost:5000/analyze_answers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      console.log("Test Report:", result);

      // Clear local storage after submission
      localStorage.removeItem("examResponses");
      localStorage.removeItem("examTimeLeft");
      navigate("/test_report", { state: { report: result } });
    } catch (error) {
      console.error("Error submitting exam:", error);
    }
  };


  // const editorOptions = {
  //     minimap: { enabled: false },
  //     fontSize: 14,
  //     scrollBeyondLastLine: false,
  // };

  // const editorValue = userResponses[currentQuestionIndex] || "";

  // // For Vanilla Monaco Editor
  // useEffect(() => {
  //   const editorContainer = document.getElementById("editor-div");
  //   if (!editorContainer) return; // Prevent null access
  
  //   monaco.editor.create(editorContainer, {
  //     value: editorValue,
  //     language: "cpp",
  //     theme: editorTheme,
  //     options: editorOptions,
  //   });
  // }, [editorValue, editorTheme]);

  return (
    <div ref={containerRef}>
      <Header />
      <Main>
        <div className="container" style={{ display: "flex", maxWidth: "1400px", margin: "auto", padding: "20px", gap: "20px" }}>
          
          
          {/* Left Side - Question Info */}
          <div style={{ flex: "1", backgroundColor: "#1e1e1e", padding: "20px", borderRadius: "10px" }}>
            <div>
              <center> <h3 style={{ color: "white" }}> Time Left: {formatTime(timeLeft)} </h3> </center>
            </div>
            {/* <div>
              <center> <h3 style={{ color: "white" }}> Warnings: {warnings} </h3> </center>
              <center><p>Make sure you are facing the camera correctly.</p></center>
            </div> */}
            <h2 style={{ color: "white", marginBottom: "10px" }}>{`Question ${currentQuestionIndex + 1} of ${questions.length}`}</h2>
            <h4 style={{ color: "yellow" }}>{questions[currentQuestionIndex]?.Name}</h4>

            {questions?.[currentQuestionIndex]?.Difficulty === "Easy" ? (
              <h4 style={{ color: "green" }}>{questions?.[currentQuestionIndex]?.Difficulty}</h4>
            ) : questions?.[currentQuestionIndex]?.Difficulty === "Medium" ? (
              <h4 style={{ color: "orange" }}>{questions?.[currentQuestionIndex]?.Difficulty}</h4>
            ) : (
              <h4 style={{ color: "red" }}>{questions?.[currentQuestionIndex]?.Difficulty}</h4>
            )}

            <p style={{ color: "white" }}>
              <h5 style={{ color: "yellow", fontFamily: "Poppins" }}>Description:</h5>
              {questions[currentQuestionIndex]?.Description}
            </p>
            <pre style={{ backgroundColor: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
              <h5>Example 1:</h5>
              <b>Input: </b> {questions[currentQuestionIndex]?.Examples[0]?.Input}
              <br />
              <b>Output: </b> {questions[currentQuestionIndex]?.Examples[0]?.Output}
              <br />
              <b>Explanation: </b> {questions[currentQuestionIndex]?.Examples[0]?.Explanation}
              <br /><br />
              <h5>Example 2:</h5>
              <b>Input: </b> {questions[currentQuestionIndex]?.Examples[1]?.Input}
              <br />
              <b>Output: </b> {questions[currentQuestionIndex]?.Examples[1]?.Output}
              <br />
              <b>Explanation: </b> {questions[currentQuestionIndex]?.Examples[1]?.Explanation}
            </pre>

            {/* Action Buttons */}
            <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between" }}>
              <button className="btn btn-primary" onClick={handlePreviousQuestion} disabled={currentQuestionIndex <= 0}>
                Previous Question
              </button>
              <button className="btn btn-secondary" onClick={(e) => handleSkipQuestion(e)}>
                Skip Question
              </button>
              <button className="btn btn-success" onClick={(e) => handleSaveAnswer(e)}>
                Save Answer
              </button>
              <input
                type="file"
                accept=".txt,.cpp,.java,.py,.js"
                onChange={handleFileUpload}
                style={{color: "white"}}
              />
              <button className="btn btn-primary" onClick={handleNextQuestion} disabled={currentQuestionIndex >= questions.length - 1}>
                Next Question
              </button>
            </div>

            {/* Submit Exam Button */}
            {currentQuestionIndex === questions.length - 1 && (
              <div style={{ marginTop: "20px", textAlign: "center" }}>
                <button className="btn btn-danger" onClick={handleSubmitExam}>
                  Submit Exam
                </button>
              </div>
            )}
          </div>

          {/* Right Side - Code Editor */}
          <div style={{ flex: "1", backgroundColor: "#1e1e1e", padding: "20px", borderRadius: "10px", display: "flex", flexDirection: "column" }}>
            <h4 style={{ color: "white", marginBottom: "10px" }}>Code Editor</h4>
            <div className="editor-div" id="editor-div" style={{ flexGrow: 1, border: "1px solid white", borderRadius: "5px" }}>
            
            {/* <CodeMirror
              value={(userResponses[currentQuestionIndex])? userResponses[currentQuestionIndex]: ""}
              height="500px"
              extensions={[cpp()]}
              theme={editorTheme === "dark" ? oneDark : undefined} // Add light theme if needed
              onChange={handleCodeChange}
              basicSetup={{
                lineNumbers: true, // Enable line numbers
                highlightActiveLine: true, // Highlight the active line
                highlightActiveLineGutter: true, // Highlight line gutter
                foldGutter: true, // Enable code folding
                indentOnInput: true, // Auto indentation
              }}
              style={{
                fontSize: "14px",
                overflow: "auto",
              }}
            /> */}
              <Editor 
                  height="500px"
                  language="cpp"
                  onChange={handleCodeChange}
                  value={ (userResponses[currentQuestionIndex])? userResponses[currentQuestionIndex]: ""}
                  theme = {editorTheme}
                  options={{
                      minimap: { enabled: false},
                      fontSize : 14,
                      scrollBeyondLastLine: false,
                  }}
              />
              
            </div>
          </div>

        </div>
      </Main>
    </div>
  );
};

export default ExamPortal;


















