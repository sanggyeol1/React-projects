let initialState = {
    contactList: [],
    keyword: "",

};
//행동지침서
function contactReducer(state = initialState, action) {
    const{type,payload} = action

    switch (type) {
        case "ADD_CONTACT":
            return { 
                ...state, 
                contactList: [
                    ...state.contactList, 
                    { name: action.payload.name, phoneNumber: action.payload.phoneNumber }
                ], 
            };
        case "SEARCH_BY_USERNAME":
            return { ...state, keyword: payload.keyword };
        default:
            return { ...state }
    }
}

export default contactReducer