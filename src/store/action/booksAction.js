import { booksSliceAction } from "../slice/booksSlice"


export const fetchBooks=()=>{
    return async (dispatch)=>{
        
        const fetchDataReq=async ()=>{
            const response=await fetch('/dommyData.json',{headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }})
            if(!response.ok){
                throw new Error('some thing is wrong')
            }
            const data=await response.json()
            
            return data
        }

        try{
        const booksData= await fetchDataReq()
        
        dispatch(booksSliceAction.setAllBooks(booksData))
        }catch(err){
            console.log(err);
        }
    }
}