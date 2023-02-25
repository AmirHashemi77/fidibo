import { createSlice } from '@reduxjs/toolkit';


const initialState={
    myBooks:[],
    recycleBooks:[],
    favoriteBooks:[],
    sampleBooks:[],
    libraryChange:false
    
}

const librarySlice=createSlice({
    name:'library',
    initialState,
    reducers:{
        replaceLibraryData(state,action){
            state.myBooks=action.payload.myBooks
            state.recycleBooks=action.payload.recycleBooks
            state.favoriteBooks=action.payload.favoriteBooks
            state.sampleBooks=action.payload.sampleBooks
        },



        addToMyBooksHandler(state,action){
            const availableItem=state.myBooks.find((item)=>item.id===action.payload.id)
            const removedItem=state.recycleBooks.find((item)=>item.id===action.payload.id)
            if(!availableItem){
                if(removedItem){
                    state.recycleBooks=state.recycleBooks.filter((item)=>item.id!==action.payload.id)
                }
                state.myBooks.push(action.payload)
               state.libraryChange=true
            }else{
               return
            
            }
        },
        addToRecycleBooksHandler(state,action){
            const availableItem=state.recycleBooks.find((item)=>item.id===action.payload.id)
            if(!availableItem){
                state.myBooks=state.myBooks.filter((item)=>item.id!==action.payload.id)
                state.recycleBooks.push(action.payload)
               state.libraryChange=true
            }else{
                return
            } 
        },
        removeFromRecycleBookHandler(state,action){
            state.recycleBooks=state.recycleBooks.filter((item)=>item.id!==action.payload)
            state.libraryChange=true
        },
        returnToMyBooksHandler(state,action){
        const returnItem=state.recycleBooks.find((item)=>item.id===action.payload)
        state.myBooks.push(returnItem)
        state.recycleBooks=state.recycleBooks.filter((item)=>item.id!==action.payload)
        state.libraryChange=true

        },
        addToSampleBooksHandler(state,action){
            const availableItem=state.sampleBooks.find((item)=>item.id===action.payload.id)
            if(!availableItem){
                state.sampleBooks.push(action.payload)
                state.libraryChange=true

            }else{
                return
            }
        },
        clearLibrary(state){
            state.favoriteBooks=[]
            state.myBooks=[]
            state.recycleBooks=[]
            state.sampleBooks=[]
            state.libraryChange=false
        }
        
    }
})

export const libraryAction=librarySlice.actions


export default librarySlice.reducer