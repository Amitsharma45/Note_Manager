import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNotesMedical, faThumbtack } from '@fortawesome/free-solid-svg-icons';
export default function Home() {
    ''
    const data = [{ name: "All Notes", icon: 'faThumbtack' }, { name: "Pin Notes", icon: 'faThumbtack' }, { name: "All Notes", icon: 'faThumbtack' }, { name: "All Notes", icon: 'faThumbtack' }, { name: "All Notes", icon: 'faThumbtack' }]
    return (
        <div className='flex  h-min-[500px] w-[90%] mx-auto mt-8'>
            <div className=' md:flex-[20%] md:relative absolute md:block hidden  w-[200px]  md:h-auto h-[600px] left-0 top-0'>
                <div className='mt-10'>

                    <div className='border rounded-lg dark:text-white my-8 mx-4 py-3 pl-4' >
                        <FontAwesomeIcon icon={faNotesMedical}  className='mr-2'/>
                        All Notes

                    </div>
                    <div className='border rounded-lg dark:text-white my-8 mx-4 py-3 pl-4' >
                        <FontAwesomeIcon icon={faThumbtack} />
                        All Notes

                    </div>
                    <div className='border rounded-lg dark:text-white my-8 mx-4 py-3 pl-4' >
                        <FontAwesomeIcon icon={faThumbtack} />
                        All Notes

                    </div>
                    <div className='border rounded-lg dark:text-white my-8 mx-4 py-3 pl-4' >
                        <FontAwesomeIcon icon={faThumbtack} />
                        All Notes

                    </div>

                    <div className='border rounded-lg dark:text-white my-8 mx-4 py-3 pl-4' >
                        <FontAwesomeIcon icon={faThumbtack} />
                        All Notes

                    </div>


                </div>
            </div>
            <div className=' flex-[80%] '>
                <div className='flex flex-wrap md:justify-between items-center justify-center m-5'>
                    {
                        data.map((i) =>
                            <div className='w-[250px] h-[220px]  border-black bg-black bg-opacity-10 dark:text-white text-slate-800  rounded-xl my-5 p-5'>
                                {i.name}

                                {i.icon}
                            </div>
                        )
                    }


                </div>

            </div>

        </div>
    )
}
