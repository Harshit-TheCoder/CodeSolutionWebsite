import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Header from './components/header';
import Login from "./login";
import SignUp from "./signup";
import Programs from './programs';

function App() {
  
  return (

      <Router>
        <Routes>
          <Route element={<Header    />} />
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
   
  );
}

export default App;
