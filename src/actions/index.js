
import * as types from '../constants/ActionType'

export const addToCart = (product, quantity, color, size) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity,
        color,
        size
    }
}

export const updateProductInCart = (product, quantity) => {
    return {
        type: types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
}

export const deleteCart = index => {
    return {
        type: types.DELETE_PRODUCT_IN_CART,
        index
    }
}