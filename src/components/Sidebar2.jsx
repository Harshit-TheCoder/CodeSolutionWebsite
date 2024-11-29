import React, { useState } from "react";


const Sidebar2 = ({ categories, onSelect }) => {
    return (
        
            
            <div style={{display:"flex", flexDirection:"column"}}>
                {categories.map((category) => (
                    <div key={category.name} className="btn-group my-0">
                        <button
                            type="button"
                            className="btn  dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            style={{fontSize:"20px", height:"40px", width:"100%", color:"white", borderBottom:"1px solid white"}}
                        >
                            {category.name}
                        </button>
                        <ul className="dropdown-menu">
                            {category.questions.map((question) => (
                                <li key={question}>
                                    <a className="dropdown-item" href="#"  onClick={() => onSelect(category.path + question, question.replace(".md", "").replace(/-/g, " "))}>
                                        {question.replace(".md", "").replace(/-/g, " ")}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

    );
};

export default Sidebar2;

