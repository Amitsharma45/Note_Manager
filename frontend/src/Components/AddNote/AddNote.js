import React, { useState } from 'react'
import { useAddNoteMutation } from '../../Feature/ApiSlice';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addToggles } from '../../Feature/toggleSlice';


function AddNote() {
    const dispatch = useDispatch();
    const [cretaNote] = useAddNoteMutation()
    const [newnote, setnote] = useState({
        tittle: '',
        notebody: ''
    })
    const SaveNote = () => {
        console.log(newnote);
        cretaNote({ ...newnote, _id: 'bc8aa2-69-4deb-a9b2-d0896e489178' })
            .then((resp) => {
                toast.success('Add Note Success', {
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
        dispatch(addToggles())
        setnote({
            tittle: '',
            notebody: ''
        });
    }
    const CancelNote = () => {
        dispatch(addToggles())
        setnote({
            tittle: '',
            notebody: ''
        });
    }
    return (

        <div className='absolute  h-full w-full bg-black bg-opacity-50 top-0 left-0 z-10  text-white  flex justify-center md:pt-[130px] pt-[150px]'>
            <div className='animate-slide-in  bg-slate-700 h-[365px] md:w-[510px] w-[350px]  pt-3  md:pl-4 pl-3 rounded-md' >
                <div className='font-semibold text-2xl '>Add Note :-</div>
                <textarea type='text' className='mb-0 placeholder:text-xl text-[18px] font-semibold placeholder:text-slate-900 md:w-[480px] w-[330px] mt-5 h-[50px] dark:bg-slate-400 bg-[#C0DFD9] text-black dark:text-slate-900 pt-2 pl-4   dark:border-slate-900 resize-none outline-none' placeholder='Tittle Note..' value={newnote.tittle} onChange={(e) => { setnote({ ...newnote, tittle: e.target.value }) }} />
                <textarea rows="8" cols="100" type='text ' className={`placeholder:text-xl font-semibold placeholder:text-slate-900 bg-[#C0DFD9] mt-0 text-black md:w-[480px] w-[330px] dark:bg-slate-400  dark:text-slate-900 pl-4 border-gray-900 border-0 text resize-none outline-none  relative h-[200px] pt-2   `} placeholder='Note Body ...' value={newnote.notebody} onChange={(e) => { setnote({ ...newnote, notebody: e.target.value }) }} />
                <div className={` dark:text-white text-right bottom-2 right-0 mt-1`}>
                    <button type='button' disabled={!newnote.title && !newnote.notebody} className='mx-1 text-sm dark:bg-slate-900 px-3 py-1 rounded-2xl  disabled:opacity-30'
                        onClick={() => SaveNote()}
                    >
                        Save</button>
                    <button className='mx-1 text-sm dark:bg-slate-900 px-3 py-1 rounded-2xl' onClick={() => CancelNote()} >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddNote