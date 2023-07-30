import React, { useState } from 'react';
import Appbar from './Components/Appbar/Appbar';
import { Route, Routes,Navigate } from 'react-router-dom';
import Loader from './Components/Loader/Loader';
import { useEffect } from 'react';
import Home from './Components/Home/Home';
import './App.css'


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
    <div className={`${darkMode ? 'dark' : ''} `} >
      <div className='relative h-full bg-[#f1f4fb] dark:bg-slate-800'>
        {
          loading === true ? (
            <Loader />
          ) : (
            <>
              <Appbar toggleMode={toggleMode} />
              <Routes  >
              <Route path="/" element={<Navigate to="/home" />} />
                <Route path='/home' element={<Home />} />
              </Routes>
            </>
          )
        }
      </div>


    </div >
  );
}

export default App;
