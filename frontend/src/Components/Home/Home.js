import React, { useEffect } from 'react'
import { DotWave } from '@uiball/loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import AddNote from '../AddNote/AddNote';
import { useGetNotesQuery } from '../../Feature/ApiSlice';
import Card from '../Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addToggles } from '../../Feature/toggleSlice';
import SideBar from '../SideBar/SideBar';
export default function Home() {

    const dispatch = useDispatch();
    const { addNote } = useSelector(state => state.ToggleSlice)
    const { data, isLoading } = useGetNotesQuery('bc8aa2-69-4deb-a9b2-d0896e489178');
    function isArchive(item) {
        if (!item.isArchive) {
            return <Card item={item} key={item._id} />;
        }
        return
    }
    useEffect(() => {
      const token= localStorage.getItem('JWT');
      console.log('token',token)
    }, [])
    

    return (
        <>
            <div className='flex  h-min-[500px] w-[90%] mx-auto mt-8'>
                <div className='z-10 lg:flex-[20%]  md:flex-[30%]  md:relative  absolute md:block   md:h-auto h-[400px] right-0 top-0'>
                    <SideBar />
                </div>

                <div className='lg:flex-[80%] md:flex-[70%] md:ml-12 flex-[100%] '>
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
                    <div className=' mt-8 dark:bg-slate-700 bg-secondarylight rounded-xl  min-h-[200px] '>
                        <div className='flex justify-between dark:text-white text-2xl mx-5 pt-5 w-full'>
                            <span className='font-semibold text-3xl underline '>Your Notes :-</span>
                            {/* <FontAwesomeIcon icon={faList} /> */}
                        </div>
                        {
                            isLoading ? (
                                <div className='text-3xl mt-5 flex justify-center h-[200px] pt-10'>
                                    <DotWave
                                        size={80}
                                        speed={1}
                                        color="white"
                                    />
                                </div>
                            ) : (
                                <div className='flex flex-wrap lg:justify-around items-center justify-center h-min-11 m-5 mt-2'>
                                    {
                                        data.notes !== undefined && data?.notes?.length !== 0 ? (
                                            <>
                                                {
                                                    data !== undefined && data?.notes?.map((item) =>
                                                        isArchive(item)
                                                    )
                                                }
                                            </>
                                        ) : (
                                            <h1 className='dark:text-white text-2xl md:text-4xl py-[100px]'>Please Add some Notes!!</h1>
                                        )
                                    }
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
