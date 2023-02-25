import { createSlice } from '@reduxjs/toolkit';



const initialState={
    basketItems:[],
    numberOfProduct:0,
    totalPrice:0,
    changed:false

}

const basketSlice=createSlice({
    name:'basket',
    initialState,
    reducers:{

            replaceToBasket(state,action){
                state.basketItems=action.payload.basketItems
                state.numberOfProduct=action.payload.numberOfProduct
                state.totalPrice=action.payload.totalPrice

            },


            addBookToBasketHandler(state,action){
               

                const availableItem=state.basketItems.find((item)=>item.id===action.payload.id)
                
                if(!availableItem){
                 
                    state.basketItems.push(action.payload)
                    state.totalPrice+=action.payload.price
                    state.numberOfProduct++
                    state.changed=true
                }else{
                    return
                }

            },
            removeBookFromBasketHandler(state,action){
            const removedItem=state.basketItems.find((item)=>item.id===action.payload)   
            state.basketItems=state.basketItems.filter((item)=>item.id!==action.payload)
            state.numberOfProduct--
            state.totalPrice=state.totalPrice - removedItem.price
            state.changed=true
            },
            clearBasketHandler(state){
                state.basketItems=[]
                state.totalPrice=0
                state.numberOfProduct=0
                
                

            }
    }
})



export const basketAction=basketSlice.actions


export default basketSlice.reducer
