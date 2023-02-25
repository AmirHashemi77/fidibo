
import { libraryAction } from '../slice/librarySlice';



export const postLibraryData=(libraryData,userId)=>{
    return async ()=>{
      try{
        console.log(libraryData);
        const response=await fetch(`https://fidiboapi.amirhashemi776.ir/users/${userId}`,{
            method:'PATCH',
            body:JSON.stringify({library:libraryData}),
            headers :{ 
                'Content-Type': 'application/json',
                'Accept': 'application/json'}

        })
        if(!response.ok){
            throw new Error('some thing is wrong')
        }
      }catch(err){
        console.log(err.message);
      }

    }
}




export const fetchLibraryData=(userId)=>{
  return async (dispatch)=>{


    try{
      const response=await fetch(`https://fidiboapi.amirhashemi776.ir/users/${userId}`)
      if(!response.ok){
        throw new Error('some thing is wrong')
      }

      const data=await response.json()

      if(data.library.myBooks){
        dispatch(libraryAction.replaceLibraryData(data.library))
      }



    }catch(err){
      console.log(err.message);
    }


  }
}