import { createSlice } from '@reduxjs/toolkit';
const initialState ={
    addNote : false,
	editNote:false,
	userId:''
}
const toggleSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		addToggles: (state) => {
			state.addNote = !state.addNote
		},
		editToggles: (state) => {
			state.editNote = !state.editNote
		},
		setUSerid: (state,action) =>{
			state.userId= action.payload
		}
	},
});
export const { addToggles ,editToggles,setUSerid} = toggleSlice.actions;
export default toggleSlice.reducer;
