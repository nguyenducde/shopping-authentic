import { connect } from "react-redux"
import CartItem from "../components/CartItem"
import CartTotal from "../components/CartTotal"
import * as Message from '../constants/Message'

function Cart(props){

    const { carts } = props

    return (
        <div className='cart'>
            <div className='container'>
                <div className='cart__title'>Giỏ hàng <span>( 1 sản phẩm)</span></div>
                <div className='cart__info'>
                    <div className='cart__info__product'>
                        <div className='cart__info__product__heading'>
                            <p className='cart__info__product__heading__product'>Sản phẩm</p>
                            <p className='cart__info__product__heading__quantity'>Số lượng</p>
                            <p className='cart__info__product__heading__price'>Giá tiền</p>
                            <p className='cart__info__product__heading__delete'></p>
                        </div>

                        {
                            carts.map((cart, index) => {
                                return <CartItem cart={cart.product} color={cart.color} size={cart.size} quantityCart={cart.quantity} key={index} />
                            })  
                        }

                    </div>
                    <CartTotal carts={carts}/>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        carts: state.cartReducer
    }
}

export default connect(mapStateToProps, null)(Cart)