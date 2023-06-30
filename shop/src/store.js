import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'
//redux는 컴포넌트 간의 state공유가 귀찮을 때 씀 즉 props전송이 필요가 없어진다.

//useState와 비슷한 역할

let cart = createSlice({
    name : 'cart',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1},
    ],
    reducers : {
        changeCount(state, action){
            let 번호 =  state.findIndex((a)=>{ return a.id === action.payload})
            state[번호].count ++;
        },
        
        addItem(state, action){
            let 번호 =  state.findIndex((a)=>{ return a.id === action.payload.id})
            if(state[번호] == null){
                state.push(action.payload)
            }else{
                let plusNum  = parseInt(action.payload.count, 10)
                let orNum = parseInt(state[번호].count)
                state[번호].count = orNum+plusNum
            }
        },

        deleteItem(state, action){
            let 번호 =  state.findIndex((a)=>{ return a.id === action.payload})
            state.splice(번호,1) 
        }

    }
})




export default configureStore({
    reducer: {
        user : user.reducer,
        cart : cart.reducer
    }
})


export let { changeCount, addItem, deleteItem } = cart.actions;

