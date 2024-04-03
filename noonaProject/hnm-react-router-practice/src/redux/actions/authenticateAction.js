function login(id, password) {
    return (dispatch, getState) => {
        //async 함수 하고 나서
        dispatch({ type: "LOGIN_SUCCESS", payload: { id, password } })//디스패치 부름
    }
}

function logOut() {
    return (dispatch, getState) => {
        //async 함수 하고 나서
        dispatch({ type: "LOGOUT_SUCCESS" })//디스패치 부름
    }
}



export const authenticateAction = { login, logOut }