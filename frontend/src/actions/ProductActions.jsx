import {
    PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST, 
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL
} from '../constants/productContants'
import PRODUCTS_API from '../constants/api.constants'
import axios from 'axios'

/**
 * Dipatch is what it used to dispatch actions.
 * Redux thunk lets you create a function inside another function
 */
export const listProducts = () => async(dispatch) => {  
    try{
        //initialize the state
        dispatch({ type: PRODUCT_LIST_REQUEST })
        const {data} = await axios.get(`${PRODUCTS_API}/`)
        //load the state with products if everything goes right.
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })
    }catch(error){
        console.log("ERROR while making request"+error)
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

/**
 * Dipatch is what it used to dispatch actions.
 * Redux thunk lets you create a function inside another function
 */
export const listProductDetails = (id) => async(dispatch) => {  
    try{
        //initialize the state
        dispatch({ type: PRODUCT_DETAILS_REQUEST })
        const {data} = await axios.get(`${PRODUCTS_API}/${id}`)
        console.log(data)
        //load the state with products if everything goes right.
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}