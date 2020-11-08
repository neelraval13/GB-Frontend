import { LOGIN_FAILURE, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_SUCCESS, RESET_MESSAGE } from "../../constants/actionTypes"


const INIT_STATE = {
    successAlert:'',
    failureAlert:'',
}

const alertReducer = (state=INIT_STATE,action) =>{
    switch(action.type){
        case LOGIN_SUCCESS:
            return{
                ...state,
                successAlert:action.payload
            }
        case LOGIN_FAILURE:
            return{
                ...state,
                failureAlert:action.payload
            }
        case REGISTER_SUCCESS:
                return{
                    ...state,
                    successAlert:action.payload
                }
        case REGISTER_FAILURE:
                return{
                    ...state,
                    failureAlert:action.payload
                }
        case RESET_MESSAGE:
            return{
                ...state,
                successAlert:'',
                failureAlert:''
            }
        default :
                return state
    }
}

export default alertReducer