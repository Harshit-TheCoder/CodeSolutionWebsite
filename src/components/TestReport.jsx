import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./header";
import Main from "./main";
const TestReport = () => {
  const location = useLocation();
  const report = location.state?.report?.report || [];
  const [question, setQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const sendQuestionToAI = async (e) =>{
    e.preventDefault();
    
    try {
      
      const response = await fetch("http://localhost:5000/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({question}),
      });
      
      const result = await response.json();
      console.log("AI Answer:", result);
      setChatHistory([...chatHistory, { user: question, ai: result.answer }]);
      setQuestion("");

    } catch (error) {
      console.error(error);
    }
  };

  const clearChat = (e) => {
    e.preventDefault();
    setChatHistory([]);
  }

  return (
    <>
    <Header />
    <Main>
        <div className="container" style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
          <h2 style={{color: "white"}}>Test Report</h2>
          <div className="container">
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >AI Assistant</button>
          </div>
          <br />
          {report.map((item, index) => (
            <div key={index} style={{ marginBottom: "20px", padding: "10px", border: "1px solid #ccc", backgroundColor: item.attempted ? "#fff" : "#ffcccc" }}>
              <h4>{item.question}</h4>
              <p><b>Status:</b> {item.attempted ? "Attempted" : "Not Attempted"}</p>
              <b>Feedback:</b>
              <p style={{ whiteSpace: "pre-wrap", backgroundColor: "#f1f1f1", padding: "10px", borderRadius: "5px", fontSize: "14px" }}>
                {item.feedback}
              </p>
            </div>
          ))}

          

          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" style={{height:"900px"}}>
                  <center><h5>Messages</h5></center>
                  <div className="container" style={{display:"flex", flexDirection:"column", height:"100%" }}>
                    
                    <div style={{height:"83%", overflowY:"scroll"}}>
                      {chatHistory.map((chat, index) => (
                        <div key={index} style={{ marginBottom: "10px" }}>
                          <p><b>You:</b> {chat.user}</p>
                          <p style={{ backgroundColor: "#dff0d8", padding: "8px", borderRadius: "5px" }}><b>AI:</b> {chat.ai}</p>
                        </div>
                      ))}
                    </div>

                    <div style={{height:"17%"}}>
                        <form style={{display:"flex", flexDirection:"row", gap:"3px"}}>
                          <input type="text" placeholder="Enter your message" className="form-control" 
                          style={{width:"350px"}}
                          value={question}
                            onChange={(e)=>setQuestion(e.target.value)} />
                          <button className="btn btn-success" onClick={(e)=>sendQuestionToAI(e)}>Ask AI</button>
                          
                        </form>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <form>
                    <button className="btn btn-danger" onClick={(e)=>clearChat(e)}>Clear Chat</button>
                  </form>
                  
                </div>
              </div>
            </div>
          </div>

        </div>
    </Main>
    </>
    
  );
};

export default TestReport;
