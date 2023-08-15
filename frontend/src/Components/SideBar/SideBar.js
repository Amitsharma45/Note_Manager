/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNotesMedical, faDownLong, faUpLong,faIdBadge, faArrowRightFromBracket, faTrashCan, faThumbtack, faShare, faBoxArchive } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import HOC from '../HOC/HOC';
import moment from 'moment';
import Img from './img.png'

function SideBar(props) {
    const { result } = props;
    const { data } = result;
    const [menu, setmenu] = React.useState(true);
    function logout() {
        localStorage.removeItem('JWT');
        toast.success('Logout Success', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    const [toggle, settoggle] = React.useState(false);
    return (
        <div className={`md:w-auto ${menu ? 'w-[50px]' : 'w-[300px]'}  rounded-xl dark:bg-slate-700 bg-secondarylight   transition-transform ease-in-out duration-300 `} onClick={() => setmenu(!menu)}>
            <div className='text-4xl h-[50px] px-2 text-slate-900 dark:text-white md:hidden  block bg-secondarylight dark:bg-slate-900' >
                <button className="text-white" >
                    <svg
                        className="h-6 w-6 text-black dark:text-white"
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
            <div className={`pt-8  ${menu ? 'hidden' : 'block'}  md:block px-2`}>
                <Link className='w-full   flex   text-black   dark:text-white px-2 py-4  flex-col' >
                    <div className='flex items-center border-b-[2px] pb-1 border-b-slate-900' onClick={() => settoggle(!toggle)}>
                        <div className='justify-center items-center text-2xl  flex rounded-full h-[45px] w-[55px] bg-gray-200 dark:bg-slate-800'>{data?.data?.fullname[0]}</div>
                        <div className='w-full flex justify-between items-center  px-1 '>
                            <span className='text-2xl'> {data?.data?.fullname}</span>
                            {
                                !toggle ?
                                    <FontAwesomeIcon icon={faDownLong} className=' text-sm ' /> :
                                    <FontAwesomeIcon icon={faUpLong} className=' text-sm ' />
                                    
                            }

                        </div>
                    </div>
                    <div className={`${toggle ? 'h-[110px]' : "h-[0px]"} overflow-hidden transition-all ease-in-out duration-
                    700  text-center   `}>
                        <div className=' mt-2'>
                            Email I'D : <span className='text-sm'> {data?.data?.email}</span>
                        </div>
                        <div className='border-b-[2px] border-b-slate-900'>
                            Accout Created On:
                            <div>
                                {moment(data?.data?.createdAt).format('DD-MM-YYYY')}
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to='/home' className='w-full border-b-gray-700 dark:border-b-white inline-block border-b-[2px] hover:bg-slate-100 hover:dark:bg-slate-800  dark:text-white   py-4 pl-4' >
                    <FontAwesomeIcon icon={faNotesMedical} className='mr-2' />
                    All Notes
                </Link>
                <Link to='/favoriteNote' className=' inline-block border-b-[2px] border-b-gray-700 dark:border-b-white hover:bg-slate-100 hover:dark:bg-slate-800 dark:text-white  w-full  py-4 pl-4' >
                    <FontAwesomeIcon icon={faThumbtack} className='mr-2' />
                    Favorite Notes
                </Link>

                <Link to='/archiveeNote' className='border-b-[2px] border-b-gray-700 dark:border-b-white inline-block hover:bg-slate-100 hover:dark:bg-slate-800 dark:text-white w-full  py-4 pl-4' >
                    <FontAwesomeIcon icon={faBoxArchive} className='mr-2' />
                    Archive
                </Link>
                <Link to='/Trash' className='border-b-[2px] border-b-gray-700 dark:border-b-white inline-block hover:bg-slate-100 hover:dark:bg-slate-800 dark:text-white  w-full  py-4 pl-4' >
                    <FontAwesomeIcon icon={faTrashCan} className='mr-2' />
                    Trash
                </Link>
                <Link to='/Contact' className='w-full border-b-gray-700 dark:border-b-white inline-block border-b-[2px] hover:bg-slate-100 hover:dark:bg-slate-800  dark:text-white   py-4 pl-4' >
                    <FontAwesomeIcon icon={faIdBadge} className='mr-2' />
                    Contact Us
                </Link>
                <Link to='/login' onClick={logout} className='border-b-[2px] border-b-gray-700 dark:border-b-white inline-block hover:bg-slate-100 hover:dark:bg-slate-800 dark:text-white  w-full py-4 pl-4' >
                    <FontAwesomeIcon icon={faArrowRightFromBracket} className='mr-2' />
                    Log Out
                </Link>
                <img src={Img}  className='mt-5 w-[190px] h-[170px] mx-auto' />
            </div>
        </div>
    )
}

export default HOC(SideBar)