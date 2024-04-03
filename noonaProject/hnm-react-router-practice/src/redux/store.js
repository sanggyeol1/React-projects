import { createStore, applyMiddleware } from "redux"
import { thunk } from "redux-thunk"
import rootReducer from './reducers/index'
import { composeWithDevTools } from '@redux-devtools/extension'
import { configureStore } from "@reduxjs/toolkit"
import productSlice from "./reducers/productSlice"
import authenticateReducer from "./reducers/authenticateReducer"


// let store = createStore(
//     rootReducer,
//     composeWithDevTools( applyMiddleware(thunk) )
// )
// combinereducer
// thunk
// applyMiddleware
// composeWithDevtools
    
const store = configureStore({//combine reducer 를 쓸 필요가 없다.

    reducer:{
        auth: authenticateReducer,
        product: productSlice,
    }
    
})

export default store