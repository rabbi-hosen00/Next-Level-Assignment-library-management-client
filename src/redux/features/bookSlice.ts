import { createSlice, } from '@reduxjs/toolkit'
import type { RootState } from '../store'

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
  selectedBook:  null,
  searchTerm: ""
}

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
  
  }
})

export const {  } = bookSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default bookSlice.reducer;