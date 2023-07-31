import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name : 'user',
    initialState : { name : "Han sang gyeol" },
    reducers : {
        changeName(state){//state는 기존 state
            state.name = 'park'
        },
        
    }

})

export let { changeName, changeAge } = user.actions // user의 함수들이 오브젝트자료형으로 남음

let cart = createSlice({
    name : 'cart',
    initialState : [
        {id : 0, title : 'White and Black', count : 2},
        {id : 2, title : 'Grey Yordan', count : 1}
    ],
    reducers : {
        changeCount(state, action){//state는 기존 state
            let result = state.findIndex((e) => e.id == action.payload)
            state[result].count ++;
        },
        addItem(state, action){
            let result = state.findIndex((e) => e.id == action.payload.id)

            if(result == -1){//index번호를찾지 못했다면
                action.payload.count = 1
                state.push(action.payload)
            }else{//제품이 이미 있다면
                state[result].count+=1;
            }
        }, 
        deleteItem(state, action){
            let result = state.findIndex((e) => e.id == action.payload)
            state.splice(result, 1)
        }
        
    }
    
   
})
export let { changeCount, addItem, deleteItem } = cart.actions // cart의 함수들이 오브젝트자료형으로 남음


export default configureStore({
  reducer: { 
    user : user.reducer,
    cart : cart.reducer
  }
}) 

