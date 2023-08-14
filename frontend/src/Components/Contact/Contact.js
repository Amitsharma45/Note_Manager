import React, { useEffect } from 'react'
import HOC from '../HOC/HOC'
import SideBar from '../SideBar/SideBar';

function Contact(props) {
    



    return (
        <>
            <div className='flex  h-min-[500px] w-[90%] mx-auto mt-8'>
                <div className='z-10 lg:flex-[20%]  md:flex-[30%]  md:relative  absolute md:block   md:h-auto h-[400px] right-0 top-0'>
                    <SideBar />
                </div>

                <div className='lg:flex-[80%] md:flex-[70%] md:ml-12 flex-[100%] '>
                    <div className='flex justify-center mt-11'>
                        <div className='w-[350px]   dark:text-white flex-col  dark:bg-slate-700 rounded-3xl overflow-hidden'>
                            <img className='w-[350px] ' src="https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/229426802/original/add5f4a7c68951c493d2b3656024f57ed8b70b53.jpg" alt="..." />
                            <div className="card-body text-center py-5" style={{ backgroundColor: '#E3F2FD' }}>
                                <div className="text-black text-2xl font-semibold">Amit Sharma</div>
                                <div className="text-black text-xl font-semibold">B.Tech CSE</div>
                                <div className="flex justify-around mt-5">
                                    <a href="https://www.linkedin.com/in/amit-sharma-047434177/" target="blank">
                                        <img className='h-10 w-10' src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedIn" />
                                    </a>
                                    <a href="mailto:sharma.amit20111@gmail.com" target="blank">
                                        {' '}
                                        <img className='h-10 w-10' src='https://cdn-icons-png.flaticon.com/128/5968/5968534.png' alt="linkedIn" />
                                    </a>

                                    <a href="https://github.com/Amitsharma45" target="blank">
                                        <img src="https://cdn-icons-png.flaticon.com/512/1051/1051326.png" alt="Github" className='h-10 w-10' />
                                    </a>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(Contact)