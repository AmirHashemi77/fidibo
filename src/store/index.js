import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import basketSlice from "./slice/basketSlice";
import booksSlice from "./slice/booksSlice";
import uiSlice from "./slice/uiSlice";
import librarySlice from "./slice/librarySlice";


const store=configureStore({
    reducer:{
        ui:uiSlice,
        auth:authSlice,
        books:booksSlice,
        basket:basketSlice,
        library:librarySlice
        
    }
})


export default store