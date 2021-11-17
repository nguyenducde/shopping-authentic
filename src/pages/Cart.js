import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import CartItem from "../components/CartItem"
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
                                return <CartItem cart={cart.product} quantityCart={cart.quantity} key={index} />
                            })
                        }

                    </div>
                    <div className='cart__info__totoalPrice'>
                        <div className='cart__info__totoalPrice__info'>
                            <p>Thành tiền</p>
                            <div className='cart__info__totoalPrice__info__group'>
                                <p>198.000<label className='vnd'>đ</label></p>
                                <span>(Đã bao gồm VAT nếu có)</span>
                            </div>
                        </div>
                        <div>
                            <NavLink to='#1' className='btn btn-full'>Tiến hành đặt hàng</NavLink>
                        </div>
                    </div>
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