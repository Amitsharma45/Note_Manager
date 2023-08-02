import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { useGetNotesQuery } from '../../Feature/ApiSlice';
import Card from '../Card/Card';
import { DotWave } from '@uiball/loaders'
export default function FavoriteNote() {

    const { data, isLoading } = useGetNotesQuery('bc8aa2-69-4deb-a9b2-d0896e489178')
    function isFavorite(item) {
        if (item.isFavorite) {
            return <Card item={item} key={item._id} />;
        }
        return
    }
    return (
        <>

            <div className='lg:flex-[80%] md:flex-[70%] md:ml-12 '>
                <div className='  dark:bg-slate-700 bg-secondarylight rounded-xl  '>
                    <div className='flex justify-between dark:text-white text-2xl mx-5 pt-5'>
                        <span className='font-semibold text-3xl underline '>Favorite Notes :-</span>
                        <FontAwesomeIcon icon={faList} />
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
                                    data?.notes !== undefined && data?.notes?.length !== 0 ? (
                                        <>
                                            {
                                                data !== undefined && data?.notes?.map((item) =>
                                                    isFavorite(item)
                                                )
                                            }
                                        </>
                                    ) : (
                                        <h1 className='dark:text-white text-4xl mb-11'>There is not any Note in Favorite!</h1>
                                    )
                                }
                            </>
                        )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
