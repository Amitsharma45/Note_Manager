import React from 'react'
import SideBar from '../SideBar/SideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faTableCellsLarge, faList } from '@fortawesome/free-solid-svg-icons';
import AddNote from '../AddNote/AddNote';
import {useGetNotesQuery} from '../../Feature/ApiSlice';
import Card from '../Card/Card';

export default function Home() {
    const { data, error, isLoading } =  useGetNotesQuery('bc8aa2-69-4deb-a9b2-d0896e489178')
    console.log(data)
    return (
        <>

            <div className='flex  h-min-[500px] w-[90%] mx-auto mt-8'>
                <div className=' lg:flex-[20%]  md:flex-[30%]  md:relative  absolute md:block   md:h-auto h-[400px] right-0 top-0'>
                    <SideBar />
                </div>
                <div className='lg:flex-[80%] md:flex-[70%] md:ml-12 '>
                    <AddNote />
                    <div className=' mt-8 dark:bg-slate-700 bg-[#fefefe] rounded-xl  '>
                        <div className='text-end dark:text-white text-2xl mr-5 pt-5'>
                            <FontAwesomeIcon icon={faList} />
                        </div>
                        <div className='flex flex-wrap lg:justify-around items-center justify-center m-5 mt-2'>
                            {
                               data!== undefined && data?.notes.map((i) =>
                                    <Card i={i} key={i._id} />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
