/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Img from './login.png'
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { Formik, Form } from 'formik';
function Login() {
    const SignupSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().min(6, 'password length should greater then 6').required('Required'),
    });
    return (
        <div className='flex justify-center items-center '>
            <div className='bg-black h-[480px] md:w-[780px]   flw bg-opacity-10 flex  md:mt-8 mt-[100px] rounded-2xl pt-5 shadow-lg '>
                <div className='flex justify-center items-center '>
                    <img className='md:block hidden  sm:w-[350px] w-[400px] h-[400px]' src={Img} />
                </div>
                <div className='sm:w-[400px]  w-[350px] z-10 dark:text-[#38bdf8]  flex flex-col items-center  '>
                    <div className='font-semibold md:text-4xl'>Login</div>
                    <Formik
                        initialValues={{
                            email: '',
                            password: ''
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={(values) => {
                            console.log(values);
                        }}

                    >
                        {({ errors, touched, handleChange, handleBlur, values }) => (
                            <Form className='mt-2 flex flex-col items-center'>
                                <div className='my-2'>
                                    <div className='my-2 md:text-xl'>Emaill :-</div>
                                    <input name="email"
                                        id="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className='h-[40px] w-[300px] pl-2 bg-gray-600 bg-opacity-40 dark:bg-black dark:bg-opacity-40 rounded-md placeholder:text-black dark:placeholder:text-white' placeholder='email Id' />
                                    {errors.email && touched.email ? <div className='err text-red-600  font-semibold'>{errors.email}</div> : null}
                                </div>
                                <div className='my-2'>
                                    <div className='my-2 md:text-xl'>Password:-</div>
                                    <input name="password" onChange={handleChange}
                                        onBlur={handleBlur} id="password" className='h-[40px] w-[300px] pl-2 bg-gray-600 bg-opacity-40 placeholder:text-black dark:bg-black dark:bg-opacity-40 rounded-md dark:placeholder:text-white' placeholder='password' />
                                    {errors.password && touched.password ? (
                                        <div className=' text-red-600 font-semibold'>{errors.password}</div>
                                    ) : null}
                                </div>

                                <button type='submit' className='my-2 dark:bg-[#38bdf8] bg-gray-500 text-white w-[300px] rounded-md h-[35px] text-xl' >Login</button>
                                <div className='text-center my-1'>OR</div>
                                <button type='button' className='my-2 dark:bg-[#38bdf8] bg-gray-500 text-white w-[300px] rounded-md h-[35px] text-xl' >Demo Login</button>
                                <div className=''>
                                    <Link to='/Register' className='inline-block pl-1'>Create Account?</Link>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Login