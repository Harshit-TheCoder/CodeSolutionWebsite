import React, { useEffect, useState } from "react";
import authimg1 from "../src/components/images/authimg1.png";
import Main from "./components/main";

import "./css/form.css";

import PhoneInput from "react-phone-input-2";
import { BsTelephoneFill } from "react-icons/bs";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";
import { CgSpinner } from "react-icons/cg";


const OtpAuth = () =>{
    const [email, setEmail] = useState('');
    const [name, setName] = useState('')
    const [loading, setLoading]= useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        const email = JSON.parse(localStorage.getItem('user')).email;
        const name = JSON.parse(localStorage.getItem('user')).name;
        setEmail(email);
        setName(name);
    },[]);


    const handleClick = async (e) =>{
        const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();
        const otp = generateOTP(); // Generate OTP
        localStorage.setItem('otp', otp);
        localStorage.setItem('otpSentTime', Date.now());
        setLoading(true);
        let result = await fetch("http://localhost:5000/send-email",{
            method:'post',
            body: JSON.stringify({name, email, otp}),
            headers:{
                'Content-Type':'application/json',
            }
        });
        result = await result.json();
        console.log(result);
        alert('OTP sent successfully');
        setLoading(false);
        navigate('/otpauthverify');
    }

    return (
        <div>
            <Main>
                <div id="recaptcha-container"></div>
                <div className="container container-div"
                    style={{ display:"flex", flexDirection:"row", gap: "20px", marginTop:"5%" }}>
                    <div className="left-div">
                        <div className="col-8 d-flex flex-column align-items-center justify-content-center text-center">
                            <div className="mb-3">
                                <center>
                                    <h5 style={{ color: "white", fontFamily:"Poppins"}}>Welcome to</h5>
                                </center>
                            </div>
                            <div>
                                <center>
                                    <h3 style={{ color: "white", fontFamily:"Poppins"}}>ALGOVAULT</h3>
                                </center>
                            </div>
                            <div className="mb-3">
                                <center>
                                    <div style={{ backgroundColor:"green" , height: "60px", width:"60px", borderRadius:"50%" , color:"white", padding:"15px"}}>
                                        <BsTelephoneFill size={30} />
                                    </div>
                                </center>
                            </div>
                            <div className="mb-3">
                                <center>
                                    <h5 style={{ color: "white", fontFamily:"Poppins"}}>Verify your Email</h5>
                                </center>
                            </div>
                            {/* <div className="mb-3 d-flex align-items-center">
                                <PhoneInput country={"in"} />
                            </div> */}
                            <div className="mb-3">
                            <input type="email" className="form-control input-tag" id="email" aria-describedby="emailHelp1" name="email"
                                    value={email} onChange={(e)=>setEmail(e.target.value)}
                                    placeholder="test@example.com" style={{width:"300px"}}
                                />
                            </div>
                            <div className="mb-3">
                                <button style={{ backgroundColor:"darkgreen", display:"flex",
                                     alignItems:"center", 
                                     justifyContent:"center", 
                                     padding:"5px", 
                                     width:"200px", 
                                     height:"40px",
                                     borderRadius:"40px"
                                     }} onClick={(e)=>handleClick(e)}>
                                    <span style={{ color: "white", fontFamily:"Poppins"}}>
                                        {
                                            loading ? <CgSpinner size={20} className="mt-1 animate-spin" />: <b>Send OTP via Email</b>
                                        }
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="right-div">
                        <img src={authimg1} alt="GIF Example" style={{width: "450px", height: "auto", borderRadius:"40%"}}></img>
                    </div>
                </div>
            </Main>
        </div>
    );
}

export default OtpAuth;