
import * as types from '../constants/ActionType'
// const data = JSON.parse(localStorage.getItem('CART'))

const initialState = [
    {
        product: {
            name: 'Áo thun Dinosaur 01',
            price: 189,
            // image01: product_01_image_01,
            // image02: product_01_image_02,
            dressSlug: 'ao-thun',
            colors: ['Trắng', 'Đỏ', 'Cam'],
            slug: 'ao-thun-dinosaur-01',
            size: ['s', 'm', 'l', 'xl'],
        },
        quantity: 5
    },
    {
        product: {
            name: 'Áo thun Dinosaur 02',
            price: 159,
            // image01: product_01_image_01,
            // image02: product_01_image_02,
            dressSlug: 'ao-thun',
            colors: ['Trắng', 'Đỏ', 'Cam'],
            slug: 'ao-thun-dinosaur-01',
            size: ['s', 'm', 'l', 'xl'],
        },
        quantity: 2
    }
]

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case types.ADD_TO_CART:
            state.push({
                product: action.product,
                quantity: action.quantity
            })
            return [...state]
        default: return [...state]
    }
}

export default cartReducer   