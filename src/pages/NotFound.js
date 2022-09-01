import { NavLink } from 'react-router-dom'
import Helmet from '../common/Helmet'

function NotFound() {
    return (
        <Helmet title='Error'>
            <div className='not-found'>
                <div className='clouds'>
                    <div className='not-found__cloud not-found__cloud--1'></div>
                    <div className='not-found__cloud not-found__cloud--2'></div>
                    <div className='not-found__cloud not-found__cloud--3'></div>
                    <div className='not-found__cloud not-found__cloud--4'></div>
                    <div className='not-found__cloud not-found__cloud--5'></div>
                </div>
                <div className='not-found__info'>
                    <div className='not-found__title'>404</div>
                    <div className='not-found__description'>
                        Ôi khônggg .. Trang này Admin chưa làm !
                    </div>
                    <div className='not-found__back'>
                        <p className='not-found__back__title'>Quay về</p>
                        <NavLink className='not-found__back__link' to='/'>
                            Trang chủ
                        </NavLink>
                    </div>
                </div>
            </div>
        </Helmet>
    )
}

export default NotFound
