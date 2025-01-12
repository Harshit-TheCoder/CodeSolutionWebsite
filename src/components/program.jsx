import React, { useEffect, useState } from "react"
import Header from "./header";
import Main from "./main";
import { useParams } from "react-router-dom";
import "../css/showprogram.css";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/components/prism-c.min.js";
import "prismjs/components/prism-clike.min.js";
import "prismjs/components/prism-cpp.min.js";
import "prismjs/components/prism-java.min.js";
import "prismjs/components/prism-python.min.js";
import 'prismjs/plugins/toolbar/prism-toolbar.min.js';
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js";
import copyButton from "../components/images/copy.png";
import cpp from "../components/images/CPP.png";
import c from "../components/images/C.png";
import java from "../components/images/Java.png";
import python from "../components/images/Python.png";

const ShowProgram=()=>{
    const [programName, setProgramName] = useState('');
    const [programLanguage, setProgramLanguage] = useState('');
    const [programCategory , setProgramCategory] = useState('');
    const [programQuestion, setProgramQuestion] = useState('');
    const [program, setProgram] = useState('');
    const [notes, setNotes] = useState('');
    const [userId, setUserId] = useState('');
    const [questionId, setQuestionId] = useState('');
    const languageLogos = {
        cpp: cpp,
        c: c,
        java: java,
        python: python,
    };
    

    const saveNotes = async (e)=>{
        e.preventDefault();
        let result = await fetch("http://localhost:5000/notes",{
            method:"post",
            body: JSON.stringify({questionId, userId, notes}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        alert("Notes successfully saved in the database");
        fetchNotes();
    }

    
    const updateNotes = async (e)=>{
        e.preventDefault();
        let result = await fetch("http://localhost:5000/notes",{
            method:"put",
            body: JSON.stringify({questionId, userId, notes}),
            headers:{
                'Content-Type':'application/json'
            }
        });

        result = await result.json();
        alert("Notes updated successfully");
        fetchNotes();
    }

    const params = useParams();
    useEffect(()=>{
        console.log(params.id);
        getProgramDetails();
    }, []);

    useEffect(() => {
        if (questionId && userId) {
          fetchNotes();
        }
      }, [questionId, userId]);

    const fetchNotes = async () => {
        let result = await fetch("http://localhost:5000/get_notes", {
            method: "post",
            body: JSON.stringify({ questionId, userId }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        result = await result.json();
        if (result.Message) {
          setNotes(''); // No notes saved
        } else {
          setNotes(result.notes); // Display existing notes
        }
    };


    const getProgramDetails = async ()=>{
        let result = await fetch(`http://localhost:5000/program/${params.id}`);
        result = await result.json()
        console.log(result);
        setProgramName(result.programName);
        setProgramQuestion(result.programQuestion);
        setProgramLanguage(result.programLanguage);
        setProgramCategory(result.programCategory);
        setProgram(result.program);
        setUserId(result.userId);
        setQuestionId(result._id);
    }

    useEffect(() => {
        Prism.highlightAll(); // Trigger syntax highlighting after data is loaded
        if (Prism.plugins.copyToClipboard) {
            Prism.plugins.copyToClipboard.register();
          }
    }, [program, programLanguage]); // Run highlighting whenever `program` or `programLanguage` changes

      
    const getLanguageClass = (language) => {
        switch (language.toLowerCase()) {
          case "c":
            return "language-c";
          case "cpp":
          case "c++":
            return "language-cpp";
          case "java":
            return "language-java";
          case "python":
            return "language-python";
          default:
            return "language-none"; // Fallback if language isn't recognized
        }
      };

      const copyToClipboard = () =>{
        if (navigator.clipboard) {
            navigator.clipboard.writeText(program)
              .then(() => {
                alert("Text copied to clipboard!");
              })
              .catch((err) => {
                console.error("Failed to copy text to clipboard:", err);
                alert("Failed to copy text. Please try again.");
              });
          } else {
            // Fallback if the Clipboard API is not supported
            console.error("Clipboard API not supported in this browser.");
            alert("Your browser does not support clipboard operations.");
          }
      }
    return(
        <div>
            <Header />
            <Main>
                {/* <center><h1 className="program-heading">{programName}</h1></center> */}
                
                <div className="program-container" style={{ display: "flex",flexDirection: "row",width: "100%"}}>

                    <div className="first-container">

                        <div className="container">
                            <div className="row">
                                <h1 className="program-heading">{programName}</h1>
                            </div>
                            <div className="row question-div">
                                <h5 className="program-question-heading">Question:</h5>
                                <p>{programQuestion}</p>
                            </div>
                            <div className="row language-div">
                                <p> <b className="program-language-heading"> Language:</b>
                                <img 
                                    src={languageLogos[programLanguage]} 
                                    alt={programLanguage} 
                                    style={{ width: '40px', height: '40px', marginLeft: '10px' }}
                                />
                                </p>
                            </div>
                            <div className="row topic-div">
                                <p> <b className="program-topic-heading"> Topic:</b> {programCategory}</p>
                            </div>
                            <div className="row">
                                <h5 className="program-question-heading">Notes:</h5>
                                <textarea name="" id="" className="notes-area"
                                    value={notes}
                                    onChange={(e)=>setNotes(e.target.value)}
                                ></textarea>
                                <div className="notes-control-button">
                                    <button className="btn btn-success notes-save-button"
                                        onClick={(e)=>saveNotes(e)}
                                    >Save</button>
                                    <button className="btn btn-warning notes-update-button"
                                        onClick={(e)=>updateNotes(e)}
                                    >Update</button>
                                </div>
                                
                            </div>
                        </div>

                    </div>

                    <div className="second-container">
                        <div className="container">
                            <h3 className="program-topic-heading">Code:</h3>
                            <pre className="program-code line-numbers">
                                <code className={getLanguageClass(programLanguage)}>
                                    {program}
                                </code>
                                <img src={copyButton} alt="" style={{width:"30px", height:"30px"}}
                                 className="copy-button"
                                 onClick={copyToClipboard}
                                 />
                            </pre>
                        </div>
                        
                    </div>
                    
                </div>
            </Main>
        </div>
    );
}

export default ShowProgram;