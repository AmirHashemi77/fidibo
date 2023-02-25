
import { createSlice } from '@reduxjs/toolkit';

const initialState={
    authed:false,
    activeUser:[],
    popupErr:null
}
const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        logOutHandler(state){
            state.authed=false
            state.activeUser=[]
        },
        logInHandler(state){
            state.authed=true
        },
        setActiveUser(state,action){
            state.activeUser=action.payload
        },
        setPopUpErr(state,action){
            state.popupErr=action.payload
        }
    }
})

export const authAction=authSlice.actions

export default authSlice.reducer;