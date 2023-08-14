import React, { useState } from 'react';
import Appbar from './Components/Appbar/Appbar';
import { Route, Routes, Navigate } from 'react-router-dom';
import Loader from './Components/Loader/Loader';
import { useEffect } from 'react';
import Home from './Components/Home/Home';
import './App.css'
import { ToastContainer } from 'react-toastify'
import FavoriteNote from './Components/FavoriteNotes/FavoriteNotes';
import ArchiveNote from './Components/ArchiveNote/ArchiveNote';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Contact from './Components/Contact/Contact';
import Trash from './Components/Trash/Trash';

function App() {
  const [loading, setloading] = useState(true);
  const [darkMode, setdarkMode] = useState(true);
  const toggleMode = () => {
    setdarkMode(!darkMode);
  }
  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 1100);
  }, [])
  return (
    <div className={`${darkMode ? 'dark' : ''}  `} >
      <div className='relative min-h-screen bg-[#f1f4fb] dark:bg-slate-800'>
        {
          loading === true ? (
            <Loader />
          ) : (
            <>
              <Appbar toggleMode={toggleMode} />
              <ToastContainer />
              <Routes  >
                <Route path='/login' element={<Login />} />
                <Route path='/Register' element={<Register />} />
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path='/home' element={<Home />} />
                <Route path='/Contact' element={<Contact />} />
                <Route path='/Trash' element={<Trash />} />
                <Route path='/favoriteNote' element={<FavoriteNote />} />
                <Route path='/archiveeNote' element={<ArchiveNote />} />
              </Routes>
            </>
          )
        }
      </div>
    </div >
  );
}

export default App;
