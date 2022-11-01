import './App.css';
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Talkshow from './pages/Talkshow/Talkshow';
import Competition from './pages/Competition/Competition';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='Talkshow' element={<Talkshow/>} />
          <Route path='/Competition' element={<Competition/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
