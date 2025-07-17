
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Book } from '../features/bookSlice';



export type BookFormData = Omit<Book, "_id">

interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}


export const bookApi = createApi({
    reducerPath: 'bookApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api'
    }),
    tagTypes: ['books'],
    endpoints: (builder) => ({
        addBook: builder.mutation<ApiResponse<Book>, BookFormData>({
            query: (body) => ({
                url: "/books",
                method: "POST",
                body,
            }),
            invalidatesTags: ["books"]
        }),
       
        // // ✅ Get All Quizzes (GET)
        getAllBooks: builder.query({
            query: () => '/books',
            providesTags: ['books'],
        }),

        //  Get Single Book (GET)
        getBookById: builder.query<ApiResponse<Book>, string>({
            query: (id) => `/books/${id}`,
            providesTags: ["books"],
        }),


        // Updated book by Id
        upDateBook: builder.mutation<ApiResponse<Book>, { id: string; data: Book }>({
            query: ({ id, data }) => ({
                url: `/books/${id}`,
                method: "PUT",
                body: data
            }),
            invalidatesTags: ["books"]
        }),

        //  Delete Book (DELETE)

        deleteBook: builder.mutation<ApiResponse<null>, string>({
            query: (id) => ({
                url: `/books/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['books']
        })


    }),

})

export const {
    useAddBookMutation,
    useGetAllBooksQuery,
    useGetBookByIdQuery,
    useUpDateBookMutation,
    useDeleteBookMutation
} = bookApi;