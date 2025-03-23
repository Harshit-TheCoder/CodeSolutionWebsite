import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/form.css";
import Header from "./header";
import Main from "./main";
const ExamUploadForm = () => {
  const [duration, setDuration] = useState("45");
  const [difficulty, setDifficulty] = useState("Easy");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const Duration = duration;
    const Difficulty = difficulty;

    let details = {
        "Duration": Duration, 
        "Difficulty": Difficulty
    };

    localStorage.setItem("Details", JSON.stringify(details));
    console.log(duration, difficulty);
    try {
        const response = await fetch("http://localhost:5000/sortQuestions", {
          method: "POST",
          body: JSON.stringify(
                {  
                   Duration: Duration,
                   Difficulty: Difficulty 
                }, null, '\t'
            ),
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        const result = await response.json();
  
        if (result && result.length > 0) {

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
            
          navigate("/exam_portal", { state: { questions: result, time: Duration } });
        } else {
          alert("No questions found for the selected difficulty.");
        }
    } catch (error) {
        console.error("Error fetching questions:", error);
    }
    
  };

  return (
    <>
        <Header />
        <Main>
            <div className="container" style={{display:"flex", alignItems:"center", justifyContent:"center", height:"100vh", width:"100vw"}}>
                <form>
                    <div className="mb-3">
                        <label className="form-label">
                            <h3>Give Exam Details</h3>
                            <p style={{color: "white"}}>
                                Note: Please inspect and keep a track in local storage whether programs are saved or not.
                                <br />
                                (Browser Inspect works in full screen mode)
                            </p>
                        </label>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="duration" className="form-label" style={{width:"300px"}}>
                            Duration
                        </label>
                        <select className="form-select" id="duration" name="duration" onChange={(e) => setDuration(e.target.value)} style={{width:"300px"}}>
                            <option value="45">45 minutes</option>
                            <option value="60">60 minutes</option>
                            <option value="120">120 minutes</option>
                            <option value="180">180 minutes</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="difficulty" className="form-label" style={{width:"300px"}}>
                            Difficulty
                        </label>
                        <select className="form-select" id="difficulty" name="difficulty" onChange={(e) => setDifficulty(e.target.value)} style={{width:"300px"}}>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>
                            Start Exam
                        </button>
                    </div>
                </form>
            </div>
        </Main>
    </>

  );
};

export default ExamUploadForm;



