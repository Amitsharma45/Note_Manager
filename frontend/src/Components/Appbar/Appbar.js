/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import logo from '../Images/logo.png'
export default function Appbar(props) {
    const [mode, setmode] = useState(true);
    const [menu, setmenu] = useState(true);
    return (
        <>
            <nav className='w-full min-h-[50px]   bg-slate-400  px-4 md:px-6 dark:bg-slate-900 '>
                <div className='h-[50px] flex justify-between items-center'>
                    <div className='text-slate-800 font-bold text-xl flex cursor-pointer dark:text-white'>
                        <img className='h-8 w-9 mr-3' src={logo} />
                        Task Manager
                    </div>
                    <ul className='md:flex justify-between items-center  hidden'>
                        <li className='mx-4 text-slate-900 font-semibold cursor-pointer dark:text-white'>Home</li>
                        <li className='mx-4 text-slate-900 font-semibold cursor-pointer dark:text-white'>About</li>
                        <li className='mx-4 text-slate-900 font-semibold cursor-pointer dark:text-white'>Contact</li>
                    </ul>
                    <div className='flex cursor-pointer items-center'>
                        <div className='mr-6' onClick={() => {
                            setmode(!mode)
                            props.toggleMode()
                        }}>
                            {
                                mode ? (
                                    <img className='md:w-9 md:h-9 w-7 h-7 bg-yellow-100 rounded-full p-1' src='https://cdn-icons-png.flaticon.com/128/5043/5043117.png' />
                                ) : (
                                    <img className='md:w-9 md:h-9 w-7 h-7' src='https://cdn-icons-png.flaticon.com/128/7645/7645197.png' />
                                )
                            }
                        </div>
                        <div className='font-semibold bg-slate-600 px-4 py-1 rounded-[10px] text-white dark:bg-gray-600 hidden md:block '>
                            Login
                        </div>
                        <div className='text-4xl mr-2 text-slate-900 dark:text-white md:hidden  block' onClick={() => setmenu(!menu)}>
                        <button className="text-white" onClick={() => setmenu(!menu)}>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {!menu ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                )}
                            </svg>
                        </button>
                        </div>


                    </div>
                </div>
                <div className={`${menu ? 'hidden' : 'block'} md:hidden   pb-5 mt-4 transition-opacity duration-700 `}>
                    <ul className='flex flex-col justify-between items-center  '>
                        <li className='mx-4 text-slate-900 font-semibold cursor-pointer dark:text-white'>Home</li>
                        <li className='mx-4 text-slate-900 font-semibold cursor-pointer dark:text-white'>About</li>
                        <li className='mx-4 text-slate-900 font-semibold cursor-pointer dark:text-white'>Contact</li>
                        <li className='font-semibold bg-slate-600 px-4 py-1 rounded-[10px] text-white dark:bg-gray-600  mt-1'>
                            Login
                        </li>
                    </ul>
                </div>
            </nav>
        </>

    )
}
