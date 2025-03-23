import React, { useEffect, useState } from "react";
import cpp from "../components/images/CPP.png";
import c from "../components/images/C.png";
import java from "../components/images/Java.png";
import python from "../components/images/Python.png";

import "../css/vault.css";
import { useNavigate } from "react-router-dom";
const BookmarkedQuestions = () => {
    const [questions, setQuestions] = useState('');
    const userId = JSON.parse(localStorage.getItem('user'))._id;
    const navigate = useNavigate();
    const languageLogos = {
        cpp: cpp,
        c: c,
        java: java,
        python: python,
    };

    useEffect(()=>{
        getBookmarkedQuestions();
    },[]);

    const showProgram = (id) =>{
        navigate(`/program/${id}`);
    }

    const getBookmarkedQuestions = async ()=>{
        let result = await fetch(`http://localhost:3000/bookmark_question/${userId}`);
        result = await result.json();
        setQuestions(result);
    }
    return(
        <div className="container ">
            {
                questions.length > 0
                 ? 
                 questions.map((question, index)=>
                    <div className="row bookmark-div" key={index} onClick={()=>showProgram(question.questionId)}>
                        <div className="col-12">
                            <h5 className="program-heading">{question.programName}</h5>
                            <p className="language-topic">
                                <span className="language">Language:</span> 
                                <img 
                                    src={languageLogos[question.programLanguage]} 
                                    alt={question.programLanguage} 
                                    style={{ width: '30px', height: '30px', marginLeft: '10px' }}
                                />  
                                <span className="topic">Topic:</span> {question.programCategory} 
                            </p>
                        </div>
                    </div> 
                ) : <h5>No bookmarked questions</h5>
            }
        </div>
    );
}

export default BookmarkedQuestions;