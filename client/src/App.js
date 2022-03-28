import './App.css';
import { Navbar } from './components/layouts/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { Fragment } from 'react';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/register';
import Login from './components/auth/login';
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <Router>
            <Navbar/>
            <div className='container'>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
              </Routes>
            </div>
        </Router>
      </ContactState>
    </AuthState>
  );
};

export default App;
