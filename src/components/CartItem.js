import { useState } from "react"


function CartItem(props) {
    const { cart, color, size } = props

    const quantityCart = props.quantityCart

    const [quantity, setQuantity] = useState(quantityCart)

    const updateQuantity = (type) => {
        if(type === 'plus') setQuantity(quantity + 1)
        else setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
    }
    
    const showSubTotal = (price) => {
        return price * quantity
    }

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
                    <button className='product-detail__info__group__list__btn btn-size' disabled={quantity === 1 ? 'disabled' : '' } onClick={() => updateQuantity('minus')}>
                        <i className="fas fa-minus"></i>
                    </button>
                    <div className='product-detail__info__group__list__quatity text-size'>{quantity}</div>
                    <button className='product-detail__info__group__list__btn btn-size' onClick={() => updateQuantity('plus')}>
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            <div className='cart__info__product__item__price cart__info__product__heading__price'>
                {`${showSubTotal(cart.price)}.000`}
                <span className='vnd'>đ</span>
            </div>
            <div className='cart__info__product__item__delete cart__info__product__heading__delete'>
                <p>Xóa</p>
            </div>
        </div>
    )
}

export default CartItem