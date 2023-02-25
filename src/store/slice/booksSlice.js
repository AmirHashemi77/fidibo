import { createSlice } from '@reduxjs/toolkit';


const initialState={
   
    currentBook:{},
    bookList:[],
    searchList:[]
}


const booksSlice=createSlice({
    name:'books',
    initialState,
    reducers:{
        setCurrentBook(state,action){
            state.currentBook=action.payload
        },
        setBookList(state,action){
            state.bookList=action.payload
        },
        setSearchList(state,action){
            state.searchList=action.payload
        }

    
    }
})

export const booksSliceAction=booksSlice.actions

export default booksSlice.reducer;
