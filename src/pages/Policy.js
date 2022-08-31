import { NavLink } from 'react-router-dom'
import policyCard from '../fake-data/policy-card'

function Policy() {
    return (
        <section className='policy'>
            {policyCard.map((item, index) => {
                return (
                    <NavLink exact to='/policy' className='policy-card' key={index}>
                        <div className='policy-card__icon'>
                            <i className={item.icon}></i>
                        </div>
                        <div className='policy-card__info'>
                            <h3 className='policy-card__info__name'>{item.name}</h3>
                            <p className='policy-card__info__description'>{item.description}</p>
                        </div>
                    </NavLink>
                )
            })}
        </section>
    )
}

export default Policy
