import React, { useState } from "react";


const Sidebar = ({ categories, onSelect }) => {
    return (
        
            
            <div style={{display:"flex", flexDirection:"column"}}>
                {categories.map((category) => (
                    <div key={category.name} className="btn-group my-2">
                        <button
                            type="button"
                            className="btn btn-success dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            style={{fontSize:"20px", borderRadius:"40px", height:"35px", width:"200px"}}
                        >
                            {category.name}
                        </button>
                        <ul className="dropdown-menu">
                            {category.questions.map((question) => (
                                <li key={question}>
                                    <a className="dropdown-item" href="#" onClick={() => onSelect(category.path + question, question.replace(".md", "").replace(/-/g, " "))}>
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

export default Sidebar;

