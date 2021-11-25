import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export default function HomeSlider(props){
    const data = props.data

    const [activeSlide, setActiveSlide] = useState(0)

    const nextSlide = () => {
        const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1
        setActiveSlide(index)
    }

    const prevSlide = () => {
        const index = activeSlide - 1 < 0 ? data.length -1 : activeSlide - 1
        setActiveSlide(index)
    }

    useEffect(() => {
        if(props.autoRunSlide){
            const slideAuto = setInterval(() => {
                nextSlide()
            }, 4000)
            return () => {
                clearInterval(slideAuto)
            }
        }
    },[nextSlide]) // eslint-disable-line react-hooks/exhaustive-deps

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
                                <NavLink to='/danh-muc' className='btn'>Đi đến shop</NavLink>
                            </div>
                            <div className='home-slider__item__img'>
                                <div className='shape' style={{backgroundColor: item.color}}></div>
                                <img src={item.img} alt='' />
                            </div>
                        </div>
                        )
                    }) 
                }
                {
                    props.control ? (
                        <div className='home-slider__control'>
                            <div className='home-slider__control__item' onClick={prevSlide}>
                                <i className="fas fa-chevron-left"></i>
                            </div>
                            <div className='home-slider__control__item'>
                                <div className='index'>
                                    {activeSlide + 1}/{data.length}
                                </div>
                            </div>
                            <div className='home-slider__control__item' onClick={nextSlide}>
                                <i className="fas fa-chevron-right"></i>
                            </div>
                        </div>
                    ) : null
                }
            </div>
        </div>
    )
}

HomeSlider.propType = {
    data: PropTypes.array.isRequired,
    control: PropTypes.bool
}