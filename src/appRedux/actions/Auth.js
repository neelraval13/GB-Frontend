import { 
    LOGIN_USER,
    LOGOUT_USER,
    REGISTER_USER 
    
} from "../../constants/actionTypes";



export const loginUser = (user) =>{
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


export const siginUser = async (userdata,dispatch) =>{
    try {
        let response = await fetch('http://127.0.0.1:8000/users/login/',{
            method:'POST',
            body:JSON.stringify(userdata)
        })
        let res = await response.json()
        if(response.ok){
            console.log(res)
            dispatch(loginUser(res))
        }else{
            console.log(res)
        }

    } catch (error) {
        console.log(error)    
    }
}


export const siginupUser = async (userdata,dispatch) =>{
    try {
        let response = await fetch('http://127.0.0.1:8000/users/register/',{
            method:'POST',
            body:JSON.stringify(userdata)
        })
        let res = await response.json()
        if(response.ok){
            dispatch(registerUser(res))
            console.log(res)
        }else{
            console.log(res)
        }

    } catch (error) {
        console.log(error)    
    }
}