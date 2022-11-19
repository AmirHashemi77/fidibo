
import { createSlice } from '@reduxjs/toolkit';

const initialState={
    authed:false
}
const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        logOutHandler(state){
            state.authed=false
        },
        logInHandler(state){
            state.authed=true
        }
    }
})

export const authAction=authSlice.actions

export default authSlice.reducer;