import React from 'react'
import {CART_ADD_ITEM} from '../constants/CartContants'

export const cartReducer = (state={cartItems:[]}, action) => {
    console.log("Entering CartReducers.CartReducer.")
    let response = {};
    switch(action.type){
        case CART_ADD_ITEM: 
            const newItem = action.payload
            const itemExists = state.cartItems.find(item =>  item.product === newItem.product )
                if( itemExists ){
                    response = {
                        ...state,
                        cartItems: state.cartItems.map( item => item.product === itemExists.product ? newItem : item )
                    }
                    console.log("Exiting Cart Reducer with response "+response)
                    return response
                }else{
                    response  = {...state, cartItems:[...state.cartItems, newItem]}
                    console.log("Exiting Cart Reducer with response "+response)
                    return response
                }
        default:{
            console.log("Returning default state.")
            return state
        }
    }
}
