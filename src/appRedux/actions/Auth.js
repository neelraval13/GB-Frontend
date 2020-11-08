import { 
    LOGIN_USER,
    LOGOUT_USER,
    REGISTER_USER 
    
} from "../../constants/actionTypes";
import { resetMessage, setLoginFailureAlert, setLoginSuccessAlert, setRegisterFailureAlert, setRegisterSuccessAlert } from "./Alert";



export const loginUser = (user) =>{
    console.log("calling set authUser")
    return {
        type: LOGIN_USER,
        payload: user
      };
}

export const registerUser = (user) =>{
    return {
        type: REGISTER_USER,
        payload: user
      };
}

export const logoutUser = () =>{
    return{
        type:LOGOUT_USER
    }
}



export const signInUser = async (userdata,dispatch,history) =>{
    console.log("login action called")
    try {
        let response = await fetch(process.env.REACT_APP_API_URL+'users/login/',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userdata)
        })
        let res = await response.json()
        if(response.ok){
            console.log(res)
            localStorage.setItem('token',res.token)
            dispatch(loginUser(res.token))
            window.location.reload()
            dispatch(setLoginSuccessAlert("You have been successfully logged in."))

        }else{
            dispatch(setLoginFailureAlert(res.message))
        }

    } catch (error) {
        console.log(error)    
    }
}


export const signUpUser = async (userdata,dispatch,history) =>{
    try {
        let response = await fetch(process.env.REACT_APP_API_URL+'users/register/',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userdata)
        })
        let res = await response.json()
        if(response.ok){
            dispatch(registerUser(res))
            console.log(res)
            history.push('/')
        }else{
            dispatch(setRegisterFailureAlert(res.message))
            console.log(res)
        }

    } catch (error) {
        console.log(error)    
    }
}