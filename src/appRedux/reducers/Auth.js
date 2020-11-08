import { 
    LOGIN_USER, LOGOUT_USER, REGISTER_USER
 } from "../../constants/actionTypes"

const INIT_STATE ={
    isAuthenticated:localStorage.getItem('token') ? true:false,
    authUser:'',
    error:'',
    token:localStorage.getItem('token'),
}

const authReducer =  (state=INIT_STATE,action) =>{
    switch(action.type){
        case LOGIN_USER:
            return {
                ...state,
                authUser:action.payload,
                token:action.payload,
                isAuthenticated:true,
            }
        
        case REGISTER_USER:
            return {
                ...state,
                authUser:action.payload
            }
        
        case LOGOUT_USER:
            localStorage.removeItem('token')
            return {
                ...state,
                authUser:'',
                isAuthenticated:false,
                token:null,
            }
            
        default :
            return state
    }
}


export default authReducer
