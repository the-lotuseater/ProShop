import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListProducers } from './producer/ProductProducer'
import { productListReducers, productDetailsReducers } from './reducer/ProductReducers'

const reducer = combineReducers({
    productList: productListReducers,
    productDetails: productDetailsReducers
})

const initialState = {}
const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store