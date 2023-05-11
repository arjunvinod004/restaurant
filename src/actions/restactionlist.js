import axios from "axios";
import constants, { R_FAIL, R_SUCESS } from '../constants/restconstants'
import { useSelector } from "react-redux";
export const RestListAction=()=> async(dispatch)=>{
    try{
    const result=await axios.get('/restaurants.json')
    console.log(result.data.restaurants); // array of data
    dispatch({
        type:R_SUCESS,
        payload:result.data.restaurants
    })
}
catch(error){
    dispatch({
        type:R_FAIL,
        error:error
    })

}
}