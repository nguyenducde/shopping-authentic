import { useEffect } from 'react'
import { useRouteMatch } from 'react-router'
import Helmet from '../../common/Helmet'
import { getProductBytag } from '../../store-data/products'
import ProductDetail from '../../components/Product/Detail'
import ProductMore from '../../components/Product/More'

export default function Product() {
    const match = useRouteMatch()

    const product = getProductBytag(match.params.tag)
    // const getProduct = productData.getProducts(8)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [product])

    return (
        <Helmet title={product.name}>
            <div className='container'>
                <div className='product-detail'>
                    <ProductDetail product={product} />
                    <ProductMore />
                </div>
            </div>
        </Helmet>
    )
}
