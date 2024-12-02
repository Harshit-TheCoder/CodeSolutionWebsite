import React, { useState } from "react";
import bgimg from "./websitelogo.png";
import "../css/form.css";
import showimg from "./show.png";
import hideimg from "./hide.png";

import emailicon from "./email.png";
import usericon from "./user.png";
function SignUpForm() {
    const [showPassword1, setShowPassword1] = useState(false);

    const togglePasswordVisibility1 = () => {
        setShowPassword1(!showPassword1);
    };

    const [showPassword2, setShowPassword2] = useState(false);

    const togglePasswordVisibility2 = () => {
        setShowPassword2(!showPassword2);
    };

    return (
        <div className="row">
            
            <div className="col-12" style={{ backgroundColor: "4a6d6d" }}>
                <form>
                    <div className="container" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        <div className="row">
                            <center><img src={bgimg} style={{ width: "90px", height: "90px"}} /></center>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-4"><center><label htmlFor="username">Username:</label></center></div>
                            <div className="col-8 input-div"><img src={usericon} className="user-icon"/><input type="text" id="username" name="username" required /><br /><br /></div>
                        </div>
                        <div className="row">
                            <div className="col-4"><center><label htmlFor="email">Email-Id:</label></center></div>
                            <div className="col-8 input-div"><img src={emailicon} className="email-icon"/><input type="email" id="email" name="email" required /><br /><br /></div>
                        </div>
                        
                        <div className="row">
                            <div className="col-4"><center><label htmlFor="password">Password:</label></center></div>
                            <div className="col-8 input-div">
                                <input type={showPassword1 ? "text" : "password"} id="password" name="password" required />
                                <img src={showPassword1 ? hideimg : showimg} className="pass-icon" onClick={togglePasswordVisibility1} />
                            </div><br /><br />
                        </div>
                        <div className="row">
                            <div className="col-4"><center><label htmlFor="confirm-password">Confirm Password:</label></center></div>
                            <div className="col-8 input-div">
                                <input type={showPassword2 ? "text" : "password"} id="confirm-password" name="confirm-password" required />
                                <img src={showPassword2 ? hideimg : showimg} className="pass-icon" onClick={togglePasswordVisibility2} />
                            </div><br /><br />
                        </div>
                        <div className="row">
                            <div className="col-4"><center><button type="submit" className="btn btn-primary">Submit Form</button></center></div>
                        </div>
                    </div>
                </form>
            </div>
            
        </div>
    );
}

export default SignUpForm;
