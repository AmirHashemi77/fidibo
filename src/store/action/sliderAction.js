



export const fetchSliderData=(sliderName,setSliderArr)=>{
    return async ()=>{
     try{
        const response=await fetch(`https://fidiboapi.amirhashemi776.ir/books?tags=${sliderName}`)

        if(!response.ok){
            throw new Error("some things is wrong")
        }


        const data=await response.json()
        
        setSliderArr(data)

     }catch(err){
        console.log(err.message);
     }

    }
}