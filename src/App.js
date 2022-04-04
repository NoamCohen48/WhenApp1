import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap';

import './App.css';
import ChatScreen from './Pages/ChatScreen/ChatScreen';
import LoginForm from './Pages/Forms/Login/LoginForm.js';
import RegisterForm from './Pages/Forms/Register/RegisterForm';

import './db/messages.js'

function App(props) {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/Chat" element={<ChatScreen />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
