import React from 'react'
import { useUpdateNoteMutation } from '../../Feature/ApiSlice'
import { toast } from 'react-toastify';
import { useDispatch,useSelector } from 'react-redux';

function EditNote(props) {
  const { editclose, item } = props;
  const [newnote, setnote] = React.useState({
    tittle: item.tittle,
    notebody: item.notebody
  })
  const [updateNote] = useUpdateNoteMutation();
  const { userId } = useSelector(state => state.ToggleSlice)
  const dispatch = useDispatch();
  const updateEdit = async () => {
    const data = await updateNote({
      _id: userId,
      noteid: item._id,
      ...newnote

    })
    await console.log(data)
    editclose();
    toast.success('Note Edited Success', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  return (
    <div className='absolute h-full w-full bg-black bg-opacity-50 top-0 left-0 z-10  text-white  flex justify-center md:pt-[130px] pt-[150px]'>
      <div className='animate-slide-in bg-slate-700 h-[365px] md:w-[510px] w-[330px]  pt-3 md:pl-4 pl-3 rounded-md' >
        <div className='font-semibold text-2xl '>Edit Note :-</div>
        <textarea type='text' className='mb-0 placeholder:text-xl text-[18px] font-semibold placeholder:text-slate-900 md:w-[480px] w-[310px] mt-5 h-[50px] dark:bg-slate-400 bg-[#C0DFD9] text-black dark:text-slate-900 pt-2 pl-4   dark:border-slate-900 resize-none outline-none' placeholder='Edit Note..' value={newnote.tittle} onChange={(e) => { setnote({ ...newnote, tittle: e.target.value }) }} />
        <textarea rows="8" cols="100" type='text ' className={`placeholder:text-xl font-semibold placeholder:text-slate-900 bg-[#C0DFD9] mt-0 text-black md:w-[480px] w-[310px] dark:bg-slate-400  dark:text-slate-900 pl-4 border-gray-900 border-0 text resize-none outline-none  relative h-[200px] pt-2   `} placeholder='Note Body ...' value={newnote.notebody} onChange={(e) => { setnote({ ...newnote, notebody: e.target.value }) }} />
        <div className={` dark:text-white text-right bottom-2 right-0 mt-1`}>
          <button type='button' disabled={!newnote.title && !newnote.notebody} className='mx-1 text-sm dark:bg-slate-900 px-3 py-1 rounded-2xl  disabled:opacity-30'
            onClick={() => updateEdit()}
          >
            Edit</button>
          <button className='mx-1 text-sm dark:bg-slate-900 px-3 py-1 rounded-2xl' onClick={(e) => editclose()} >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditNote