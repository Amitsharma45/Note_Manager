/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import loader from '../Images/loader.gif'
export default function Loader() {
  return (
    <div className='bg-[#f3f6fd] flex items-center justify-center h-screen'>
        <img className='w-[350px]' src={loader} />
    </div>
  )
}
