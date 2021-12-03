import Helmet from "../components/Helmet"
import HomeSlider from "../components/HomeSlider"
import homeSliderData from "../assets/fake-data/home-slider"
import PolicyCard from "../components/PolicyCard"
import policyCard from "../assets/fake-data/policy-card"
import productData from "../assets/fake-data/products"
import ProductCard from "../components/ProductCard"
import Banner from "../components/Banner"
import BackToTop from "../components/BackToTop"


export default function Home(){
    return (
        <Helmet title='Trang chủ'>
            <HomeSlider data={homeSliderData} control={true} autoRunSlide={true} />

            <div className='container'>
                <section className='policy'>
                    {
                        policyCard.map((item, index) => {
                        return <PolicyCard name={item.name} description={item.description} icon={item.icon} key={index} />
                        })
                    }
                </section>
            </div>
            
            <div className='container container--850'>
                <section className='product'>
                    <h3 className='product__heading product__heading--top'>Top sản phẩm bán chạy trong tuần</h3>
                    <div className='product-card'>
                        {
                            productData.getProducts(4).map((product, index) => {
                                return <ProductCard product={product} key={index} />
                            })
                        }
                    </div>
                </section>
            </div>

            <div className='container container--850'>
                <section className='product mt-0'>
                    <h3 className='product__heading'>Sản phẩm mới</h3>
                    <div className='product-card'>
                        {
                            productData.getProducts(8).map((product, index) => {
                                return <ProductCard product={product} key={index} />
                            })
                        }
                    </div>
                </section>
            </div>

            <div className='container'>
                <Banner />
            </div>

            <div className='container container--850'>
                <section className='product product--unset-border'>
                    <h3 className='product__heading'>Sản phẩm phổ biến</h3>
                    <div className='product-card'>
                        {
                            productData.getProducts(12).map((product, index) => {
                                return <ProductCard product={product} key={index} />
                            })
                        }
                    </div>
                </section>
            </div>
            
            <BackToTop />
        </Helmet>
    )
}