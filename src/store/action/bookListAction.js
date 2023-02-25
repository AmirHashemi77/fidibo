
import { booksSliceAction } from '../slice/booksSlice';



export const fetchBookList=(category,subcategory)=>{
    return async (dispatch)=>{
        if(category && !subcategory){
           try{

            const response=await fetch(`https://fidiboapi.amirhashemi776.ir/books?category=${category}`)

            if(!response.ok){
                throw new Error('some things is wrong')
            }

            const data=await response.json()


            dispatch(booksSliceAction.setBookList(data))
            



           }catch(err){
            console.log(err.message);
           }
        }
        if(category && subcategory){
            try{

                const response=await fetch(`http://localhost:3500/books?subCategory=${subcategory}`)
    
                if(!response.ok){
                    throw new Error('some things is wrong')
                }
    
                const data=await response.json()
    
    
                dispatch(booksSliceAction.setBookList(data))
                
    
    
    
               }catch(err){
                console.log(err.message);
               }
        }
    }
}