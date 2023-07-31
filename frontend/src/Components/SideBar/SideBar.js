import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNotesMedical, faArrowRightFromBracket,faTrashCan,faThumbtack,faShare ,faBoxArchive} from '@fortawesome/free-solid-svg-icons';
export default function SideBar() {
    const [menu, setmenu] = React.useState(true);
    return (
        <div className={`md:w-auto ${menu ? 'w-[50px]' : 'w-[300px]'}  rounded-xl dark:bg-slate-700 bg-secondarylight   transition-transform ease-in-out duration-300 `}>
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
            <div className={`pt-8  ${menu ? 'hidden' : 'block'} h-screen md:block`}>
                <div className='border-b-[1px] flex items-center hover:bg-slate-100 hover:dark:bg-slate-800  text-black   dark:text-white mx-4 py-4 ' >
                    <div className='justify-center items-center mr-2  flex rounded-full h-10 w-10 bg-gray-200 dark:bg-slate-800'>AS</div>
                    <span className='text-xl'> User Profile</span>
                </div>
                <div className='border-b-[1px] hover:bg-slate-100 hover:dark:bg-slate-800  dark:text-white mx-4 py-4 pl-4' >
                    <FontAwesomeIcon icon={faNotesMedical} className='mr-2' />
                    All Notes
                </div>
                <div className='border-b-[1px] hover:bg-slate-100 hover:dark:bg-slate-800 dark:text-white  mx-4 py-4 pl-4' >
                <FontAwesomeIcon icon={faThumbtack} className='mr-2' />
                    Pin Notes
                </div>
                <div className='border-b-[1px] hover:bg-slate-100 hover:dark:bg-slate-800 dark:text-white  mx-4 py-4 pl-4' >
                    <FontAwesomeIcon icon={faShare} className='mr-2' />
                    Shared Notes
                </div>
                <div className='border-b-[1px] hover:bg-slate-100 hover:dark:bg-slate-800 dark:text-white  mx-4 py-4 pl-4' >
                    <FontAwesomeIcon icon={faBoxArchive} className='mr-2' />
                    Archive
                </div>
                <div className='border-b-[1px] hover:bg-slate-100 hover:dark:bg-slate-800 dark:text-white  mx-4 py-4 pl-4' >
                    <FontAwesomeIcon icon={faTrashCan} className='mr-2' />
                    Bin
                </div>
                <div className='border-b-[1px] hover:bg-slate-100 hover:dark:bg-slate-800 dark:text-white  mx-4 py-4 pl-4' >
                <FontAwesomeIcon icon={faArrowRightFromBracket} className='mr-2'/>
                    Log Out
                </div>
            </div>
        </div>
    )
}
