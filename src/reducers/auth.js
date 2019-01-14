import globals from '../constants/constants'

let initialState = {
    user: '',
    token: '',
    loading: false,
    error: '',
    errorMessage: ''
}

export const auth = (state = initialState, action) => {
    switch(action.type) {
        case globals.LOGIN:
        case globals.LOGIN_FAILED:
        case globals.LOGIN_SUCCEDED:
        case globals.REGISTER:
        case globals.REGISTER_FAILED:
        case globals.REGISTER_SUCCEDED:
            return { ...state, ...action.payload }
        default:
            return { ...state}
    }
}