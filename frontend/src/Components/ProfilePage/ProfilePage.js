import React from 'react'
import HOC from '../HOC/HOC'
import SideBar from '../SideBar/SideBar';
import moment from 'moment';

function ProfilePage(props) {
    const { result } = props;
    const { data } = result
    console.log(data.data)
    return (
        <>
            <div className='flex  h-min-[500px] w-[90%] mx-auto mt-8'>
                <div className='z-10 lg:flex-[20%]  md:flex-[30%]  md:relative  absolute md:block   md:h-auto h-[400px] right-0 top-0'>
                    <SideBar />
                </div>

                <div className='lg:flex-[80%] md:flex-[70%] md:ml-12 flex-[100%] '>
                    <div className='flex justify-center'>
                        <div className='w-[420px]   dark:text-white flex-col h-[400px] dark:bg-slate-700 rounded-3xl'>
                            <div className='mt-10 w-[60px] h-[60px] m-auto dark:bg-slate-500 rounded-full flex justify-center items-center text-3xl '>
                                {data.data.fullname[0]}
                            </div>
                            <div className='mt-4 text-2xl ml-5'>
                                Name : {data.data.fullname}
                            </div>
                            <div className='mt-4 text-xl ml-5'>
                                Email I'D : {data.data.email}
                            </div>
                            <div className='mt-4 text-xl ml-5'>
                                Accout Created On:  {moment(data.data.createdAt).format('DD-MM-YYYY')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(ProfilePage)