import productData from "../assets/fake-data/products"
import Helmet from "../components/Helmet"
import CategoryProduct from "../components/CategoryProduct"
import ProductDetail from "../components/ProductDetail"
import { useRouteMatch } from "react-router"
import { useEffect } from "react"

export default function Product(){

    const match = useRouteMatch()

    const product = productData.getProductBySlug(match.params.slug)
    // const getProduct = productData.getProducts(8)

    useEffect(() => {
        window.scrollTo(0,0)
    }, [product])

    return (
        <Helmet title={product.name}>
            <div className='container'>
                <div className='product-detail'>
                    <ProductDetail product={product} />
                    <div className='product__more'>
                        <h3 className='product__more__title'>Khám phá thêm</h3>
                        <div className='product__more__list'>
                            {
                                productData.getProducts(8).map((product, index) => {
                                    return <CategoryProduct product={product} key={index} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Helmet>
    )
}