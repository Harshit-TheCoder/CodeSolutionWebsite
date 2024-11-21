import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Header from './components/header';
import Login from "./login";
import SignUp from "./signup";
import Programs from './programs';

function App() {
  const [mode,setMode] = useState('light');
  const toggleTheme=()=>{
    console.log("function triggered");
    console.log("mode before trigger");
    console.log(mode);
    setMode(mode === 'light' ? 'dark' : 'light');
    console.log("mode after trigger");
    console.log(mode);

  };
  return (

      <Router>

        <Routes>
          <Route element={<Header toggleTheme={toggleTheme} mode={mode}   />} />
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
   
  );
}

export default App;
