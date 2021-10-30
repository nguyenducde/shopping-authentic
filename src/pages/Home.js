import Helmet from "../components/Helmet"
import HomeSlider from "../components/HomeSlider"
import homeSliderData from "../assets/fake-data/home-slider"

export default function Home(){
    return (
        <Helmet title='Trang chủ'>
            <HomeSlider data={homeSliderData} />
        </Helmet>
    )
}