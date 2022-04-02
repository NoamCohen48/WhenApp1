import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap';

import './App.css';
import LoginForm from './Pages/Forms/Login/LoginForm.js';
import RegisterForm from './Pages/Forms/Register/RegisterForm';

function App(props) {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
