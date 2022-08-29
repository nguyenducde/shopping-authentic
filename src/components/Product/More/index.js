import { useEffect } from "react"
import { useRouteMatch } from "react-router"
import Helmet from "../../../common/Helmet"
import productData from "../../../fake-data/products"
import CategoryProduct from "../../../components/CategoryProduct"

function ProductMore(){

    const match = useRouteMatch()

    const product = productData.getProductBySlug(match.params.slug)
    // const getProduct = productData.getProducts(8)

    useEffect(() => {
        window.scrollTo(0,0)
    }, [product])

    return (
        <Helmet title={product.name}>
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
        </Helmet>
    )
}

export default ProductMore