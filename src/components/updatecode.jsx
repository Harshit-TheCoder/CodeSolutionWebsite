import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Editor } from "@monaco-editor/react";
import "../css/form.css";
const UpdateCode = (props)=>{
    const programId = props.program?._id || '';
    const [programName, setProgramName] = useState(props.program?.programName || '');
    const [programQuestion, setProgramQuestion] = useState(props.program?.programQuestion || '');
    const [programCategory, setProgramCategory] = useState(props.program?.programCategory || 'Sorting');
    const [programLanguage, setProgramLanguage] = useState(props.program?.programLanguage || 'cpp');
    const [program, setProgram] = useState(props.program?.program || '');
    const [editorTheme, setEditorTheme] = useState('vs-dark');
    const [border, setBorder] = useState('white');
    const navigate = useNavigate();

    const applyLightTheme=(e)=>{
        e.preventDefault();
        setEditorTheme('vs-light');
        setBorder('1px solid black');
    }
    const applyDarkTheme=(e)=>{
        e.preventDefault();
        setEditorTheme('vs-dark');
        setBorder('1px solid white');
    }
    useEffect(() => {
        if (props.program) {
          setProgramName(props.program.programName || '');
          setProgramQuestion(props.program.programQuestion || '');
          setProgramCategory(props.program.programCategory || 'Sorting');
          setProgramLanguage(props.program.programLanguage || 'cpp');
          setProgram(props.program.program || '');
        }
    }, [props.program]);

    const handleSubmit= async (e)=>{
        e.preventDefault();
        console.log(programName);
        console.log(programQuestion);
        console.log(programCategory);
        console.log(programLanguage);
        console.log(program);

        let result = await fetch(`https://algovault-backend.onrender.com/update_program/${programId}`,{
            method:'put',
            body: JSON.stringify({programName, programQuestion, programCategory, programLanguage, program}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        console.log(result);
        alert("Code Details Submitted");
    }
    return(
        <form action="" style={{display:"flex", flexDirection:"column", gap:"20px"}}>
            <label htmlFor="program-name" className="form-label">Program Name:</label>
            <input className="form-control" type="text" placeholder='Enter Program Name'
                name="program-name" id="program-name"
                value={programName}
                onChange={(e)=>setProgramName(e.target.value)}
                // style={{border:"1px solid black", padding: "5px", margin:"1px", borderRadius:"40px", width:"500px"}}
            />
            <label htmlFor="program-question" className="form-label">Program Question:</label>
            <textarea name="program-question" id="program-question" className="form-control"
                value={programQuestion}
                onChange={(e)=>setProgramQuestion(e.target.value)}
            ></textarea>
            <label htmlFor="program-category">Program Category(Sorting/Searching/Arrays)</label>
            <select className="form-select" id="program-category" name="program-category"
                value={programCategory}
                onChange={(e)=>setProgramCategory(e.target.value)}
            >
                <option value="Other">Other</option>
                <option value="Sorting">Sorting</option>
                <option value="Searching">Searching</option>
                <option value="Arrays">Arrays</option>
                <option value="Linked List">Linked List</option>
                <option value="Recursion">Recursion</option>
                <option value="Bit Manipulation">Bit Manipulation</option>
                <option value="Stack">Stack</option>
                <option value="Queue">Queue</option>
                <option value="Heaps">Heaps</option>
                <option value="Sliding Window, Two Pointers">Sliding Window, Two Pointers</option>
                <option value="Greedy Algorithms">Greedy Algorithms</option>
                <option value="Binary Tree">Binary Tree</option>
                <option value="Binary Search Tree">Binary Search Tree</option>
                <option value="Graphs">Graphs</option>
                <option value="Dynamic Programming">Dynamic Programming</option>
                <option value="Tries">Tries</option>
            </select>
            <label htmlFor="program-language" className="form-label">Programming Language:</label>
            <select className="form-select" name="program-language" id="program-language"
                value={programLanguage}
                onChange={(e)=>setProgramLanguage(e.target.value)}
            >
                <option value="cpp">CPP</option>
                <option value="c">C</option>
                <option value="java">Java</option>
                <option value="python">Python</option>
            </select>
            <label htmlFor="program" className="form-label">Program Upload</label>
            {/* <input type="file" required className="file-upload"/> */}
            {/* <textarea name="program" id="program" className="form-control"
                value={program}
                onChange={(e)=>setProgram(e.target.value)}
            ></textarea> */}
            <div className='editor-theme-div'>
                <div>
                    <button className='btn btn-light light-theme-button'
                        onClick={(e)=>applyLightTheme(e)}
                    >Light</button>
                    <button className='btn btn-dark dark-theme-button'
                        onClick={(e)=>applyDarkTheme(e)}
                    >Dark</button>
                </div>
            </div>
            <div className='editor-div' style={{border: border}}>
                <Editor
                    height="400px"
                    name="program" 
                    id="program"
                    language={programLanguage === "cpp" ? "cpp" : programLanguage}
                    value={program}
                    onChange={(value) => setProgram(value || "")}
                    theme={editorTheme}
                    options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    scrollBeyondLastLine: false,
                    }}
                />
            </div>
            
            <button className="btn btn-primary" onClick={handleSubmit}>Submit Code Details</button>
        </form>
    );
}

export default UpdateCode;