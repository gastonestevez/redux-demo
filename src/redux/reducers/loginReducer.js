const SET_LOGGED_USER = 'SET_LOGGED_USER'
const SET_LOGOUT = 'SET_LOGOUT'

const initialState = {
    username: '',
    token: '',
    loggedIn: false,
}

export const setLogout = () => {
    console.log('logout!')
    return {
        type: SET_LOGOUT,
    }
}

export const setLogin = (payload) => {
    return {
        type: SET_LOGGED_USER,
        payload: {
            username: payload.username,
            token: payload.token
        }
    }
}

const reducer = (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type) {
        case SET_LOGGED_USER: {
            const {
                username,
                token
            } = action.payload
            return {
                ...state,
                username,
                token,
                loggedIn: true,
            }
        }
        case SET_LOGOUT: {
            return {
                ...state,
                username: '',
                token: '',
                loggedIn: false,
            }
        }
        default: {
            return state
        }
    }
}

export default reducer