const AUTH_ACTIONS = {
    SET_USER: "set-user",
    CLEAR_USER: "clear-user",
};

const auth = {
    currentUser: {},
    isLoggedIn: localStorage.getItem('usertoken') !== null,
}

const authReducer = (auth, action) => {
    switch (action.type) {
        case AUTH_ACTIONS.SET_USER:
            return {
                ...auth, // unpacking other auth properties (in case we want to add something new in the future)
                currentUser: action.payload,
                isLoggedIn: true,
            }
        case AUTH_ACTIONS.CLEAR_USER:
            return {
                ...auth, // unpacking other auth properties (in case we want to add something new in the future)
                isLoggedIn: false,
                currentUser: {},
            }
        default:
            break;
    }
};


export {
    authReducer,
    auth,
};
