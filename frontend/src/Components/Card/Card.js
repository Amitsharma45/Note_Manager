import React, { useState } from 'react'
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays,faBoxArchive, faEllipsisVertical, faPenToSquare, faTrashCan, faHeart, faTemperatureHalf } from '@fortawesome/free-solid-svg-icons';
import { useDeleteNoteMutation, useIsArchiveNoteMutation, useIsFavoriteNoteMutation } from '../../Feature/ApiSlice';
import EditNote from '../EditNote/EditNote';
import { toast } from 'react-toastify';

function Card(props) {
    const { item } = props;
    const [editToggle, seteditToggle] = useState(false)
    const [deleteNote] = useDeleteNoteMutation();
    const [updateFavorite] = useIsFavoriteNoteMutation();
    const [updateArchive] = useIsArchiveNoteMutation();
    const DeleteNote = (noteid) => {
        deleteNote({
            "_id": "bc8aa2-69-4deb-a9b2-d0896e489178",
            "noteid": noteid
        }).then((data) => {
            toast.success('Note Delete Success', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        })
    }
    function editclose() {
        seteditToggle(!editToggle)
    }
    const updateisFavorite = (item) => {
        updateFavorite({
            _id: "bc8aa2-69-4deb-a9b2-d0896e489178",
            noteid: item._id,
            isFavorite: !item.isFavorite
        }).then((data)=>{
            toast.success('Update Note Favorite', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        })
        
    }
    const updateisArchive = (item) => {
        updateArchive({
            _id: "bc8aa2-69-4deb-a9b2-d0896e489178",
            noteid: item._id,
            isArchive: !item.isArchive
        }).then((data)=>{
            toast.success('Update Note Archive', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        })
        
    }

    return (
        <div className=''>
            <div className='md:w-[350px] w-[300px] overflow-hidden h-min-[250px]  border-black bg-inputlight  dark:bg-black dark:bg-opacity-10 dark:text-white text-slate-800  rounded-xl my-5 relative'>
                <div className='border-b-[2px] border-b-gray-700 dark:border-b-slate-900 px-5 cursor-pointer pt-4 pb-2 text-xl flex justify-between'>
                    <div> {item.tittle}</div>
                    <div className="dropdown inline-block relative">
                        <button className="bg-gray-300 text-gray-700 font-semibold dark:bg-slate-900 px-3 py-1 dark:text-white rounded-full inline-flex items-center">
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                        <ul className="dropdown-menu absolute hidden w-[110px] rounded-md bg-gray-300 py-1 dark:text-white dark:bg-slate-900 text-[16px]   left-[-60px]">
                            <li className="block scroll-smooth cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700 px-3" onClick={() => {
                                seteditToggle(!editToggle)
                                window.scrollTo(0, 0)
                            }} >
                                <FontAwesomeIcon icon={faPenToSquare} className='mr-2' />Edit
                            </li>
                            <li className="block  cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700 px-3 " onClick={() => DeleteNote(item._id)} >
                                <FontAwesomeIcon icon={faTrashCan} className='mr-2' />Delete
                            </li>
                            <li className="block  cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700 px-3 " onClick={() => updateisArchive(item)} >
                                <FontAwesomeIcon icon={faBoxArchive} className='mr-2' />Archive
                            </li>

                        </ul>
                    </div>
                </div>
                <div className=' px-5 py-5 h-[180px] w-full cursor-pointer bg-transparent resize-none outline-none'  >
                    {item.notebody}
                </div>
                <div className=' px-5 py-3 text-right bg-gray-400 dark:bg-slate-800 flex justify-between '>
                    <span onClick={() => updateisFavorite(item)}>
                        <FontAwesomeIcon icon={faHeart} className={`${item.isFavorite ? 'text-yellow-500' : 'text-white'} 
                    dark:bg-slate-900 rounded-full p-[8px] bg-gray-800 hover:bg-gray-400 dark:hover:bg-slate-600 `} />
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faCalendarDays} className='mr-2' />
                        {moment(item.createdAt).format('YYYY-MM-DD')}
                    </span>
                </div>

            </div>
            {
                editToggle ? (
                    <EditNote editclose={editclose} item={item} />
                ) :
                    (
                        <></>
                    )
            }
        </div>
    )
}
export default React.memo(Card)