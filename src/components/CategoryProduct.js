import { NavLink } from "react-router-dom"

export default function CategoryProduct(props){

    const { image01, name, price } = props.product

    return (
        <div to='/policy' className='category__product__item'>
            <NavLink exact to={`/category/product/${props.product.slug}`}>
                <div className='category__product__item__image'>
                    <img src={image01} alt='' />
                </div>
                <div className='category__product__item__info'>
                    <h3 className='category__product__item__info__name'>{name}</h3>
                    <div className='category__product__item__info__price'>
                        {`${price}.000`}
                    </div>
                </div>
                <div className='btn category__product__item__buy'>Chọn mua</div>
            </NavLink>
        </div>
    )
}