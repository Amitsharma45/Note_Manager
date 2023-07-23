import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNotesMedical, faThumbtack } from '@fortawesome/free-solid-svg-icons';
export default function SideBar() {
    const [menu, setmenu] = React.useState(true);
    return (
        <div className={`md:w-auto ${menu?'w-[50px]':'w-[300px]'}  rounded-xl dark:bg-slate-800 bg-white   transition-transform ease-in-out duration-300`}>
            <div className='text-4xl h-[50px] px-2 text-slate-900 dark:text-white md:hidden  block bg-white dark:bg-slate-900' >
                <button className="text-white" onClick={() => setmenu(!menu)}>
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
            <div className={`pt-2  ${menu?'hidden':'block'} h-screen md:block`}>

                <div className='border rounded-lg dark:text-white my-8 mx-4 py-3 pl-4' >
                    <FontAwesomeIcon icon={faNotesMedical} className='mr-2' />
                    All Notes

                </div>
                <div className='border rounded-lg dark:text-white my-8 mx-4 py-3 pl-4' >
                    <FontAwesomeIcon icon={faThumbtack} className='mr-2' />
                    Pin Notes

                </div>
                <div className='border rounded-lg dark:text-white my-8 mx-4 py-3 pl-4' >
                    <FontAwesomeIcon icon={faThumbtack} className='mr-2' />
                    Favorite

                </div>

                <div className='border rounded-lg dark:text-white my-8 mx-4 py-3 pl-4' >
                    <FontAwesomeIcon icon={faThumbtack} className='mr-2' />
                    Trash

                </div>


            </div>
        </div>
    )
}
