import axios from 'axios'
import {CART_ADD_ITEM } from '../constants/CartContants'
import { dispatch } from 'react-redux'
import PRODUCTS_API from '../constants/api.constants'

export const addToCart = (id, qty) => async(dispatch, getState) => {
    console.log("Entering CartActions.addToCart.")
    const { data } = await axios.get(`${PRODUCTS_API}/${id}`)
    console.log("Dispatching ")
    dispatch({
        type: CART_ADD_ITEM, 
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })
    console.log(getState().cart.cartItems);
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
    console.log("Exiting add to cart function.")
}