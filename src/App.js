import './App.css';
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Talkshow from './pages/Talkshow/Talkshow';
import Competition from './pages/Competition/Competition';
import Seminar from './pages/Seminar/Seminar';
import Workshop from './pages/Workshop/Workshop';
import Lomba1 from './pages/Competition/lomba/Lomba1';
import Lomba2 from './pages/Competition/lomba/Lomba2'
import Lomba3 from './pages/Competition/lomba/Lomba3';
import Jadwal from './pages/Jadwal';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='Competition' element={<Competition/>}/>
          <Route path='Competition/lomba1' element={<Lomba1/>}/>
          <Route path='Competition/lomba2' element={<Lomba2/>}/>
          <Route path='Competition/lomba3' element={<Lomba3/>}/>
          <Route path='Talkshow' element={<Talkshow/>} />
          <Route path='Seminar' element={<Seminar/>} />
          <Route path='Workshop' element={<Workshop/>} />
          <Route path='Jadwal' element={<Jadwal/>} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
