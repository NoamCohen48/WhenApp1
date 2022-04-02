import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap';

import './App.css';
import LoginForm from './Pages/Forms/Login/LoginForm.js';

function App(props) {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
