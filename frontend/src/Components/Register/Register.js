/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Img from './login.png'
import { Link } from 'react-router-dom'
function Register() {
    return (
        <div className='flex justify-center items-center '>
            <div className='bg-black h-[480px] md:w-[800px] sm:w-[730px]   flw bg-opacity-10 flex  md:mt-8 mt-[100px] rounded-2xl pt-5 shadow-lg '>
                
                <div className='sm:w-[400px]  w-[350px] z-10 dark:text-[#38bdf8]  flex flex-col items-center  '>
                    <div className='font-semibold md:text-4xl'>Register</div>
                    <form className='mt-2 flex flex-col items-center'>
                        <div className='my-2'>
                            <div className='my-2 md:text-xl'>Emaill :-</div>
                            <input className='h-[40px] w-[300px] pl-2 bg-gray-600 bg-opacity-40 dark:bg-black dark:bg-opacity-40 rounded-md placeholder:text-black dark:placeholder:text-white' placeholder='email Id' />
                        </div>
                        <div className='my-2'>
                            <div className='my-2 md:text-xl'>Password:-</div>
                            <input className='h-[40px] w-[300px] pl-2 bg-gray-600 bg-opacity-40 placeholder:text-black dark:bg-black dark:bg-opacity-40 rounded-md dark:placeholder:text-white' placeholder='password' />
                        </div>

                        <button type='submit' className='my-2 dark:bg-[#38bdf8] bg-gray-500 text-white w-[300px] rounded-md h-[35px] text-xl' >Login</button>
                        <div className='text-center my-1'>OR</div>
                        <button type='submit' className='my-2 dark:bg-[#38bdf8] bg-gray-500 text-white w-[300px] rounded-md h-[35px] text-xl' >Demo Login</button>
                        <div className=''>
                            <Link to='/login' className='inline-block pl-1'>Already Have account?</Link>
                        </div>
                    </form>
                </div>
                <div className='flex justify-center items-center '>
                    <img className='md:block hidden  sm:w-[350px] w-[400px] h-[400px] ' src={Img} />
                </div>
            </div>
        </div>
    )
}

export default Register