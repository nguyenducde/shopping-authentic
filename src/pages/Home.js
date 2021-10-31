import Helmet from "../components/Helmet"
import HomeSlider from "../components/HomeSlider"
import homeSliderData from "../assets/fake-data/home-slider"
import PolicyCard from "../components/PolicyCard"
import policyCard from "../assets/fake-data/policy-card"

export default function Home(){
    return (
        <Helmet title='Trang chủ'>
            <HomeSlider data={homeSliderData} control={true} autoRunSlide={true} />

            <div className='container'>
                <div className='policy'>
                    {
                        policyCard.map((item, index) => {
                        return <PolicyCard name={item.name} description={item.description} icon={item.icon} key={index} />
                        })
                    }
                </div>
            </div>
            
        </Helmet>
    )
}