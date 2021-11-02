import { useEffect } from "react"
import { NavLink } from "react-router-dom"
import { useState } from "react/cjs/react.development"

export default function ProductDetail(props){

    const { image01, image02, name, price, colors, size, product } = props.product

    const [previewImage, setPreviewImage] = useState(image01)
    
    const [quantity, setQuantity] = useState(1)

    const updateQuantity = (type) => {
        if(type === 'plus') setQuantity(quantity + 1)
        else setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
    }

    useEffect(() => {
        setPreviewImage(image01)
        setQuantity(1)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [product])
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
                                        <div className='product-detail__info__group__item' key={index}>
                                            <div className='product-detail__info__group__item--color' style={{backgroundColor: color}}></div>
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
                                    return <div className='product-detail__info__group__item product-detail__info__group__item--size' key={index}>{item}</div>
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
                </div>
            </div>
            <div className='product-detail__description'>
                <div className='product-detail__description__group'>
                    <p className='product-detail__description__title'>Chi tiết: </p>
                    <p className='product-detail__description__content' dangerouslySetInnerHTML={{__html:props.product.description}}></p>
                </div>
                <div className='product-detail__description__group'>
                    <span className='product-detail__description__title'>Màu sắc: </span>
                    <span className='product-detail__description__content'>Trắng, vàng</span>
                </div>
                <div className='product-detail__description__group'>
                    <span className='product-detail__description__title'>Size: </span>
                    <span className='product-detail__description__content'>S, XL</span>
                </div>
            </div>
        </div>
    )
}