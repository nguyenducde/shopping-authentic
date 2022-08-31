import { useEffect } from 'react'
import { useRouteMatch } from 'react-router'
import Helmet from '../../../common/Helmet'
import { getProductsBySlice, getProductBySlug } from '../../../store-data/products'
import ProductCard from '../../../common/ProductCard'

function ProductMore() {
    const match = useRouteMatch()

    const product = getProductBySlug(match.params.slug)
    // const getProduct = productData.getProducts(8)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [product])

    return (
        <Helmet title={product.name}>
            <div className='product__more'>
                <h3 className='product__more__title'>Khám phá thêm</h3>
                <div className='product__more__list'>
                    {getProductsBySlice(1, 9).map((product, index) => {
                        return (
                            <ProductCard
                                className={'product-card__item'}
                                link={`/san-pham/${product.slug}`}
                                image={product.image01}
                                name={product.name}
                                price={product.price}
                                buttonTitle={'Chọn mua'}
                                key={index}
                            />
                        )
                    })}
                </div>
            </div>
        </Helmet>
    )
}

export default ProductMore
