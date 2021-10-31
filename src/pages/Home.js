import Helmet from "../components/Helmet"
import HomeSlider from "../components/HomeSlider"
import homeSliderData from "../assets/fake-data/home-slider"
import PolicyCard from "../components/PolicyCard"
import policyCard from "../assets/fake-data/policy-card"
import productData from "../assets/fake-data/products"
import ProductCard from "../components/ProductCard"

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
            
            <div className='container'>
                <section className='product'>
                    <h3 className='product__heading'>Top sản phẩm bán chạy trong tuần</h3>
                    <div className='product-card'>
                        {
                            productData.getProducts(4).map((product, index) => {
                                return <ProductCard product={product} key={index} />
                            })
                        }
                    </div>
                </section>
            </div>

        </Helmet>
    )
}