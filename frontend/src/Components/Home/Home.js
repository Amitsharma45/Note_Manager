import React, { useState } from 'react'
import SideBar from '../SideBar/SideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import AddNote from '../AddNote/AddNote';
import { useGetNotesQuery } from '../../Feature/ApiSlice';
import Card from '../Card/Card';

export default function Home() {
    const { data } = useGetNotesQuery('bc8aa2-69-4deb-a9b2-d0896e489178')
    const [addToggel, setaddToggle] = useState(false)
    function addclose() {
        setaddToggle(!addToggel)
    }
    return (
        <>

            <div className='flex  h-min-[500px] w-[90%] mx-auto mt-8'>
                <div className=' lg:flex-[20%]  md:flex-[30%]  md:relative  absolute md:block   md:h-auto h-[400px] right-0 top-0'>
                    <SideBar />
                </div>
                <div className='lg:flex-[80%] md:flex-[70%] md:ml-12 '>
                    <div className='flex justify-center'>
                        <button className='bg-secondarylight dark:bg-slate-700 hover:opacity-60 dark:hover:bg-slate-400 dark:text-white  text-xl w-[200px] py-2 rounded-lg  x' onClick={() => setaddToggle(true)}>
                            <FontAwesomeIcon icon={faCirclePlus} className='mr-5' />
                            Add Note
                        </button>
                        {
                            addToggel ? (
                                <AddNote addclose={addclose} />
                            ) :
                                (
                                    <></>
                                )
                        }
                    </div>
                    <div className=' mt-8 dark:bg-slate-700 bg-secondarylight rounded-xl  '>
                        <div className='flex justify-between dark:text-white text-2xl mx-5 pt-5'>
                            <span>Your Notes</span>
                            <FontAwesomeIcon icon={faList} />
                        </div>
                        <div className='flex flex-wrap lg:justify-around items-center justify-center h-min-11 m-5 mt-2'>
                            {
                                data?.notes.length !== 0 ? (
                                    <>
                                        {
                                            data !== undefined && data?.notes.map((item) =>
                                                <Card item={item} key={item._id} />
                                            )
                                        }
                                    </>
                                ) : (
                                    <h1 className='dark:text-white text-4xl mb-11'>Nothing to Show</h1>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
