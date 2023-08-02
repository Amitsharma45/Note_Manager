import React, { useState } from 'react';
import Appbar from './Components/Appbar/Appbar';
import { Route, Routes, Navigate } from 'react-router-dom';
import Loader from './Components/Loader/Loader';
import { useEffect } from 'react';
import Home from './Components/Home/Home';
import './App.css'
import { ToastContainer } from 'react-toastify'
import SideBar from './Components/SideBar/SideBar';
import FavoriteNote from './Components/FavoriteNotes/FavoriteNotes';
import ArchiveNote from './Components/ArchiveNote/ArchiveNote';

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
              <div className='flex  h-min-[500px] w-[90%] mx-auto mt-8'>
                <div className='z-10 lg:flex-[20%]  md:flex-[30%]  md:relative  absolute md:block   md:h-auto h-[400px] right-0 top-0'>
                  <SideBar />
                </div>
                <Routes  >
                  <Route path="/" element={<Navigate to="/home" />} />
                  <Route path='/home' element={<Home />} />
                  <Route path='/favoriteNote' element={<FavoriteNote />} />
                  <Route path='/archiveeNote' element={<ArchiveNote />} />
                </Routes>
              </div>
            </>
          )
        }
      </div>
    </div >
  );
}

export default App;
