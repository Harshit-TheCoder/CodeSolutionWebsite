import React from "react";
import Header  from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import Form from "./components/signupform";

function SignUp(){
    return(

        <div>
            <Header />
            <Main>
            <div className="container" style={{ zIndex: "5",boxShadow: "5px 10px 8px 10px #888888", width:"800px", height:"600px"}}>
                <center><h1>SignUp:</h1></center>
                <Form /> 
            </div>

            </Main>
            <Footer />
        </div>
       
        
        
    );
}
export default SignUp;
