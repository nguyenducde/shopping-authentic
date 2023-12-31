import { useEffect } from 'react'
import { connect } from 'react-redux'
import CartItem from '../components/Cart/Item'
import CartTotal from '../components/Cart/Total'
import * as Message from '../redux/constants/Message'

function Cart(props) {
    const { carts } = props

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='cart'>
            <div className='container'>
                <div className='cart__title'>
                    Giỏ hàng <span>( {carts.length} sản phẩm)</span>
                </div>
                <div className='cart__info'>
                    <div className='cart__info__product'>
                        <div className='cart__info__product__heading'>
                            <p className='cart__info__product__heading__product'>Sản phẩm</p>
                            <p className='cart__info__product__heading__quantity'>Số lượng</p>
                            <p className='cart__info__product__heading__price'>Giá tiền</p>
                            <p className='cart__info__product__heading__delete'></p>
                        </div>

                        {carts.length === 0 ? (
                            <p
                                style={{
                                    fontSize: 1.5 + 'rem',
                                    textAlign: 'center',
                                    paddingBottom: 2 + 'rem',
                                    fontWeight: 500,
                                }}
                            >
                                {Message.MSG_CART_EMPTY}
                            </p>
                        ) : (
                            carts.map((cart, index) => {
                                return (
                                    <CartItem
                                        index={index}
                                        cart={cart.product}
                                        color={cart.color}
                                        size={cart.size}
                                        quantityCart={cart.quantity}
                                        key={index}
                                    />
                                )
                            })
                        )}
                    </div>
                    <CartTotal carts={carts} />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        carts: state.cartReducer,
    }
}

export default connect(mapStateToProps, null)(Cart)
