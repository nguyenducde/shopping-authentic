import { NavLink } from 'react-router-dom'
import numberWithCommas from '../../common/numberWithCommas'
import { ButtonNoLink } from '../../common/Button'

function ProductCard({ className, link, image, name, price, buttonTitle, ...type }) {
    return (
        <div className={className}>
            <NavLink exact to={link}>
                <div className='product-card__image'>
                    <img src={image} alt='' className='product-card__image--height' />
                </div>
                <div className='product-card__info'>
                    <h3 className='product-card__info__name'>{name}</h3>
                    <div className='product-card__info__price'>
                        {numberWithCommas(price)}
                        <label className='vnd'>đ</label>
                    </div>
                </div>
                <ButtonNoLink className='btn product-card__buy'>{buttonTitle}</ButtonNoLink>
                {type.isBestSeller ? (
                    <div className='best-seller'>
                        <i className='bx bxs-hot'></i>
                        <span>Best Seller</span>
                    </div>
                ) : type.isNewProduct ? (
                    <div className='new'>
                        <span>NEW</span>
                    </div>
                ) : (
                    ''
                )}
            </NavLink>
        </div>
    )
}

export default ProductCard
