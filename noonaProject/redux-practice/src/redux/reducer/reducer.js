//행동지침서

let initialState = {
    count: 0,
    value : 0
}

function reducer(state = initialState, action) {
    console.log("action?:", action)
    if (action.type === "INCREMENT") {
        return { ...state, count: state.count + parseInt(action.payload.num) }
    }
    else if(action.type === "DECREMENT"){
        return { ...state, count: state.count - parseInt(action.payload.num) }
    }
    else if(action.type === "setValue"){
        return { ...state, value: action.payload.num }
    }

    return {...state}
}

export default reducer;