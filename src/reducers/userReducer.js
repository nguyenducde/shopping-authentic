import * as types from '../constants/ActionType'

const data = JSON.parse(localStorage.getItem('USER'))

const initialState = data ? data : {
    isLogin: false,
    name: '',
    photo: ''
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.SAVE_ACCOUNT_USER:
            state = {
                isLogin: true,
                name: action.user.displayName,
                photo: action.user.photoURL
            }
            localStorage.setItem('USER', JSON.stringify(state))
            return state
        case types.LOGOUT_ACCOUNT_USER:
            state = {
                isLogin: action.boolean
            }
            localStorage.setItem('USER', JSON.stringify(state))
            return state
        default: return state
    }
}

export default userReducer