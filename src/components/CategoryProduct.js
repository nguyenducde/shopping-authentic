import { NavLink } from "react-router-dom"
import numberWithCommas from "../common/numberWithCommas"

export default function CategoryProduct(props){

    const { image01, name, price } = props.product

    return (
        <div to='/policy' className='category__product__item'>
            <NavLink exact to={`/danh-muc/san-pham/${props.product.slug}`}>
                <div className='category__product__item__image'>
                    <img src={image01} alt='' />
                </div>
                <div className='category__product__item__info'>
                    <h3 className='category__product__item__info__name'>{name}</h3>
                    <div className='category__product__item__info__price'>
                        {numberWithCommas(price)}
                        <label className='vnd'>đ</label>
                    </div>
                </div>
                <div className='btn category__product__item__buy'>Chọn mua</div>
            </NavLink>
        </div>
    )
}