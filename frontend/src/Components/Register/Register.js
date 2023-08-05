/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Img from './login.png'
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
function Register() {
    // const registerschema = Yup.object().shape({
    //     fullname: Yup.string()
    //       .min(2, 'Too Short!')
    //       .max(20, 'Too Long!')
    //       .required('Required')
    //       .matches(/^[A-Za-z\s]+$/, 'Only alphabets are allowed for this field'),
    //     email: Yup.string().email('Invalid email').required('Required'),
    //     password: Yup.string().min(6, 'Password should be at least 6 characters long').required('Required'),
    //     confirmpassword: Yup.string().when('password', {
    //       is: (val) => (val && val.length > 0 ? true : false),
    //       then: Yup.string().oneOf([Yup.ref('password')], 'Both passwords need to be the same'),
    //     }).required('Required'),
    //   });
      const registerschema = Yup.object().shape({
        fullname: Yup.string()
          .min(2, 'Too Short!')
          .max(20, 'Too Long!')
          .required('Required')
          .matches(/^[A-Za-z\s]+$/, 'Only alphabets are allowed for this field'),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().min(6, 'Password should be at least 6  long').required('Required'),
        confirmpassword: Yup.string()
          .required('Required')
          .test('passwords-match', 'Both passwords need to be the same', function (value) {
            return value === this.resolve(Yup.ref('password'));
          }),
      });
            
    return (
        <div className='flex justify-center items-center '>
            <div className='bg-black h-min-[480px] md:w-[800px] sm:w-[730px]   flw bg-opacity-10 flex  md:mt-8 mt-[100px] rounded-2xl pt-5 shadow-lg '>

                <div className='sm:w-[400px]  w-[350px] z-10 dark:text-[#38bdf8]  flex flex-col items-center  '>
                    <div className='font-semibold md:text-4xl'>Register</div>
                    <Formik
                        initialValues={{
                            fullname: '',
                            email: '',
                            password: '',
                            confirmpassword: ''
                        }}
                        validationSchema={registerschema}
                        onSubmit={(values) => {
                            console.log(values)
                        }}
                    >
                        {({ errors, touched, handleChange, handleBlur, values }) => (

                            <Form className='mt-2 flex flex-col items-center'>
                                <div className='my-1'>
                                    <div className='my-2 '>Full Name :-</div>
                                    <input name='fullname' onChange={handleChange}
                                        onBlur={handleBlur} className='h-[40px] w-[300px] pl-2 bg-gray-600 bg-opacity-40 dark:bg-black dark:bg-opacity-40 rounded-md placeholder:text-black dark:placeholder:text-white' placeholder='Full Name' />
                                    {errors.fullname && touched.fullname ? (
                                        <div className='text-red-600  font-semibold'>{errors.fullname}</div>) : null}
                                </div>
                                <div className='my-1'>
                                    <div className='my-2 '>Emaill :-</div>
                                    <input name='email' onChange={handleChange}
                                        onBlur={handleBlur} className='h-[40px] w-[300px] pl-2 bg-gray-600 bg-opacity-40 dark:bg-black dark:bg-opacity-40 rounded-md placeholder:text-black dark:placeholder:text-white' placeholder='email Id' />
                                    {errors.email && touched.email ? <div className='err text-red-600  font-semibold'>{errors.email}</div> : null}
                                </div>

                                <div className='my-1'>
                                    <div className='my-2 '>Password:-</div>
                                    <input name='password' onChange={handleChange}
                                        onBlur={handleBlur} className='h-[40px] w-[300px] pl-2 bg-gray-600 bg-opacity-40 placeholder:text-black dark:bg-black dark:bg-opacity-40 rounded-md dark:placeholder:text-white' placeholder='password' />
                                    {errors.password && touched.password ? (
                                        <div className='text-red-600  font-semibold'>{errors.password}</div>
                                    ) : null}
                                </div>
                                <div className='my-1'>
                                    <div className='my-2 '>Confirmed Password :-</div>
                                    <input name='confirmpassword' onChange={handleChange}
                                        onBlur={handleBlur} className='h-[40px] w-[300px] pl-2 bg-gray-600 bg-opacity-40 dark:bg-black dark:bg-opacity-40 rounded-md placeholder:text-black dark:placeholder:text-white' placeholder='confirm password' />
                                    {errors.confirmpassword && touched.confirmpassword ? (
                                        <div className='text-red-600  font-semibold'>{errors.confirmpassword}</div>
                                    ) : null}
                                </div>

                                <button type='submit' className='my-3 dark:bg-[#38bdf8] bg-gray-500 text-white w-[300px] rounded-md h-[35px] text-xl' >
                                    Register
                                </button>
                                <div className=''>
                                    <Link to='/login' className='inline-block pl-1'>Already Have account?</Link>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
                <div className='flex justify-center items-center '>
                    <img className='md:block hidden  sm:w-[350px] w-[400px] h-[400px] ' src={Img} />
                </div>
            </div>
        </div>
    )
}

export default Register