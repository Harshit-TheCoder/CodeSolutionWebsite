import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "./components/header";
import Main from "./components/main";
import UpdateCode from "./components/updatecode";
import BookMark from "./components/images/bookmarked.png";
import NotBookMark from "./components/images/notbookmarked.png";
import BookmarkedQuestions from "./components/bookmark";
import Button from '@mui/material/Button';
import cpp from "./components/images/CPP.png";
import c from "./components/images/C.png";
import java from "./components/images/Java.png";
import python from "./components/images/Python.png";
import "./css/vault.css";
const Vaults=()=>{
  // 
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [programs, setPrograms] = useState([]);
  const navigate = useNavigate();
  const languageLogos = {
    cpp: cpp,
    c: c,
    java: java,
    python: python,
  };

  useEffect(()=>{
    getSavedPrograms();
  },[]);

  const showProgram = async (id)=>{
    navigate(`/program/${id}`);
  }

  const getSavedPrograms = async ()=>{
    const userId = JSON.parse(localStorage.getItem('user'))._id;
    console.log(userId);
    let result = await fetch(`https://algovault-backend-1.onrender.com/vault/${userId}`);
    result = await result.json();
    console.log(result);
    setPrograms(result);
  }

  const deleteProgram= async (e,id)=>{
      e.stopPropagation();
      console.log(id);
      let result = await fetch(`https://algovault-backend-1.onrender.com/delete_program/${id}`,{
        method:"Delete",
      });
      result = await result.json();
      if(result){
        alert('Record is Deleted');
        setSelectedProgram(null); 
        getSavedPrograms();
      }
  }

  const updateProgram = (e, program)=>{
      e.stopPropagation();
      setSelectedProgram(program);
  }

  const searchProgram = async (event) =>{
      let key = event.target.value;
      if(key){
        let result = await fetch(`https://algovault-backend-1.onrender.com/search_program/${key}`);
        result = await result.json();
        if(result){
          setPrograms(result);
          // getSavedPrograms();
        }
      }else{
        getSavedPrograms();
      }
  }

  const bookmarkSelectedQuestion = async (e, questionId, userId, programName,programCategory, programLanguage)=>{
    e.stopPropagation();
    e.preventDefault();
    console.log(programName,programCategory,programLanguage, userId, questionId);

     
    let result = await fetch('https://algovault-backend-1.onrender.com/bookmark_question',{
      method:'post',
      body: JSON.stringify({questionId, userId, programName,programCategory,programLanguage}),
      headers:{
        'Content-Type':'application/json',
      }
    });
    result = await result.json();
    if(result.Message && result.Message === "The selected question is already bookmarked."){
      alert('Question already bookmarked');
    }
    else{
      alert('Question successfully bookmarked');
    }
  }

  const unbookmarkSelectedQuestion = async (e, questionId, userId)=>{
    e.stopPropagation();
    e.preventDefault();

    let result = await fetch(`https://algovault-backend-1.onrender.com/bookmark_question`,{
      method:'delete',
      body: JSON.stringify({questionId, userId}),
      headers:{
        'Content-Type':'application/json',
      }
    });
    result = await result.json();
    alert(`${result.Message}`);
  }


  return(
    <div>
      <Header />
      <Main>
        <center><h1 className="vault-heading">Vault</h1></center>
        
        <div className="container">
        <h3 className="vault-heading">Your Programs</h3>
        <div className="row search-div">
            <input type="text" placeholder="Search Program"
             className="searchbox"
             onChange={searchProgram}
             />
              <button data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"
              onClick={(e)=> e.stopPropagation()}
              style={{ backgroundColor:"darkgreen", display:"flex",
                alignItems:"center", justifyContent:"center", padding:"5px", width:"150px", height:"40px",
                borderRadius:"20px", marginTop:"15px"}}>
                <span style={{ color: "white", fontFamily:"Poppins"}}>
                    Bookmark
                </span>
              </button>
        </div>
        <div className="program-container-div">
          {
            programs.length>0 ? programs.map((program, index)=>
                <div className="row program-div" key={index} onClick={()=>showProgram(program._id)}> 
                  <div className="col-8">
                    <h5 className="program-heading">{program.programName}</h5>
                    <p className="language-topic"> <span className="language">Language:</span>
                    <img 
                      src={languageLogos[program.programLanguage]} 
                      alt={program.programLanguage} 
                      style={{ width: '30px', height: '30px', marginLeft: '10px' }}
                    />
                    <span className="topic">Topic:</span> {program.programCategory} </p>
                  </div>
                  <div className="col-4 program-div-buttons">
                    <button className="btn btn-warning" 
                      data-bs-toggle="modal" 
                      data-bs-target="#exampleModal" 
                      onClick={(e)=> updateProgram(e, program)}
                    >
                      Update
                    </button>
                    <button className="btn btn-danger" onClick={(e) => deleteProgram(e,program._id)}>Delete</button>
                    <Link to='#'>
                      <img src={BookMark} alt=""  
                        style={{width:"20px", height: "20px"}} 
                        onClick={(e)=>bookmarkSelectedQuestion(e, program._id,program.userId, 
                           program.programName, 
                           program.programCategory,
                           program.programLanguage,
                          )}
                          data-bs-toggle="tooltip"
                          title="Bookmark"
                      />
                    </Link>
                    <Link to='#'>
                      <img src={NotBookMark} alt=""  
                        style={{width:"20px", height: "20px"}} 
                        onClick={(e)=>unbookmarkSelectedQuestion(e, program._id, program.userId)}
                        data-bs-toggle="tooltip"
                        title="Unbookmark"
                      />
                    </Link>
                  </div>
                </div>
            ):<h1>You haven't saved any programs yet</h1>
          }

        </div>
          
        </div>


        <div className="modal fade" id="exampleModal" tabIndex="-1" data-bs-backdrop="false" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-scrollable modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel"> Program Updating Form </h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
              {selectedProgram ? (
                    <UpdateCode program={selectedProgram} />
                ) : (
                    <p>No program selected for update</p>
                )}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>


        <div className="offcanvas offcanvas-start bg-dark text-light" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Bookmarked Questions</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <BookmarkedQuestions />
          </div>
        </div>

      </Main>
      
    </div>
  );
};

export default Vaults;