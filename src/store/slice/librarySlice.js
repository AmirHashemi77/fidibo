import { createSlice } from '@reduxjs/toolkit';


const initialState={
    myBooks:[],
    recycleBooks:[],
    favoriteBooks:[],
    sampleBooks:[],
    
}

const librarySlice=createSlice({
    name:'library',
    initialState,
    reducers:{
        addToMyBooksHandler(state,action){
            const availableItem=state.myBooks.find((item)=>item.id===action.payload.id)
            const removedItem=state.recycleBooks.find((item)=>item.id===action.payload.id)
            if(!availableItem){
                if(removedItem){
                    state.recycleBooks=state.recycleBooks.filter((item)=>item.id!==action.payload.id)
                }
                state.myBooks.push(action.payload)
               
            }else{
               return
            
            }
        },
        addToRecycleBooksHandler(state,action){
            const availableItem=state.recycleBooks.find((item)=>item.id===action.payload.id)
            if(!availableItem){
                state.myBooks=state.myBooks.filter((item)=>item.id!==action.payload.id)
                state.recycleBooks.push(action.payload)
            }else{
                return
            } 
        },
        removeFromRecycleBookHandler(state,action){
            state.recycleBooks=state.recycleBooks.filter((item)=>item.id!==action.payload)
        },
        returnToMyBooksHandler(state,action){
        const returnItem=state.recycleBooks.find((item)=>item.id===action.payload)
        state.myBooks.push(returnItem)
        state.recycleBooks=state.recycleBooks.filter((item)=>item.id!==action.payload)

        },
        addToSampleBooksHandler(state,action){
            const availableItem=state.sampleBooks.find((item)=>item.id===action.payload.id)
            if(!availableItem){
                state.sampleBooks.push(action.payload)
            }else{
                return
            }
        }
        
    }
})

export const libraryAction=librarySlice.actions


export default librarySlice.reducer