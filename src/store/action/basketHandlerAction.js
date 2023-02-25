
import { basketAction } from '../slice/basketSlice';





export const postBasketData=(cartData,userId)=>{
    return async ()=>{
      try{
        const response=await fetch(`https://fidiboapi.amirhashemi776.ir/users/${userId}`,{
            method:'PATCH',
            body:JSON.stringify({
                cart:cartData
            }),
            headers :{ 
                'Content-Type': 'application/json',
                'Accept': 'application/json'}     
        })
        if(!response.ok){
            throw new Error('some things is wrong')
        }
      }catch(err){
        console.log(err.message);
      }
    }
}





export const fetchBasketData=(userId)=>{
    return async (dispatch)=>{
        const response= await fetch(`https://fidiboapi.amirhashemi776.ir/users/${userId}`)

        if(!response.ok){
            throw new Error('some things is wrong')
        }


        const data=await response.json()
        
        if(data.cart.basketItems){
            dispatch(basketAction.replaceToBasket(data.cart))

        }

    }
}