
import * as types from '../constants/ActionType'
const data = JSON.parse(localStorage.getItem('CART'))

const initialState = data ? data : []

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case types.ADD_TO_CART:

            const product = action.product
            const quantity = action.quantity
            const color = action.color
            const size = action.size
            let index = -1

            index = state.findIndex(item => item.product.id === product.id)
            
            if(index > -1){
                state[index].quantity += quantity
            } else {
                state.push({
                    product,
                    quantity,
                    color,
                    size
                })
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]
        default: return [...state]
    }
}


export default cartReducer   