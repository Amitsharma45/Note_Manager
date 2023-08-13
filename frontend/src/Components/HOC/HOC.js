import React from 'react'
import { Navigate } from "react-router-dom";
import { useGetNotesQuery, useGetProfileQuery } from '../../Feature/ApiSlice';
import { useSelector, useDispatch } from 'react-redux';
import { setUSerid } from '../../Feature/toggleSlice';
function HOC(Component) {
    const NewComponent = () => {
        const dispatch = useDispatch();
        const token = localStorage.getItem('JWT')
        const result = useGetProfileQuery(token)
        dispatch(setUSerid(result?.data?.data?._id));
        const { userId } = useSelector(state => state.ToggleSlice);
        const { data, isLoading } = useGetNotesQuery(userId);
        if (!token || result?.data?.expire) {
            return <Navigate to='/login' />
        }
        return <Component data={data} isLoading={isLoading} result={result}  />
    }
    return NewComponent;
}

export default HOC;