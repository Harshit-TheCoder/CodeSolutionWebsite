import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Home from './home';
import Header from './components/header';
import Login from "./login";
import SignUp from "./signup";
import Programs from './programs';
import Vaults from "./vaults";

function App() {
  
  return (

      <Router>
        <Routes>
          <Route element={<Header />} />
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/vaults" element={<Vaults />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
   
  );
}

export default App;
