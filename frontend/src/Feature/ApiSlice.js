import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const noteApi = createApi({
    reducerPath:"noteApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000/api/v1"}),
    tagTypes:['Notes'],
    endpoints: (builder) =>({
        getNotes: builder.query({
           query: (id)=> `/getNotes?_id=${id}`,
           providesTags :['Notes']
        }),
        addNote: builder.mutation({
            query: (note)=>({
                url:'/createNote',
                method:'POST',
                body: note
            }),
            invalidatesTags : ['Notes'],
        }),
        deleteNote: builder.mutation({
            query: (id)=>({
                url:`/deleteNote`,
                method:'DELETE',
                body:id
            }),
            invalidatesTags : ['Notes'],
        }),
        updateNote: builder.mutation({
            query: (note)=>({
                url:`/update/${note.id}`,
                method:"PUT",
                body: note
            })
        })
    })
})

export const {useGetNotesQuery, useAddNoteMutation ,useDeleteNoteMutation, useUpdateNoteMutation} = noteApi;
