import { getAllProducts } from '../../../store-data/products'
import ProductCard from '../../../common/ProductCard'

function ProductNew() {
    return (
        <section className='product product--mb-2'>
            <h3 className='product__heading product--mt-9'>Sản phẩm mới</h3>
            <div className='product-list'>
                {getAllProducts().map((product, index) => {
                    if (product.isNewProduct) {
                        return (
                            <ProductCard
                                className={'product-card'}
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
