import { NavLink } from "react-router-dom"
import numberWithCommas from "../utils/numberWithCommas"

export default function ProductCard(props){

    const { image01, name, price } = props.product

    return (
        <div to='/policy' className='product-card__item'>
            <NavLink exact to={`/san-pham/${props.product.slug}`}>
                <div className='product-card__item__image'>
                    <img src={image01} alt='' />
                </div>
                <div className='product-card__item__info'>
                    <h3 className='product-card__item__info__name'>{name}</h3>
                    <div className='product-card__item__info__price'>
                        {numberWithCommas(price)}
                        <label className='vnd'>đ</label>
                    </div>
                </div>
                <div className='btn product-card__item__buy'>Xem chi tiết</div>
            </NavLink>
        </div>
    )
}