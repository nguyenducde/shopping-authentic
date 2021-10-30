import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export default function HomeSlider(props){
    const data = props.data
    const activeSlide = 0
    return (
        <div className='container'>
            <div className='home-slider'>
                { 
                    data.map((item, index) => {
                    return (
                        <div className={`home-slider__item ${index === activeSlide ? 'active' : ''}`} key={index}>
                            <div className='home-slider__item__info'>
                                <h3 className='home-slider__item__info__title'>{item.title}</h3>
                                <p className='home-slider__item__info__description'>{item.description}</p>
                                <NavLink to={item.path} className='home-slider__item__info__link'>Xem chi tiết</NavLink>
                            </div>
                            <div className='home-slider__item__img'>
                                <div className='shape'></div>
                                <img src={item.img} alt='' />
                            </div>
                        </div>
                        )
                    }) 
                }
            </div>
        </div>
    )
}

HomeSlider.propType = {
    data: PropTypes.array.isRequired
}