import Helmet from '../common/Helmet'
import HomeSlider from '../components/HomeSlider'
import homeSliderData from '../fake-data/home-slider'
import Policy from '../pages/Policy'
import Banner from '../components/Banner'
import BackToTop from '../components/BackToTop'
import ProductBestSeller from '../components/Product/BestSeller'
import ProductNew from '../components/Product/New'
import ProductPopular from '../components/Product/Popular'

export default function Home() {
    return (
        <Helmet title='Trang chủ'>
            <HomeSlider data={homeSliderData} control={true} autoRunSlide={true} />

            <div className='container'>
                <Policy />
            </div>

            <div className='container container--850'>
                <ProductBestSeller />
            </div>

            <div className='container container--850'>
                <ProductNew />
            </div>

            <div className='container'>
                <Banner />
            </div>

            <div className='container container--850'>
                <ProductPopular />
            </div>
            <BackToTop />
        </Helmet>
    )
}
