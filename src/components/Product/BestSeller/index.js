import { getAllProducts } from '../../../store-data/products'
import ProductCard from '../../../common/ProductCard'

function ProductBestSeller() {
    return (
        <section className='product product--mb-5'>
            <h3 className='product__heading product__heading--top'>Top sản phẩm bán chạy nhất</h3>
            <div className='product-list'>
                {getAllProducts().map((product, index) => {
                    if (product.isBestSeller) {
                        return (
                            <ProductCard
                                className={'product-card'}
                                link={`/san-pham/${product.tag}`}
                                image={product.image01}
                                name={product.name}
                                price={product.price}
                                buttonTitle={'Xem chi tiết'}
                                isBestSeller={product.isBestSeller}
                                key={index}
                            />
                        )
                    } else return null
                })}
            </div>
        </section>
    )
}

export default ProductBestSeller
