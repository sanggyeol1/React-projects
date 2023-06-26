import { configureStore, createSlice } from '@reduxjs/toolkit'
//redux는 컴포넌트 간의 state공유가 귀찮을 때 씀 즉 props전송이 필요가 없어진다.

//useState와 비슷한 역할



let cart = createSlice({
    name : 'cart',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1},
        {id : 2, name : 'White Yordan', count : 1},
        {id : 2, name : 'Grey Yordan', count : 1},
        {id : 2, name : 'Grey Yordan', count : 1},
    ],
    reducers : {
        changeCount(state, action){
            const {index, count} = action.playload
            state[index].count += count;
        }
    }
})

let user = createSlice({
    name : 'user',
    initialState : 'kim',
    reducers : {
        changeName(state){
            return 'jhon '+ state;
        }
    }
})



export default configureStore({
    reducer: {
        user : user.reducer,
        cart : cart.reducer
    }
})

export let { changeName } = user.actions
export let { changeCount } = cart.actions