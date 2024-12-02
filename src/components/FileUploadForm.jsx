import React from "react";
import "../css/form.css";
const FileUploadForm = () =>{
    return(
        <form action="" style={{display:"flex", flexDirection:"column", gap:"20px"}}>
            <label htmlFor="">Program Name:</label>
            <input className="program-name-input" type="text" placeholder='Enter Program Name'/>
            <label htmlFor="">Program Category(Sorting/Searching/Arrays)</label>
            <select name="" id="" className="program-category">
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
            <label htmlFor="">Programming Language:</label>
            <select name="" id="" className="program-language">
                <option value="cpp">CPP</option>
                <option value="c">C</option>
                <option value="java">Java</option>
                <option value="python">Python</option>
            </select>
            <label htmlFor="">File Upload</label>
            <input type="file" required className="file-upload"/>
        </form>
    );
};

export default FileUploadForm;
