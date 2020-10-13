import { 
    LOGIN_USER, LOGOUT_USER, REGISTER_USER
 } from "../../constants/actionTypes"

const INIT_STATE ={
    authUser:''
}

const authReducer =  (state=INIT_STATE,action) =>{
    switch(action.type){
        case LOGIN_USER:
            return {
                ...state,
                authUser:action.payload
            }
        
        case REGISTER_USER:
            return {
                ...state,
                authUser:action.payload
            }
        
        case LOGOUT_USER:
            return {
                ...state,
                authUser:''
            }
            
        default :
            return state
    }
}


export default authReducer
