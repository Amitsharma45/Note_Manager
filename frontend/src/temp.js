import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Components/Home/Home';
import SideBar from './Components/SideBar/SideBar';
import FavoriteNote from './Components/FavoriteNotes/FavoriteNotes';
import ArchiveNote from './Components/ArchiveNote/ArchiveNote';
function Temp() {
  return (
    <div>
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
    </div>
  )
}

export default Temp