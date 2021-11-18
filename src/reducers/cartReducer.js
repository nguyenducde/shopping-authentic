
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
            index = findIndexOfProduct(state, product)
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

const findIndexOfProduct = (carts, product) => {
    let index = -1
    if(carts.length > 0 ){
        for(let i = 0; i < carts.length; i++){
            if(carts[i].product.id === product.id){
                index = i
                break
            }
        }
    }
    return index
}

export default cartReducer   