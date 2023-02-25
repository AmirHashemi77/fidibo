import { authAction } from "../slice/authSlice"
import { uiSliceAction } from '../slice/uiSlice';





export const logInAction=(userData)=>{
    return async (dispatch)=>{
            try{
                const response=await fetch(`https://fidiboapi.amirhashemi776.ir/users?userName=${userData.userName}`)

                if(!response.ok){
                    throw new Error('some things is wrong')
                }
        
                const data=await response.json()
        
                if(data.length===0){
                return    dispatch(authAction.setPopUpErr('نام کاربری اشتباه است'))
                }
        
                if(data[0].password===userData.password){
                    dispatch(authAction.setActiveUser(data[0]))
                    dispatch(authAction.logInHandler())
                    dispatch(uiSliceAction.showLoginHandler(false))
                }else{
                return    dispatch(authAction.setPopUpErr('رمز عبور اشتباه است'))
                }
            }catch(err){
                console.log(err.message);
            }
    }
}