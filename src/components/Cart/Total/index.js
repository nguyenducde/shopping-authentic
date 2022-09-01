import { connect } from 'react-redux'
import { ButtonLink } from '../../../common/Button'
import numberWithCommas from '../../../common/numberWithCommas'

function CartTotal(props) {
    const carts = props.carts
    const user = props.user

    const totalPrice = (carts) => {
        let total = 0
        for (let i = 0; i < carts.length; i++) {
            total += carts[i].product.price * carts[i].quantity
        }
        return total
    }

    return (
        <div className='cart__info__totoalPrice'>
            <div className='cart__info__totoalPrice__info'>
                <p>Thành tiền</p>
                <div className='cart__info__totoalPrice__info__group'>
                    <p>
                        {numberWithCommas(totalPrice(carts))}
                        <label className='vnd'>đ</label>
                    </p>
                    <span>(Đã bao gồm VAT nếu có)</span>
                </div>
            </div>
            <div>
                {carts.length === 0 ? (
                    <ButtonLink to='/danh-muc' className='btn cart__btn'>
                        Trở về mua hàng
                    </ButtonLink>
                ) : (
                    <ButtonLink
                        to='/dang-nhap'
                        className={`btn cart__btn ${user.isLogin ? 'cart-disable' : ''}`}
                    >
                        {user.isLogin ? 'Admin chưa xử lý !!!' : 'Tiến hành đặt hàng'}
                    </ButtonLink>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer,
    }
}

export default connect(mapStateToProps, null)(CartTotal)
