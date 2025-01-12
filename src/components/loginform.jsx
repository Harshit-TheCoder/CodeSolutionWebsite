import React, { useEffect, useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import "../css/form.css";

function LoginForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    // useEffect(()=>{
    //     const auth = localStorage.getItem("user");
    //     if(auth){
    //         navigate("/vaults");
    //     }
    // },[]);
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
        let result = await fetch("http://localhost:5000/google_login",{
            method:"post",
            body: JSON.stringify({name, email, password}),
            headers:{
                'Content-Type':'application/json',
            }
        });
        result = await result.json();
        if (result.result === "No user found") {
            alert("Invalid credentials. Please try again.");
        } else {
            alert("Google SignUp Successful !!");
            localStorage.setItem("user", JSON.stringify(result));
            navigate("/dashboard");
        }
    
    }
    const handleGoogleLoginError = ()=>{
        console.log("Google SignIn error");
    }
    
    const handleLogin= async (event)=>{
        event.preventDefault();
        console.log(name, email, password);
        let result = await fetch("http://localhost:5000/login",{
            method:"post",
            body: JSON.stringify({name, email, password}),
            headers:{
                'Content-Type':'application/json',
            }
        });
        result = await result.json();
        if (result.result === "No user found") {
            alert("Invalid credentials. Please try again.");
        } else {
            console.log("Login successful:", result);
            localStorage.setItem("user", JSON.stringify(result));
            navigate("/dashboard");
        }
    }

    return (
        <div className="row">
            <div className="col-12" style={{ backgroundColor: "4a6d6d" }}>
                <form>
                    <div className="mb-3">
                        <GoogleOAuthProvider 
                            clientId="183001888898-lrn8gm462ngpckb9r62scucek6m2fva5.apps.googleusercontent.com"
                        >
                            <GoogleLogin
                                onSuccess={handleGoogleLoginSuccess}
                                onError={handleGoogleLoginError}
                            >
                            </GoogleLogin>
                        </GoogleOAuthProvider>
                    </div>
                    <div className="mb-3">
                        <hr />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputName1" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleInputName1" name="username"
                            onChange={(e)=> setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email Address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp1" name="email"
                            onChange={(e)=> setEmail(e.target.value)}
                        />
                        <div id="emailHelp1" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name="password"
                            onChange={(e)=> setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary"
                        onClick={handleLogin}
                    >Submit</button>
                </form>
            </div>
            {/* <div className="col-2"></div> */}
        </div>
    );
}

export default LoginForm;
