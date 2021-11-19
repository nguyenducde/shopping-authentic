import { useEffect, useState } from "react"
import numberWithCommas from "../utils/numberWithCommas"
import { deleteCart } from "../actions"
import { connect } from "react-redux"

function CartItem(props) {
    const { cart, color, size } = props

    const quantityCart = props.quantityCart

    const [quantity, setQuantity] = useState(quantityCart)

    const updateQuantity = (type) => {
        if (type === 'plus') setQuantity(quantity + 1)
        else setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
    }

    const showSubTotal = (price) => {
        return price * quantity
    }

    useEffect(() => {
        const app = document.querySelector('.App')
        const btnDelete = document.querySelectorAll('.btn-delete')
        const btnUnDelete = document.querySelectorAll('.btn-unDelete')
        const divNotification = document.querySelectorAll('.cart__info__product__item__delete__notification')

        btnDelete.forEach((item1, index1) => {
            item1.addEventListener('click', (e) => {
                e.stopPropagation()
                divNotification.forEach((item2, index2) => {
                    if (index1 === index2)
                        item2.classList.add('show-notification')
                })
            })
        })

        app.addEventListener('click', (e) => {
            divNotification.forEach((item2, index2) => {
                item2.classList.remove('show-notification')
            })
        })
        btnUnDelete.forEach((item1, index1) => {
            item1.addEventListener('click', (e) => {
                e.stopPropagation()
                divNotification.forEach((item2, index2) => {
                    if (index1 === index2)
                        item2.classList.remove('show-notification')
                })
            })
        })



    }, [])


    useEffect(() => {
        const acceptDelete = document.querySelectorAll('.btn-yes')
        acceptDelete.forEach((item, index) => {
            item.addEventListener('click', () => {
                props.onDeleteProductInCart(index)
            })
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='cart__info__product__item'>
            <div className='cart__info__product__item__group'>
                <img src={cart.image01} alt='' />
                <div className='cart__info__product__item__group__info'>
                    <p>{cart.name}</p>
                    <span>Màu: {color} - Size: {size.toUpperCase()} </span>
                </div>
            </div>
            <div className='product-detail__info__group cart__info__product__heading__quantity'>
                <div className='product-detail__info__group__list'>
                    <button className='product-detail__info__group__list__btn btn-size' disabled={quantity === 1 ? 'disabled' : ''} onClick={() => updateQuantity('minus')}>
                        <i className="fas fa-minus"></i>
                    </button>
                    <div className='product-detail__info__group__list__quatity text-size'>{quantity}</div>
                    <button className='product-detail__info__group__list__btn btn-size' onClick={() => updateQuantity('plus')}>
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            <div className='cart__info__product__item__price cart__info__product__heading__price'>
                {numberWithCommas(`${showSubTotal(cart.price)}.000`)}
                <span className='vnd'>đ</span>
            </div>
            <div className='cart__info__product__item__delete cart__info__product__heading__delete'>
                <span className='btn-delete'>Xóa
                    <div className='cart__info__product__item__delete__notification'>
                        <p>Bạn có chắc chắn muốn xóa</p>
                        <div className='cart__info__product__item__delete__notification__group'>
                            <span className='cart__info__product__item__delete__notification__group__btn btn-unDelete'>Không</span>
                            <span className='cart__info__product__item__delete__notification__group__btn btn-yes'>Có</span>
                        </div>
                    </div>
                </span>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: index => {
            dispatch(deleteCart(index))
        }
    }
}

export default connect(null, mapDispatchToProps)(CartItem)