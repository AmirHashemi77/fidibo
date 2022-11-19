import { createSlice } from "@reduxjs/toolkit";


const initialState={
    showMenu:false,
    showLogin:false,
    showHelper:false,
    HelperType:false,
    showAdvanceSearch:false,
    showSorting:false
}


const uiSlice=createSlice({
    name:'ui',
    initialState,
    reducers:{
        showMenuHandler(state){
            state.showMenu=!state.showMenu
            if(state.showMenu){
                document.body.style.overflow='hidden'
            }else{
                document.body.style.overflow='auto'
            }
        },
        showLoginHandler(state){
            state.showLogin=!state.showLogin
            if(state.showLogin){
                document.body.style.overflow='hidden'
            }else{
                document.body.style.overflow='auto'
            }
        },
        showHelperHandler(state,action){
            state.showHelper= !state.showHelper
            state.HelperType=action.payload
            if(state.showHelper){
                document.body.style.overflow='hidden'
            }else{
                document.body.style.overflow='auto'
            }
        },
        showAdvanceSearchHandler(state){
            state.showAdvanceSearch=!state.showAdvanceSearch
            if(state.showAdvanceSearch){
                document.body.style.overflow='hidden'
            }else{
                document.body.style.overflow='auto'
            }
        },
        showSortingHandler(state){
            state.showSorting=!state.showSorting
            if(state.showSorting){
                document.body.style.overflow='hidden'
            }else{
                document.body.style.overflow='auto'
            }
        },
    }

})




export const uiSliceAction=uiSlice.actions

export default uiSlice.reducer;
