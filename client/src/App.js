import './App.css';
import { Navbar } from './components/layouts/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { Fragment } from 'react';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ContactState from './context/contact/ContactState';

const App = () => {
  return (
    <ContactState>
      <Router>
          <Navbar/>
          <div className='container'>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
            </Routes>
          </div>
      </Router>
    </ContactState>
  );
};

export default App;
