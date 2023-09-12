import { getProductsBySlice } from '../../../store-data/products'
import ProductCard from '../../../common/ProductCard'

function ProductPopular() {
    return (
        <section className='product product--unset-border product--mb-2 product--mb-unset'>
            <h3 className='product__heading'>Sản phẩm phổ biến</h3>
            <div className='product-list'>
                {getProductsBySlice(6, 18).map((product, index) => {
                    return (
                        <ProductCard
                            className={'product-card'}
                            link={`/san-pham/${product.tag}`}
                            image={product.image01}
                            name={product.name}
                            price={product.price}
                            buttonTitle={'Xem chi tiết'}
                            key={index}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default ProductPopular
