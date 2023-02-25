
import { booksSliceAction } from '../slice/booksSlice';





export const searchAction=(input)=>{
    return async (dispatch)=>{
        const response=await fetch(`https://fidiboapi.amirhashemi776.ir/books?bookName_like=${input}`)


        if(!response.ok){
            throw new Error('some things is wrong')
        }

        const data=await response.json()


        dispatch(booksSliceAction.setSearchList(data))
    }
}