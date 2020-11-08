import { LOGIN_FAILURE, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_SUCCESS, RESET_MESSAGE } from "../../constants/actionTypes"

export const setLoginSuccessAlert = (message) =>{
    return{
        type:LOGIN_SUCCESS,
        payload:message
    }
}

export const setRegisterSuccessAlert = (message) =>{
    return{
        type:REGISTER_SUCCESS,
        payload:message
    }
}

export const setLoginFailureAlert = (message) =>{
    return{
        type:LOGIN_FAILURE,
        payload:message
    }
}

export const setRegisterFailureAlert = (message) =>{
    return{
        type:REGISTER_FAILURE,
        payload:message
    }
}
export const resetMessage = () =>{
    return{
        type:RESET_MESSAGE
    }
}