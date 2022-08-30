import { NavLink } from 'react-router-dom'
import numberWithCommas from '../../common/numberWithCommas'
import { ButtonNoLink } from '../../common/Button'

function ProductCard({ className, link, image, name, price, buttonTitle }) {
    return (
        <div className={className}>
            <NavLink exact to={link}>
                <div className='product-card__item__image'>
                    <img src={image} alt='' />
                </div>
                <div className='product-card__item__info'>
                    <h3 className='product-card__item__info__name'>{name}</h3>
                    <div className='product-card__item__info__price'>
                        {numberWithCommas(price)}
                        <label className='vnd'>đ</label>
                    </div>
                </div>
                <ButtonNoLink className='btn product-card__item__buy'>{buttonTitle}</ButtonNoLink>
            </NavLink>
        </div>
    )
}

export default ProductCard
