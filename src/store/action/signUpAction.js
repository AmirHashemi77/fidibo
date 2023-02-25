
import { authAction } from '../slice/authSlice';
import { uiSliceAction } from '../slice/uiSlice';


export const signUpAction=(userData)=>{
    return async (dispatch)=>{
        const getUser=async ()=>{
           try{
                    const response=await fetch(`http://localhost:3500/users?userName=${userData.userName}`)

                    if(!response.ok){
                        throw new Error('some things is wrong')
                    }

                    const data=await response.json()

                    if(data.length>0){
                        return true
                    }else{
                        return false
                    }
           }catch(err){
            console.log(err.message);
           }

        }

        const hasUser=await getUser()
        
        if(!hasUser){
            try{
                const response=await fetch(`https://fidiboapi.amirhashemi776.ir/users`,{
                    method:'POST',
                    body:JSON.stringify(userData),
                    headers :{ 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'}
                })
                if(!response.ok){
                    throw new Error('some thing is wrong')
                }
    
                dispatch(authAction.setActiveUser(userData))
                dispatch(authAction.logInHandler())
                dispatch(uiSliceAction.showLoginHandler())
    
    
            }catch(err){
                console.log(err.message);
            }
        }else{
            dispatch(authAction.setPopUpErr('این نام کاربری قبلا ثبت شده است'))
        }


    }
}