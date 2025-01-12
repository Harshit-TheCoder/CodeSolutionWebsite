import React, { useState, useEffect, useRef } from "react";
import authimg1 from "../src/components/images/authimg1.png";
import Main from "./components/main";
import userimg from "../src/components/images/profile.png";
import "./css/form.css";
import OtpInput from "otp-input-react";
import { BsFillShieldLockFill} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { CgSpinner } from "react-icons/cg";

const OtpAuthVerify = () =>{
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const [timeLeft, setTimeLeft] = useState(60);  // Set the initial time as 30 seconds
    const [isExpired, setIsExpired] = useState(false);
    const navigate = useNavigate();
    const otpSentTime = localStorage.getItem('otpSentTime');
    useEffect(() => {
        
        
        if (otpSentTime) {
          const interval = setInterval(() => {
            const timePassed = Math.floor((Date.now() - otpSentTime) / 1000); // Time passed in seconds
            const remainingTime = 60 - timePassed;  // Subtract the passed time from 30 seconds
    
            if (remainingTime <= 0) {
              clearInterval(interval);  // Stop the interval once time expires
              setIsExpired(true);  // Set OTP expired flag
              setTimeLeft(0); // Display 0 seconds
            } else {
              setTimeLeft(remainingTime); // Update remaining time
            }
          }, 1000);  // Update every second
    
          return () => clearInterval(interval);  // Cleanup the interval when component unmounts or the timer ends
        }
      });

    

    const handleClick = async (e) =>{
        e.stopPropagation();
        e.preventDefault();
        setLoading(true);

        const generatedOTP = localStorage.getItem('otp');

        if(generatedOTP === otp){
            alert('OTP Authentication Successfull !!');
            navigate('/dashboard');
        }
        else{
            alert("Invalid OTP");
            setLoading(false);
            return;
        }
        
    }
    return(
        <div>
            <Main>
                <div className="container container-div"
                    style={{ display:"flex", flexDirection:"row", gap: "20px", marginTop:"5%" }}>
                    <div className="left-div">
                        <div className="col-8 d-flex flex-column align-items-center justify-content-center text-center">
                            <div className="mb-3">
                                <center>
                                    <h3 style={{ color: "white", fontFamily:"Poppins"}}>Otp Validation</h3>
                                </center>
                            </div>
                            <div className="mb-3">
                                <center>
                                    <div style={{ backgroundColor:"green" , height: "60px", width:"60px", borderRadius:"50%" , color:"white", padding:"15px"}}>
                                        <BsFillShieldLockFill size={30} />
                                    </div>
                                </center>
                            </div>
                            <div className="mb-3">
                                <h3 style={{ color: "white", fontFamily: "Poppins" }}>
                                    {isExpired ? "Time Expired" : `Time Left: ${timeLeft} seconds`}
                                </h3>
                            </div>
                            <div className="mb-3">
                                {/* <center> */}
                                    <h5 style={{ color: "white", fontFamily:"Poppins"}}>Enter your OTP</h5>
                                {/* </center> */}
                            </div>
                            <div className="mb-3 d-flex align-items-center">
                                    <OtpInput value={otp} onChange={setOtp} OTPLength={6}
                                    otpType="number"
                                    disabled={false}
                                    autoFocus
                                    className="opt-container "
                                
                                    ></OtpInput>
                            </div>
                            <div className="mb-3">
                                <button style={{ backgroundColor:"darkgreen", display:"flex",
                                     alignItems:"center", 
                                     justifyContent:"center", 
                                     padding:"5px", 
                                     width:"200px", 
                                     height:"40px",
                                     borderRadius:"40px"
                                     }} 
                                     onClick={(e)=>handleClick(e)}
                                     disabled={isExpired}
                                     >
                                    <span style={{ color: "white", fontFamily:"Poppins"}}>
                                        {
                                            loading ? <CgSpinner size={20} className="mt-1 animate-spin" />: <b>Verify OTP</b>
                                        }
                                    </span>
                                </button>
                            </div>
                            <div className="mb-3">
                                {isExpired && <p style={{ color: "red" }}>OTP has expired. Please request a new one.</p>}
                                {isExpired && <b><a href="/otpauth" style={{ textDecoration:"none", color:"white", fontFamily:"Poppins"}}> Resend Otp</a></b>}
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

export default OtpAuthVerify;