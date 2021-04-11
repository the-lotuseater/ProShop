import React from 'react'
import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL} from '../constants/productContants'

/**
 *A reducer is a function that accepts a state as an argument and manipulates it by applying an action to it.
 * 
 */

/**
 * Used to update the product list. 
 * @param {} state 
 * @param {*} action 
 * @returns 
 */
export const productListReducers = (state = {products: [] }, action) => {
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products:[] }
        case PRODUCT_LIST_SUCCESS: //Used when we update the product array.
            return { loading: false, products: action.payload }
        case PRODUCT_LIST_FAIL: //Used when the loading of the product list fails.
            return { loading: false, error: action.payload }
        default: return state //return the initial state
    }
}

export const productDetailsReducers = (state = {products: {reviews:[]} }, action) => {
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return { loading: true, ...state }
        case PRODUCT_LIST_SUCCESS: //Used when we update the product array.
            return { loading: false, product: action.payload }
        case PRODUCT_LIST_FAIL: //Used when the loading of the product list fails.
            return { loading: false, error: action.payload }
        default: return state //return the initial state
    }
}