import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className='min-h-screen bg-gray-900 text-white'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<AboutMe/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  )
}