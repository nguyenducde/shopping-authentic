import { getAllProducts } from '../../../store-data/products'
import ProductCard from '../../../common/ProductCard'

function ProductNew() {
    return (
        <section className='product mt-0'>
            <h3 className='product__heading'>Sản phẩm mới</h3>
            <div className='product-card'>
                {getAllProducts().map((product, index) => {
                    if (product.isNewProduct) {
                        return (
                            <ProductCard
                                className={'product-card__item'}
                                link={`/san-pham/${product.slug}`}
                                image={product.image01}
                                name={product.name}
                                price={product.price}
                                buttonTitle={'Xem chi tiết'}
                                isNewProduct={product.isNewProduct}
                                key={index}
                            />
                        )
                    } else return null
                })}
            </div>
        </section>
    )
}

export default ProductNew
