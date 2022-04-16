import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap';

import './App.css';
import ChatScreen from './Pages/ChatScreen/base/ChatScreen';
import LoginForm from './Pages/Login/LoginForm.js';
import RegisterForm from './Pages/Register/RegisterForm';

import './db/messages.js'
import ChatContextProvider from './Contexts/ChatContextProvider.js';
import { UserContextProvider } from './Contexts/UserContextProvider';
import { RenderContextProvider } from './Contexts/RenderContextProvider';

function App(props) {
  return (
    <UserContextProvider >
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<LoginForm />} />

          <Route path="/register" element={<RegisterForm />} />

          <Route path="/Chat" element={
            <ChatContextProvider>
              <RenderContextProvider>
                <ChatScreen />
              </RenderContextProvider>
            </ChatContextProvider>
          } />

        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
