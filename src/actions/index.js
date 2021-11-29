
import * as types from '../constants/ActionType'

export const addProductToCart = (product, quantity, color, size) => {
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

export const deleteProductInCart = id => {
    return {
        type: types.DELETE_PRODUCT_IN_CART,
        id
    }
}

export const saveAccountUser = user => {
    return {
        type: types.SAVE_ACCOUNT_USER,
        user
    }
}