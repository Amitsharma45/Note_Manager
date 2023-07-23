/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import logo from '../Images/logo.png'
export default function Appbar(props) {
    const [mode, setmode] = useState(true);
    return (
        <>
            <nav className={`w-full h-[50px] md:h-[50px] overflow-hidden z-10 bg-white  px-4 md:px-6 dark:bg-slate-900   `}>
                <div className='h-[50px] flex justify-between items-center'>
                    <div className='text-slate-800 font-bold text-xl flex cursor-pointer dark:text-white'>
                        <img className='h-8 w-9 mr-3' src={logo} />
                        Task Manager
                    </div>

                    <div className='flex cursor-pointer items-center'>
                        <div className='md:mr-6 mr-12' onClick={() => {
                            setmode(!mode)
                            props.toggleMode()
                        }}>
                            {
                                !mode ? (
                                    <img className='md:w-9 md:h-9 w-7 h-7 bg-yellow-100 rounded-full p-1' src='https://cdn-icons-png.flaticon.com/128/5043/5043117.png' />
                                ) : (
                                    <img className='md:w-9 md:h-9 w-7 h-7' src='https://cdn-icons-png.flaticon.com/128/7645/7645197.png' />
                                )
                            }
                        </div>

                    </div>
                </div>
            </nav>
        </>

    )
}
// ${menu ? 'hidden' : 'block'}
