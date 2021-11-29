import * as types from '../constants/ActionType'

const initialState = []

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.SAVE_ACCOUNT_USER:
            return [...state, action.user]
        default: return [...state]
    }
}

export default userReducer