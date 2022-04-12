import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import numberWithCommas from "../utils/numberWithCommas"

function CartTotal(props) {

    const carts = props.carts
    const user = props.user

    const totalPrice = (carts) => {
        let total = 0
        for(let i = 0; i < carts.length; i++){
            total += carts[i].product.price * carts[i].quantity
        }
        return total
    }

    return (
        <div className='cart__info__totoalPrice'>
            <div className='cart__info__totoalPrice__info'>
                <p>Thành tiền</p>
                <div className='cart__info__totoalPrice__info__group'>
                    <p>{numberWithCommas(totalPrice(carts))}<label className='vnd'>đ</label></p>
                    <span>(Đã bao gồm VAT nếu có)</span>
                </div>
            </div>
            <div>
                {
                    carts.length === 0
                    ?
                    <NavLink to='/danh-muc' className='btn btn-full'>Trở về mua hàng</NavLink>
                    :
                    <NavLink 
                        to='/dang-nhap' 
                        className={`btn btn-full ${user.isLogin ? 'cart-disable' : ''}`}
                    >
                        {user.isLogin ? 'Admin chưa xử lý !!!' : 'Tiến hành đặt hàng'}
                    </NavLink>
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.userReducer
    }
}

export default connect(mapStateToProps, null)(CartTotal)