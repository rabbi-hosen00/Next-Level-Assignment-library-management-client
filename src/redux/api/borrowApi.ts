import { Books } from '@/book/Books';

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IBorrow {
    _id: string;
    book: {
        _id: string;
        title: string;
        isbn?: string;
    };
    quantity: number;
    duDate: string;
    createdAt: string;
    updatedAt: string;
}


export interface IBorrowSummary {
    title: string;
    isbn: string;
    totalBorrowed: number;
}

export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}


export const borrowApi = createApi({
    reducerPath: "borrowApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api",
    }),
    endpoints: (builder) => ({
        borrowBook: builder.mutation<ApiResponse<IBorrow>,
            { book?: string; quantity: number; dueDate: string }
        >({
            query: (body) => ({
                url: "/borrow",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Books", "borrow"]
        }),

    }),
});



export const { useBorrowBookMutation } = borrowApi;



