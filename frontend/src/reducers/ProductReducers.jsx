import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,

    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL

} from '../constants/ProductConstants'


export const productListReducer = (state = { products: [] }, action) => {
    console.log("Entering ProductReducers.productListReducer.")
    let response =null;
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] }

        case PRODUCT_LIST_SUCCESS:
            response ={
                loading: false,
                products: action.payload
            }
            console.log("Exiting product reducer. Returning response "+response)
            return response

        case PRODUCT_LIST_FAIL:
            response = { loading: false, error: action.payload }
            console.log("Exiting product reducer. Returning response "+JSON.stringify(response))
            return response

        default:
            console.log("Exiting product reducer. Returning response "+JSON.stringify(response))
            return state
    }
}

export const productDetailsReducer = (state = { product: { reviews: [] } }, action) => {
    console.log("Entering Product Details.")
    let response = null;
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            response = { loading: true, ...state }
            console.log("Exiting product details reducer. Returning response "+response)
            return response

        case PRODUCT_DETAILS_SUCCESS:
            response ={ loading: false, product: action.payload }
            console.log("Exiting product details reducer. Returning response "+response)
            return response

        case PRODUCT_DETAILS_FAIL:
            response = { loading: false, error: action.payload }
            console.log("Exiting product details reducer. Returning response "+response)
            return response

        default:
            return state
    }
}