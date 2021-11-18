import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { addToCart } from "../actions"

function ProductDetail(props){

    const { image01, image02, name, price, colors, size } = props.product
    const product = props.product

    const [previewImage, setPreviewImage] = useState(image01)
    
    const [quantity, setQuantity] = useState(1)

    const [activeColor, setActiveColor] = useState(undefined)

    const [activeSize, setActiveSize] = useState(undefined)

    const updateQuantity = (type) => {
        if(type === 'plus') setQuantity(quantity + 1)
        else setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
    }

    useEffect(() => {
        setPreviewImage(image01)
        setQuantity(1)
        setActiveColor(colors[0])
        setActiveSize(size[0])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [product])

    const handleAddToCart = (product, quantity) => {
        props.onAddToCart(product, quantity);
    }

    return (
        <div className='product-detail'>
            <div className='product-detail__image'>
                <div className='product-detail__image__list'>
                    <img className='product-detail__image__list__item' onClick={() => setPreviewImage(image01)} src={image01} alt='' />
                    <img className='product-detail__image__list__item' onClick={() => setPreviewImage(image02)} src={image02} alt='' />
                </div>
                <img className='product-detail__image__main' src={previewImage} alt='' />
                <div className='product-detail__info'>
                    <p className='product-detail__info__name'>{name}</p>
                    <p className='product-detail__info__price'>
                        Giá: 
                        <span>{` ${price}.000`}</span>
                    </p>
                    <div className='product-detail__info__group'>
                        <p className='product-detail__info__group__title'>Màu sắc</p>
                        <div className='product-detail__info__group__list'>
                            {
                                colors.map((color, index) => {
                                    return (
                                        <div className={`product-detail__info__group__item ${activeColor === color ? 'active' : ''}`} key={index} onClick={() => setActiveColor(color)}>
                                            <div className='product-detail__info__group__item--color'>{color}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='product-detail__info__group'>
                        <p className='product-detail__info__group__title'>Kích cỡ</p>
                        <div className='product-detail__info__group__list'>
                            {
                                size.map((item, index) => {
                                    return <div className={`product-detail__info__group__item ${activeSize === item ? 'active' : ''} product-detail__info__group__item--size}`} key={index} onClick={() => setActiveSize(item)}>{item}</div>
                                })
                            }
                        </div>
                    </div>
                    <div className='product-detail__info__group'>
                        <p className='product-detail__info__group__title'>Số lượng</p>
                        <div className='product-detail__info__group__list'>
                            <button className='product-detail__info__group__list__btn' disabled={quantity === 1 ? 'disabled' : '' } onClick={() => updateQuantity('minus')}>
                                <i className="fas fa-minus"></i>
                            </button>
                            <div className='product-detail__info__group__list__quatity'>{quantity}</div>
                            <button className='product-detail__info__group__list__btn' onClick={() => updateQuantity('plus')}>
                                <i className="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                    <div className='btn product-detail__info__cart' onClick={() => handleAddToCart(product, quantity)}>Thêm vào giỏ hàng</div>
                </div>
            </div>
            <div className='product-detail__description'>
                <div className='product-detail__description__group'>
                    <p className='product-detail__description__title'>Chi tiết: </p>
                    <p className='product-detail__description__content' dangerouslySetInnerHTML={{__html:product.description}}></p>
                </div>
                <div className='product-detail__description__group'>
                    <span className='product-detail__description__title'>Màu sắc: </span>
                    <span className='product-detail__description__content'>
                        {
                            colors.join(', ')
                        }
                        
                    </span>
                </div>
                <div className='product-detail__description__group'>
                    <span className='product-detail__description__title'>Size: </span>
                    <span className='product-detail__description__content'>
                        {
                            size.join(', ').toUpperCase()
                        }
                    </span>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product, quantity) => {
            dispatch(addToCart(product, quantity))
        }
    }
}

export default connect(null, mapDispatchToProps)(ProductDetail)