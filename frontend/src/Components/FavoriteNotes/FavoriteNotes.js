import React, { useState, useEffect } from 'react'
import Card from '../Card/Card';
import { DotWave } from '@uiball/loaders'
import SideBar from '../SideBar/SideBar';
import HOC from '../HOC/HOC';
function FavoriteNote(props) {
    const { data, isLoading } = props;
    const [favdata, setfavdata] = useState([]);
    useEffect(() => {
        const temp = data?.notes?.filter((i) => i.isFavorite === true)
        setfavdata(temp)
    }, [data])

    return (
        <>
            <div className='flex  h-min-[500px] w-[90%] mx-auto mt-8'>
                <div className='z-10 lg:flex-[20%]  md:flex-[30%]  md:relative  absolute md:block   md:h-auto h-[400px] right-0 top-0'>
                    <SideBar />
                </div>

                <div className='lg:flex-[80%] md:flex-[70%] md:ml-12 flex-[100%]'>
                    <div className='  dark:bg-slate-700 bg-secondarylight rounded-xl  '>
                        <div className='flex justify-between dark:text-white text-2xl mx-5 pt-5'>
                            <span className='font-semibold text-3xl underline '>Favorite Notes :-</span>
                            {/* <FontAwesomeIcon icon={faList} /> */}
                        </div>
                        <div className='flex flex-wrap lg:justify-around items-center justify-center min-h-[300px] m-5 mt-2'>
                            {isLoading ? (
                                <div className='text-3xl mt-5 flex justify-center h-[200px] pt-10'>
                                    <DotWave
                                        size={80}
                                        speed={1}
                                        color="white"
                                    />
                                </div>
                            ) : (
                                <>
                                    {
                                        favdata !== undefined && favdata?.length !== 0 ? (
                                            <>
                                                {
                                                    favdata !== undefined && favdata?.map((item) =>
                                                        <Card item={item} key={item._id} />
                                                )
                                                }
                                            </>
                                        ) : (
                                            <h1 className='text-center dark:text-white md:text-4xl text-2xl md:mt-11 mt-2'>There is not any Note in Favorite!</h1>
                                        )
                                    }
                                </>
                            )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HOC(FavoriteNote)