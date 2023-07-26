import React, { useState } from 'react'

function AddNote() {
    const [toogle, settoogle] = useState(false);
    const [newnote, setnote] = useState({
        tittle: '',
        notebody: ''
    })
    const SaveNote = async (e) => {
        e.preventDefault();
        console.log(newnote)
        settoogle(false)
        setnote({
            tittle: '',
            notebody: ''
        });
    }
    const CancelNote = (e) => {
        e.preventDefault();
        settoogle(false)
        setnote({
            tittle: '',
            notebody: ''
        });
    }
    return (
        <div className='flex flex-col items-center justify-center '>
            <form className='flex flex-col items-center justify-center   md:w-[500px] w-[350px] relative  '>
                <textarea onClick={() => settoogle(true)} type='text' className=' md:w-[500px] w-[350px] mt-5 h-[50px] dark:bg-slate-700  dark:text-white pt-2 pl-4  border-0 border-b-[.5px] dark:border-slate-900 resize-none outline-none' placeholder={`${toogle ? ' Note Tittle' : 'Add Note'}`} value={newnote.tittle} onChange={(e) => { setnote({ ...newnote, tittle: e.target.value }) }} />
                <textarea rows="8" cols="100" type='text ' className={`md:w-[500px] w-[350px] dark:bg-slate-700  dark:text-white pl-4 border-gray-900 border-0 text resize-none outline-none  relative ${toogle ? 'h-[200px] pt-2' : 'h-[0px] pt-0'} transition-all ease-in-out duration-500  `} placeholder='Note Body ...' value={newnote.notebody} onChange={(e) => { setnote({ ...newnote, notebody: e.target.value }) }} />
                <div className={`${toogle ? 'block' : 'hidden'} dark:text-white absolute bottom-2 right-0`}>
                    <button type='button' disabled={!newnote.title && !newnote.notebody} className='mx-1 text-sm dark:bg-slate-900 px-3 py-1 rounded-2xl  disabled:opacity-30'
                        onClick={(e) => SaveNote(e)}>
                        Save</button>
                    <button className='mx-1 text-sm dark:bg-slate-900 px-3 py-1 rounded-2xl' onClick={(e) => CancelNote(e)} >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddNote