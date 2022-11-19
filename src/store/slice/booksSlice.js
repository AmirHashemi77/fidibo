import { createSlice } from '@reduxjs/toolkit';


const initialState={
    allBooks:[],
}


const booksSlice=createSlice({
    name:'books',
    initialState,
    reducers:{
        setAllBooks(state,action){
            state.allBooks=action.payload
        },
    
    }
})

export const booksSliceAction=booksSlice.actions

export default booksSlice.reducer;
