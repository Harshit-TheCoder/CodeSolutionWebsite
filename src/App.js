import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Home from './home';
import Header from './components/header';
import ShowProgram from './components/program';
import Programs from './programs';
import Vaults from "./vaults";
import Dashboard from './dashboard';
import Login from './login';
import SignUp from './signup';
import OtpAuth from './otpAuth';
import OtpAuthVerify from './otpAuthVerify';
import ExamPortal from './exam_portal';
import ExamUploadForm from './components/examUploadForm';
import TestReport from './components/TestReport';
import Leaderboard from './Leaderboard';
function App() {
  
  return (

      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          <Route element={<Header />} />
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/vaults" element={<Vaults />} />
          <Route path="/exam_portal_form" element={<ExamUploadForm />} />
          <Route path="/exam_portal" element={<ExamPortal />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/test_report" element={<TestReport />} />
          <Route path="/program/:id" element={<ShowProgram />} />
          <Route path="/otpauth" element={<OtpAuth />} />
          <Route path="/otpauthverify" element={<OtpAuthVerify />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          
        </Routes>
      </Router>
   
  );
}

export default App;
