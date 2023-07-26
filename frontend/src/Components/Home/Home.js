import React from 'react'
import SideBar from '../SideBar/SideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import AddNote from '../AddNote/AddNote';
export default function Home() {

    const data = [{ name: "All Notes", icon: 'faThumbtack' }, { name: "Pin Notes", icon: 'faThumbtack' }, { name: "All Notes", icon: 'faThumbtack' }, { name: "All Notes", icon: 'faThumbtack' }, { name: "All Notes", icon: 'faThumbtack' }]
    return (
        <>

            <div className='flex  h-min-[500px] w-[90%] mx-auto mt-8'>
                <div className=' lg:flex-[20%]  md:flex-[30%]  md:relative  absolute md:block   md:h-auto h-[400px] right-0 top-0'>
                    <SideBar />
                </div>
                <div className='lg:flex-[80%] md:flex-[70%] md:ml-12 '>
                    <AddNote />
                    <div className='  dark:bg-slate-700 bg-[#fefefe] rounded-xl  '>
                        <div className='flex flex-wrap lg:justify-around items-center justify-center m-5 '>
                            {
                                data.map((i) =>
                                    <div className='md:w-[350px] w-[300px] overflow-hidden h-min-[250px]  border-black bg-[#FBFBFB]  dark:bg-black dark:bg-opacity-10 dark:text-white text-slate-800  rounded-xl my-5 '>
                                        <div className='border-b-[1px] px-5 pt-4 pb-2 text-xl'>Tittle of Notes</div>

                                        <div className='px-5 py-5'>
                                            Virtual Digital Marketing Course every week on Monday, Wednesday and Saturday.Virtual Digital
                                            Virtual Digital Marketing Course every week on Monday, Wednesday and Saturday.Virtual Digital
                                            Virtual Digital Ma
                                        </div>
                                        <div className='border-t-[1px] px-5 py-3 text-right dark:bg-slate-800 '>
                                            <FontAwesomeIcon icon={faCalendarDays} className='mr-2' />
                                            25/07/2023
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
