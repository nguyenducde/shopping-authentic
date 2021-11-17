import { useState } from "react"
import { NavLink } from "react-router-dom"
import img01 from '../assets/images/products/product-01 (1).jpg'

export default function Cart(){

    const [quantity, setQuantity] = useState(1)

    const updateQuantity = (type) => {
        if(type === 'plus') setQuantity(quantity + 1)
        else setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
    }

    return (
        <div className='cart'>
            <div className='container'>
                <div className='cart__title'>Giỏ hàng <span>( 1 sản phẩm)</span></div>
                <div className='cart__info'>
                    <div className='cart__info__product'>
                        <div className='cart__info__product__heading'>
                            <p className='cart__info__product__heading__product'>Sản phẩm</p>
                            <p className='cart__info__product__heading__quantity'>Số lượng</p>
                            <p className='cart__info__product__heading__price'>Giá tiền</p>
                            <p className='cart__info__product__heading__delete'></p>
                        </div>
                        <div className='cart__info__product__item'>
                            <div className='cart__info__product__item__group'>
                                <img src={img01} alt='' />
                                <div className='cart__info__product__item__group__info'>
                                    <p>Áo somi dài tay 08</p>
                                    <span>Màu: Trắng - Size: XL </span>
                                </div>
                            </div>
                            <div className='product-detail__info__group cart__info__product__heading__quantity'>
                                <div className='product-detail__info__group__list'>
                                    <button className='product-detail__info__group__list__btn btn-size' disabled={quantity === 1 ? 'disabled' : '' } onClick={() => updateQuantity('minus')}>
                                        <i className="fas fa-minus"></i>
                                    </button>
                                    <div className='product-detail__info__group__list__quatity text-size'>{quantity}</div>
                                    <button className='product-detail__info__group__list__btn btn-size' onClick={() => updateQuantity('plus')}>
                                        <i className="fas fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                            <div className='cart__info__product__item__price cart__info__product__heading__price'>
                                198.000
                                <span className='vnd'>đ</span>
                            </div>
                            <div className='cart__info__product__item__delete cart__info__product__heading__delete'>
                                <p>Xóa</p>
                            </div>
                        </div>
                        <div className='cart__info__product__item'>
                            <div className='cart__info__product__item__group'>
                                <img src={img01} alt='' />
                                <div className='cart__info__product__item__group__info'>
                                    <p>Áo somi dài tay 08</p>
                                    <span>Màu: Trắng - Size: XL </span>
                                </div>
                            </div>
                            <div className='product-detail__info__group cart__info__product__heading__quantity'>
                                <div className='product-detail__info__group__list'>
                                    <button className='product-detail__info__group__list__btn btn-size' disabled={quantity === 1 ? 'disabled' : '' } onClick={() => updateQuantity('minus')}>
                                        <i className="fas fa-minus"></i>
                                    </button>
                                    <div className='product-detail__info__group__list__quatity text-size'>{quantity}</div>
                                    <button className='product-detail__info__group__list__btn btn-size' onClick={() => updateQuantity('plus')}>
                                        <i className="fas fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                            <div className='cart__info__product__item__price cart__info__product__heading__price'>
                                198.000
                                <span className='vnd'>đ</span>
                            </div>
                            <div className='cart__info__product__item__delete cart__info__product__heading__delete'>
                                <p>Xóa</p>
                            </div>
                        </div>
                        <div className='cart__info__product__item'>
                            <div className='cart__info__product__item__group'>
                                <img src={img01} alt='' />
                                <div className='cart__info__product__item__group__info'>
                                    <p>Áo somi dài tay 08</p>
                                    <span>Màu: Trắng - Size: XL </span>
                                </div>
                            </div>
                            <div className='product-detail__info__group cart__info__product__heading__quantity'>
                                <div className='product-detail__info__group__list'>
                                    <button className='product-detail__info__group__list__btn btn-size' disabled={quantity === 1 ? 'disabled' : '' } onClick={() => updateQuantity('minus')}>
                                        <i className="fas fa-minus"></i>
                                    </button>
                                    <div className='product-detail__info__group__list__quatity text-size'>{quantity}</div>
                                    <button className='product-detail__info__group__list__btn btn-size' onClick={() => updateQuantity('plus')}>
                                        <i className="fas fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                            <div className='cart__info__product__item__price cart__info__product__heading__price'>
                                198.000
                                <span className='vnd'>đ</span>
                            </div>
                            <div className='cart__info__product__item__delete cart__info__product__heading__delete'>
                                <p>Xóa</p>
                            </div>
                        </div>
                    </div>
                    <div className='cart__info__totoalPrice'>
                        <div className='cart__info__totoalPrice__info'>
                            <p>Thành tiền</p>
                            <div className='cart__info__totoalPrice__info__group'>
                                <p>198.000<label className='vnd'>đ</label></p>
                                <span>(Đã bao gồm VAT nếu có)</span>
                            </div>
                        </div>
                        <div>
                            <NavLink to='#1' className='btn btn-full'>Tiến hành đặt hàng</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}