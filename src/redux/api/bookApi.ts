
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import type { Book } from '../features/bookSlice';



// export type BookFormData = Omit<Book, "_id">

// interface ApiResponse<T> {
//     success: boolean;
//     message: string;
//     data: T;
// }


// export const bookApi = createApi({
//     reducerPath: 'bookApi',
//     baseQuery: fetchBaseQuery({
//         baseUrl: 'https://libary-management-backend-six.vercel.app/api'
//     }),
//     tagTypes: ['books',"borrow"],
//     endpoints: (builder) => ({
//         addBook: builder.mutation<ApiResponse<Book>, BookFormData>({
//             query: (body) => ({
//                 url: "/books",
//                 method: "POST",
//                 body,
//             }),
//             invalidatesTags: ["books"]
//         }),
       
//         // // ✅ Get All Quizzes (GET)
//         getAllBooks: builder.query({
//             query: () => '/books',
//             providesTags: ['books'],
//         }),

//         //  Get Single Book (GET)
//         getBookById: builder.query<ApiResponse<Book>, string>({
//             query: (id) => `/books/${id}`,
//             providesTags: ["books"],
//         }),


//         // Updated book by Id
//         upDateBook: builder.mutation<ApiResponse<Book>, { id: string; data: Book }>({
//             query: ({ id, data }) => ({
//                 url: `/books/${id}`,
//                 method: "PUT",
//                 body: data
//             }),
//             invalidatesTags: ["books"]
//         }),

//         //  Delete Book (DELETE)

//         deleteBook: builder.mutation<ApiResponse<null>, string>({
//             query: (id) => ({
//                 url: `/books/${id}`,
//                 method: 'DELETE'
//             }),
//             invalidatesTags: ['books',"borrow"]
//         })


//     }),

// })

// export const {
//     useAddBookMutation,
//     useGetAllBooksQuery,
//     useGetBookByIdQuery,
//     useUpDateBookMutation,
//     useDeleteBookMutation
// } = bookApi;




import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Book } from "../features/bookSlice";

export interface IBorrow {
  _id: string;
  book: {
    _id: string;
    title: string;
    isbn?: string;
  };
  quantity: number;
  dueDate: string;
  createdAt: string;
  updatedAt: string;
}

export interface IBorrowSummary {
    book: string;
    title: string;
    isbn: string;
    totalBorrowed: number;
}


export type BookFormData = Omit<Book, "_id">;

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://libary-management-backend-six.vercel.app/api",
  }),
  tagTypes: ["books", "borrow"],
  endpoints: (builder) => ({
    // ✅ Add Book
    addBook: builder.mutation<ApiResponse<Book>, BookFormData>({
      query: (body) => ({
        url: "/books",
        method: "POST",
        body,
      }),
      invalidatesTags: ["books"],
    }),

    // ✅ Get All Books
    getAllBooks: builder.query<ApiResponse<Book[]>, void>({
      query: () => "/books",
      providesTags: ["books","borrow"],
    }),

    // ✅ Get Single Book
    getBookById: builder.query<ApiResponse<Book>, string>({
      query: (id) => `/books/${id}`,
      providesTags: ["books"],
    }),

    // ✅ Update Book
    updateBook: builder.mutation<ApiResponse<Book>, { id: string; data: Book }>({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),

    // ✅ Delete Book
    deleteBook: builder.mutation<ApiResponse<null>, string>({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),

    // ✅ Borrow Book (moved from borrowApi)
    borrowBook: builder.mutation<
      ApiResponse<IBorrow>,
      { bookId: string; quantity: number; dueDate: string }
    >({
      query: (body) => ({
        url: "/borrow",
        method: "POST",
        body,
      }),
      invalidatesTags: ["books","borrow"], // ✅ Books data refresh হবে
    }),

     getBorrowSummary: builder.query<ApiResponse<IBorrowSummary[]>, void>({
      query: () => "/borrow",
      providesTags: ["borrow","books"],
    }),

  }),
});

export const {
  useAddBookMutation,
  useGetAllBooksQuery,
  useGetBookByIdQuery,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useBorrowBookMutation,
  useGetBorrowSummaryQuery
} = bookApi;
