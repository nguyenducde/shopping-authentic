import { NavLink } from "react-router-dom"

export default function PolicyCard(props){

    const { name, description, icon } = props

    return (
        <NavLink to='/policy' className='policy-card'>
            <div className='policy-card__icon'>
                <i className={icon}></i>
            </div>
            <div className='policy-card__info'>
                <h3 className='policy-card__info__name'>{name}</h3>
                <p className='policy-card__info__description'>{description}</p>
            </div>
        </NavLink>
    )
}