import React from "react";
import Header  from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import Form from "./components/signupform";

const Login = () => {
    
  
    return (
    
        <div>
        <Header />
        <Main>
        <div className="container" style={{ zIndex: "5",boxShadow: "5px 10px 8px 10px #888888", width:"800px", height:"600px", display:"flex", flexDirection:"column", gap:"10px",}}>
            <center><h1>Login:</h1></center>
            <Form /> 
            <center><p style={{color:"orangered", fontFamily:"sans-serif"}}>Not SignedUp?<a href="/signup" style={{ textDecoration:"none", }}>Click here</a></p></center>
            
        </div>    
        </Main>
        <Footer />
      </div>
   
      
    );
  };
export default Login;
