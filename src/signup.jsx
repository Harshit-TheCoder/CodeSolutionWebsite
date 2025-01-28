import React, { useEffect, useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import userimg from "../src/components/images/profile.png";
import authimg1 from "../src/components/images/authimg1.png";
import authimg2 from "../src/components/images/authimg2.png";
import "./css/form.css";
import Header from "./components/header";
import Main from "./components/main";
const SignUp = () =>{

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleGoogleLoginSuccess = async (credentialResponse)=>{
        console.log("Google Sign In Success", credentialResponse);
        const decode = jwtDecode(credentialResponse?.credential);
        console.log(decode);
        const name = decode.name;
        const email = decode.email;
        const password = "google";
        console.log(name);
        console.log(email);
        console.log(password);
    
        let result = await fetch("https://algovault-backend.onrender.com/google_register",{
            method:"post",
            body: JSON.stringify({name, email, password}),
            headers:{
                'Content-Type':'application/json',
            }
        });
        result = await result.json();
        console.log(result);
        localStorage.setItem("user", JSON.stringify(result));
        alert("Google SignUp Successful !! Account Created");
        navigate("/otpauth");
    }
    const handleGoogleLoginError = ()=>{
        console.log("Google SignIn error");
    }
    const handleRegister= async (event)=>{
        if(!name){
            document.getElementsByClassName('name-alert')[0].style.display='block';
            return;
        }
        if(!email){
            document.getElementsByClassName('email-alert-1')[0].style.display='block';
            return;
        }
        if(!email.includes("@")){
            document.getElementsByClassName('email-alert-2')[0].style.display='block';
            return;
        }
        if(!password){
            document.getElementsByClassName('password-alert')[0].style.display='block';
            return;
        }

        event.preventDefault();
        console.log("Account Created");
        console.log(name, email, password);
        let result = await fetch("https://algovault-backend.onrender.com/register",{
            method:'post',
            body: JSON.stringify({name, email, password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        console.log(result);
        const alertdiv = document.getElementsByClassName('success-alert')[0];
        alertdiv.style.display = 'block'
        setTimeout(()=>{
            alertdiv.style.display = 'none';
        }, 2000);
        localStorage.setItem("user", JSON.stringify(result));
        alert("Account Successfully created");
        navigate("/otpauth");
    }
    const nameInput = document.getElementById('name'); // assuming the name input has id="name"
    const emailInput = document.getElementById('email'); // assuming the email input has id="email"
    const passwordInput = document.getElementById('password'); // assuming the password input has id="password"

    if (nameInput) {
        nameInput.addEventListener('input', () => {
            if (nameInput.value.trim()) {
                document.getElementsByClassName('name-alert')[0].style.display = 'none';
            }
        });
    }

    if (emailInput) {
        emailInput.addEventListener('input', () => {
            if (emailInput.value.trim()) {
                document.getElementsByClassName('email-alert-1')[0].style.display = 'none';
                document.getElementsByClassName('email-alert-2')[0].style.display = 'none';
            }
        });
    }

    if (passwordInput) {
        passwordInput.addEventListener('input', () => {
            if (passwordInput.value.trim()) {
                document.getElementsByClassName('password-alert')[0].style.display = 'none';
            }
        });
    }

    return(
        <div>
            <Header />
            <Main>
                <div className="container container-div" style={{ display:"flex", flexDirection:"row", gap: "20px", marginTop:"5%" }}>
                    <div className="left-div row">
                        <div className="col-8" style={{ backgroundColor: "4a6d6d" }}>
                            <form>
                                <div className="mb-3">
                                    <center>
                                        <h3 className="login-signin-header">Create Account</h3>
                                    </center>
                                    <div class="alert alert-danger failure-alert" role="alert">
                                        Form Submission Failed !!
                                    </div>
                                    <div class="alert alert-success success-alert" role="alert">
                                        Form Submission Successful !!
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <center>
                                        <img src={userimg} alt="" style={{ width:"90px", height:"90px"}} />
                                    </center>
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor="exampleInputName2" className="form-label login-signin-label">Name</label>
                                    <input type="text" className="form-control input-tag" id="name" name="username"
                                        placeholder="Enter Name"
                                        onChange={(e)=>setName(e.target.value)}
                                    />
                                    <div class="alert alert-danger name-alert" role="alert">
                                        Please enter your Name !!
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail2" className="form-label login-signin-label">Email Address</label>
                                    <input type="email" className="form-control input-tag" id="email" aria-describedby="emailHelp1" name="email"
                                        placeholder="text@example.com"
                                        onChange={(e)=>setEmail(e.target.value)}
                                    />
                                    <div id="emailHelp1" className="form-text">We'll never share your email with anyone else.</div>
                                    <div class="alert alert-danger email-alert-1" role="alert">
                                        Please enter your Email !!
                                    </div>
                                    <div class="alert alert-danger email-alert-2" role="alert">
                                        Invalid Email !!
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword2" className="form-label login-signin-label">Password</label>
                                    <input type="password" className="form-control input-tag" id="password" name="password"
                                        placeholder="Enter Password"
                                        onChange={(e)=>setPassword(e.target.value)}
                                    />
                                    <div class="alert alert-danger password-alert" role="alert">
                                        Please enter your Password !!
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <button type="submit" className="btn btn-primary"
                                        onClick={handleRegister}
                                    >Create Account
                                    </button>
                                </div>
                                <div className="mb-3"><hr className="divider-line"/></div>
                                <div className="mb-3">
                                    <GoogleOAuthProvider 
                                        clientId="183001888898-lrn8gm462ngpckb9r62scucek6m2fva5.apps.googleusercontent.com"
                                    >
                                        <GoogleLogin
                                            size="medium"
                                            theme="filled_blue"
                                            onSuccess={handleGoogleLoginSuccess}
                                            onError={handleGoogleLoginError}
                                        ></GoogleLogin>
                                    </GoogleOAuthProvider>
                                </div>
                             </form>
                        </div>
                    </div>
                    <div className="right-div">
                        <img src={authimg2} alt="GIF Example" style={{width: "450px", height: "auto", borderRadius:"40%"}}></img>
                    </div>
                </div>
            </Main>
        </div>
    );
}

export default SignUp;