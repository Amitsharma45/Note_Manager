import React, { useState } from 'react';
import Appbar from './Components/Appbar/Appbar';
import { Route, Routes } from 'react-router-dom';
import Loader from './Components/Loader/Loader';
import { useEffect } from 'react';

function App() {
  const [loading, setloading] = useState(true);
  const [darkMode, setdarkMode] = useState(false);
  const toggleMode = () => {
    setdarkMode(!darkMode);
  }
  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 1100);
  }, [])
  return (
    <div className={`bg-gray-200 h-screen  ${darkMode ? 'dark' : ''}`} >
      {
        loading === true ? (
          <Loader />
        ) : (

          <Routes  >
            <Route path='/' element={<Appbar toggleMode={toggleMode} />} />
          </Routes>
        )
      }
    </div >
  );
}

export default App;
