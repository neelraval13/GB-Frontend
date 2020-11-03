import { 
    LOGIN_USER,
    LOGOUT_USER,
    REGISTER_USER 
    
} from "../../constants/actionTypes";



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
            history.push('/')

        }else{
            console.log(res)
        }

    } catch (error) {
        console.log(error)    
    }
}


export const signUpUser = async (userdata,dispatch) =>{
    try {
        let response = await fetch(process.env.REACT_APP_API_URL+'/users/register/',{
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