import React from 'react'
import SideBar from '../SideBar/SideBar'

export default function Home() {
    ''
    const data = [{ name: "All Notes", icon: 'faThumbtack' }, { name: "Pin Notes", icon: 'faThumbtack' }, { name: "All Notes", icon: 'faThumbtack' }, { name: "All Notes", icon: 'faThumbtack' }, { name: "All Notes", icon: 'faThumbtack' }]
    return (
        <div className='flex  h-min-[500px] w-[90%] mx-auto mt-8'>
            <div className=' md:flex-[20%] md:relative  absolute md:block      md:h-auto h-[600px] right-0 top-0'>
                <SideBar />
            </div>
            <div className=' flex-[80%] dark:bg-slate-800 bg-[#fefefe] rounded-xl md:ml-12 '>
                <div className='flex flex-wrap md:justify-between items-center justify-center m-5'>
                    {
                        data.map((i) =>
                            <div className='w-[250px] h-[220px]  border-black bg-[#FBFBFB] dark:bg-black dark:bg-opacity-10 dark:text-white text-slate-800  rounded-xl my-5 p-5'>
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
