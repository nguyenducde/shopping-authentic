import { NavLink } from "react-router-dom"

export default function ProductCard(props){

    const { image01, name, price } = props.product

    return (
        <div to='/policy' className='product-card__item'>
            <NavLink exact to={`category/${props.product.slug}`}>
                <div className='product-card__item__image'>
                    <img src={image01} alt='' />
                </div>
                <div className='product-card__item__info'>
                    <h3 className='product-card__item__info__name'>{name}</h3>
                    <div className='product-card__item__info__price'>
                        {`${price}.000`}
                    </div>
                </div>
                <div className='btn product-card__item__buy'>Chọn mua</div>
            </NavLink>
        </div>
    )
}