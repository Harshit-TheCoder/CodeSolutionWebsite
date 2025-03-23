import React, { useEffect, useState } from "react";
import Header from "./components/header";
import Main from "./components/main";
import "./css/dashboard.css";
import profileImage from "./components/images/profile.png";
import { useNavigate } from "react-router-dom";

const Dashboard= ()=>{
    const [username, setUsername]=useState('');
    const [id, setId]=useState('');
    const [email, setEmail]=useState('');
    const [numPrograms, setNumPrograms] = useState('');
    const navigate = useNavigate();
    
    useEffect(()=>{
        const getUserDetails=async ()=>{
            const details = JSON.parse(localStorage.getItem('user'));
            console.log("Dashboard details:");
            console.log(details);
            let result = await fetch("http://localhost:5000/dashboard",{
                method:'post',
                body: JSON.stringify({name: details.name, email: details.email, password: details.password}),
                headers:{
                    'Content-Type':'application/json'
                }
            });
            result = await result.json();
            console.log(result);
            setUsername(result.name);
            setId(result._id);
            setEmail(result.email);

            result = await fetch(`http://localhost:5000/programs/${details._id}`);
            result = await result.json();
            if(result.Length) setNumPrograms(result.Length);
            else setUsername(result.Message);
        }
        getUserDetails();
    },[]);
    
    const handleClick=()=>{
        navigate("/vaults");
    }
    return (
        <div>
            <Header />
            <Main>
                <div className="user-dashboard">
                    <h1 className="dashboard-heading">Dashboard</h1>
                    <div className="dashboard">
                        <img src={profileImage} alt="" className="user-profile-image" />
                        <br /><br />
                        <div className="container profile">
                            <div className="row">
                                <div className="col-6"><h5 className="info-heading">Username:</h5></div>
                                <div className="col-6">
                                    <h5 className="user-info">{username}</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6"><h5 className="info-heading">UserId:</h5></div>
                                <div className="col-6">
                                    <h5 className="user-info">{id}</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6"><h5 className="info-heading">Email:</h5></div>
                                <div className="col-6">
                                    <h5 className="user-info">{email}</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6"><h5 className="info-heading">Number of Questions saved:</h5></div>
                                <div className="col-6">
                                    <h5 className="user-info">{numPrograms}</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6"><h5 className="info-heading">Go to Vault:</h5></div>
                                <div className="col-6">
                                    <button className="btn btn-warning" onClick={handleClick}>Vault</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Main>
            
        </div>
    );
};

export default Dashboard;