import React from 'react'
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { useDeleteNoteMutation, useIsTrashMutation } from '../../Feature/ApiSlice';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

function TrashCard(props) {
    const { userId } = useSelector(state => state.ToggleSlice)
    const { item } = props;
    const [deleteNote] = useDeleteNoteMutation();
    const [trashNote] = useIsTrashMutation();
    const DeleteNote = (noteid) => {
        deleteNote({
            "_id": userId,
            "noteid": noteid
        }).then((data) => {
            toast.success('Note Delete Success', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        })
    }
    
    const TrashNote = (item) => {
        trashNote({
            "_id": userId,
            "noteid": item._id,
            isTrash: !item.isTrash
        }).then((data) => {
            toast.success('Remove Trash Success', {
                position: "top-right",
                autoClose: 1000,
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
                       <div className='dark:hover:bg-slate-400 dark:hover:text-black cursor-pointe text-sm dark:bg-slate-900 px-3 py-1 rounded-2xl' onClick={() => TrashNote(item)} >Undo</div>
                    </div>
                </div>
                <div className=' px-5 py-5 h-[180px] w-full cursor-pointer bg-transparent resize-none outline-none'  >
                    {item.notebody}
                </div>
                <div className=' px-5 py-3 text-right bg-gray-400 dark:bg-slate-800 flex justify-between '>
                    <span>
                        <FontAwesomeIcon icon={faCalendarDays} className='mr-2' />
                        {moment(item.createdAt).format('YYYY-MM-DD')}
                    </span>
                    <span >
                        <div className=' dark:hover:bg-slate-400 dark:hover:text-black cursor-pointer text-sm dark:bg-slate-900 px-3 py-1 rounded-2xl' onClick={() => DeleteNote(item._id)}>Delete</div>
                    </span>
                </div>

            </div>
            
        </div>
    )
}
export default React.memo(TrashCard)