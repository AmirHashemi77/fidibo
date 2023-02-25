import { booksSliceAction } from "../slice/booksSlice"




export const fetchCurrentBook=(bookId)=>{
        return async (dispatch)=>{
         try{
            const response=await fetch(`https://fidiboapi.amirhashemi776.ir/books?id=${bookId}`)


            if(!response.ok){
                throw new Error('some things is wrong')
            }


            const data=await response.json()

            if(data.length>0){
                dispatch(booksSliceAction.setCurrentBook(data[0]))
            }
         }catch(err){
            console.log(err.message);
         }
            
        }
}