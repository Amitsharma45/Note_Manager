import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { useGetNotesQuery } from '../../Feature/ApiSlice';
import Card from '../Card/Card';
import { DotWave } from '@uiball/loaders'

function ArchiveNote() {
    const { data, isLoading } = useGetNotesQuery('bc8aa2-69-4deb-a9b2-d0896e489178')
    function isArchive(item) {
        if (item.isArchive) {
            return <Card item={item} key={item._id} />;
        }
        return
    }
    return (
        <>
            <div className='lg:flex-[80%] md:flex-[70%] md:ml-12 flex-[100%]'>
                <div className='  dark:bg-slate-700 bg-secondarylight rounded-xl  '>
                    <div className='flex justify-between dark:text-white text-2xl mx-5 pt-5'>
                        <span className='font-semibold text-3xl underline '>Archive Notes :-</span>
                        {/* <FontAwesomeIcon icon={faList} /> */}
                    </div>
                    <div className='flex flex-wrap lg:justify-around items-center justify-center min-h-[300px] md:m-5 mx-1 mt-2'>
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
                                                    isArchive(item)
                                                )
                                            }
                                        </>
                                    ) : (
                                        <div className='text-center dark:text-white md:text-4xl text-2xl md:mt-11 mt-2'>There is not any Note in Archive!</div>
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

export default ArchiveNote