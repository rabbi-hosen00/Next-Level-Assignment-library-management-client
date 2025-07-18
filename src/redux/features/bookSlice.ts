

import { createSlice, type PayloadAction, } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export interface Book {
  _id?: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description: string;
  copies: number;
  available?: boolean;
}

export interface BookState {
  selectedBook: Book | null;
  searchTerm: string;
}

const initialState: BookState = {
  selectedBook: null,
  searchTerm: "",
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setSelectedBook(state, action:PayloadAction<Book>){
      state.selectedBook = action.payload
    },
    clearSelectedBook(state){
      state.selectedBook = null;
    },
    setSearchTerm(state, action: PayloadAction<string>){
      state.searchTerm = action.payload
    }

  },
});


export const { setSelectedBook, clearSelectedBook, setSearchTerm } = bookSlice.actions;


export const selectSelectedBook = (state: RootState) => state.book.selectedBook;
export const selectSearchTerm = (state: RootState) => state.book.searchTerm;


export default bookSlice.reducer;

