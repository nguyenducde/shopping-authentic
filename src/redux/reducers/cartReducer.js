import * as types from '../constants/ActionType'

const data = JSON.parse(localStorage.getItem('CART'))

const initialState = data ? data : []

const cartReducer = (state = initialState, action) => {
    const product = action.product
    const quantity = action.quantity
    const color = action.color
    const size = action.size
    let index = -1

    switch(action.type){
        case types.ADD_TO_CART:
            index = state.findIndex(item => item.product.id === product.id)
            
            if(index > -1){
                state[index].quantity += quantity
                state[index].color = color
                state[index].size = size
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

        case types.DELETE_PRODUCT_IN_CART:
            const newCart = [...state]

           const result = newCart.filter(item => {
               return item.product.id !== action.id
            })

            localStorage.setItem('CART', JSON.stringify(result))
            return result

        case types.UPDATE_PRODUCT_IN_CART:
            index = state.findIndex(item => item.product.id === product.id)
            if(index > -1) {
                state[index].quantity = quantity
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]

        default: return [...state]
    }
}


export default cartReducer   