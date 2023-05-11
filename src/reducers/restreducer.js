import { R_FAIL,R_SUCESS } from "../constants/restconstants";

export const restListReducer=(state={
    restList:[]},action)=>{
    switch(action.type){
        case R_SUCESS:
            return{
                restList:action.payload
            }
            case R_FAIL:
                return{
                    restList:action.error
                }
                default:
                    return state
                   
                
    }
    }
