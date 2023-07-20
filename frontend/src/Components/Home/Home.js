import React from 'react'

export default function Home() {
    const data = ["Saab", "Volvo", "BMW", "Saab", "Volvo", "BMW", "Saab", "Volvo", "BMW"]
    return (
        <div className='flex border h-min-[500px] w-[90%] mx-auto mt-8'>
            <div className='border md:flex-[20%] md:relative absolute md:block hidden  w-[200px]  md:h-auto h-[600px] left-0 top-0'>

            </div>
            <div className=' flex-[80%] '>
                <div className='flex flex-wrap justify-between items-center m-5'>
                    {
                        data.map((i) =>
                            <div className='w-[250px] h-[220px] border-black bg-black bg-opacity-10 dark:text-white text-slate-800  rounded-xl my-5 p-5'>
                                {i}
                            </div>
                        )
                    }


                </div>

            </div>

        </div>
    )
}
