import { createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name : 'user',
    initialState : {name : 'kim', age : 20},
    reducers : {
        changeName(state) {
            state.name = 'park'
        },
        addAge(state, action) {//a는파라미터
            state.age+=action.payload;//화물, 소포, 택배 이런 뜻
        }
    }
})


export let { changeName, addAge } = user.actions;


export default user