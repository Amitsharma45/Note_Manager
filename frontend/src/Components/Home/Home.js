import React, { useState } from 'react'
import SideBar from '../SideBar/SideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import AddNote from '../AddNote/AddNote';
import { useGetNotesQuery } from '../../Feature/ApiSlice';
import Card from '../Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addToggles } from '../../Feature/toggleSlice';
export default function Home() {

    const dispatch = useDispatch();
    const { addNote } = useSelector(state => state.ToggleSlice)
    const { data } = useGetNotesQuery('bc8aa2-69-4deb-a9b2-d0896e489178')
    return (
        <>
            
            <div className='lg:flex-[80%] md:flex-[70%] md:ml-12 '>
                <div className='flex justify-center'>
                    <button className='bg-secondarylight dark:bg-slate-700 hover:opacity-60 dark:hover:bg-slate-400 dark:text-white  text-xl w-full py-4 rounded-lg text-start pl-9  ' onClick={() => {
                        dispatch(addToggles())
                    }}>
                        <FontAwesomeIcon icon={faCirclePlus} className='mr-5' />
                        Add Note
                    </button>
                    {
                        addNote ? (
                            <AddNote />
                        ) :
                            (
                                <></>
                            )
                    }
                </div>
                <div className=' mt-8 dark:bg-slate-700 bg-secondarylight rounded-xl  '>
                    <div className='flex justify-between dark:text-white text-2xl mx-5 pt-5'>
                        <span className='font-semibold text-3xl underline '>Your Notes :-</span>
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
        </>
    )
}
