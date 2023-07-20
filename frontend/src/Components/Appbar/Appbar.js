/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import logo from '../Images/logo.png'
export default function Appbar(props) {
    const [mode, setmode] = useState(true);
    return (
        <>
            <nav className='w-full h-[50px] bg-slate-400 flex justify-between items-center px-4 md:px-6 dark:bg-slate-800'>
                <div className='text-slate-800 font-bold text-xl flex cursor-pointer dark:text-white'>
                    <img className='h-8 w-9 mr-3' src={logo} />
                    Task Manager
                </div>
                <ul className='md:flex justify-between items-center  hidden'>
                    <li className='mx-4 text-slate-900 font-semibold cursor-pointer dark:text-white'>Home</li>
                    <li className='mx-4 text-slate-900 font-semibold cursor-pointer dark:text-white'>About</li>
                    <li className='mx-4 text-slate-900 font-semibold cursor-pointer dark:text-white'>Contact</li>
                </ul>
                <div className='flex cursor-pointer items-center '>
                    <div className='mr-5' onClick={() => {
                        setmode(!mode)
                        props.toggleMode()
                    }}>
                        {
                            mode ? (
                                <img className='w-9 h-9 bg-yellow-100 rounded-full p-1' src='https://cdn-icons-png.flaticon.com/128/5043/5043117.png' />
                            ) : (
                                <img className='w-8 h-8' src='https://cdn-icons-png.flaticon.com/128/7645/7645197.png' />
                            )
                        }
                    </div>
                    <div className='dark:text-white'>
                        User  Profile
                    </div>
                </div>
            </nav>
        </>

    )
}
