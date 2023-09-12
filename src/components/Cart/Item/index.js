import React, { useState } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { deleteProductInCart, updateProductInCart } from '../../../redux/actions'
import numberWithCommas from '../../../common/numberWithCommas'
import { toastSuccess } from '../../../common/toastify'

function CartItem(props) {
    const { cart, color, size } = props
    const quantityCart = props.quantityCart
    const tag = cart.tag

    const [quantity, setQuantity] = useState(quantityCart)

    const showSubTotal = (price) => {
        return price * quantity
    }

    const handleDeleteProductInCart = (id) => {
        props.onDeleteProductInCart(id)
        toastSuccess('Xóa thành công !', 2000)
    }

    const handleUpdateProductInCart = (cart, quantity) => {
        setQuantity(quantity)
        props.onUpdateProductInCart(cart, quantity)
    }

    return (
        <div className='cart__info__product__item'>
            <div className='cart__info__product__item__group'>
                <NavLink exact to={`/danh-muc/san-pham/${tag}`}>
                    <img src={cart.image01} alt='' />
                </NavLink>
                <div className='cart__info__product__item__group__info'>
                    <NavLink exact to={`/danh-muc/san-pham/${tag}`}>
                        {cart.name}
                    </NavLink>
                    <p className='color'>Màu: {color}</p>
                    <p className='color'>Size: {size.toUpperCase()}</p>
                </div>
            </div>

            <div className='cart__info__product__group cart__info__product__heading__quantity'>
                <div className='cart__info__product__group__list cart__info--quantity-flex'>
                    <button
                        className={`cart__info__product__item__btn btn-size ${
                            quantity === 1 ? 'btn-disable' : ''
                        }`}
                        disabled={quantity === 1 ? 'disabled' : ''}
                        onClick={() => handleUpdateProductInCart(cart, quantity - 1)}
                    >
                        <i className='fas fa-minus'></i>
                    </button>
                    <div className='cart__info__product__item__quantity text-size'>{quantity}</div>
                    <button
                        className='cart__info__product__item__btn btn-size'
                        onClick={() => handleUpdateProductInCart(cart, quantity + 1)}
                    >
                        <i className='fas fa-plus'></i>
                    </button>
                </div>
            </div>
            <div className='cart__info__product__item__price cart__info__product__heading__price'>
                {numberWithCommas(showSubTotal(cart.price))}
                <span className='vnd'>đ</span>
            </div>
            <div className='cart__info__product__item__delete cart__info__product__heading__delete'>
                <span className='btn-delete' onClick={() => handleDeleteProductInCart(cart.id)}>
                    Xóa
                    {/* <div className='cart__info__product__item__delete__notification'>
                         <p>Bạn có chắc chắn muốn xóa</p>
                         <div className='cart__info__product__item__delete__notification__group'>
                            <span className='cart__info__product__item__delete__notification__group__btn btn-unDelete'>Không</span>
                            <span className='cart__info__product__item__delete__notification__group__btn btn-yes' onClick={() => handleDeleteProductInCart(cart.id)}>Có</span>
                        </div>
                     </div> */}
                </span>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (id) => {
            dispatch(deleteProductInCart(id))
        },
        onUpdateProductInCart: (cart, quantity) => {
            dispatch(updateProductInCart(cart, quantity))
        },
    }
}

export default connect(null, mapDispatchToProps)(React.memo(CartItem))
