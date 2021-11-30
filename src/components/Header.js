import { useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux'
import logo from '../assets/images/Logo-2.png'

function Header({carts, user}){

    const headerMobile = useCallback(() => {
        const app = document.querySelector('.App')
        const iconOpen = document.querySelector('.header__menu__icon-open')
        const iconClose = document.querySelector('.header__menu__icon-close')
        const navList = document.querySelector('.nav')
        const header = document.querySelector('.header')
        
        iconOpen.addEventListener('click', () => {
            navList.classList.add('nav-active')
            header.classList.add('playing')
        })

        iconClose.addEventListener('click', () => {
            header.classList.remove('playing')
            navList.classList.remove('nav-active')
        })
        app.addEventListener('click', () => {
            header.classList.remove('playing')
            navList.classList.remove('nav-active')
        })

        function handleStopPropagation(e) {
            e.stopPropagation()
        }

        iconOpen.addEventListener('click', handleStopPropagation)
        header.addEventListener('click', handleStopPropagation)

    }, [])

    const handleClickUser = useCallback(() => {
        const app = document.querySelector('.App')
        const header = document.querySelector('.header')
        const userName = document.querySelector('.header__menu__user')
        const modalUser = document.querySelector('.header__menu__user__info')

        userName.addEventListener('click', () => {
            modalUser.classList.toggle('modal-user--open')
        })

        function removeModalUser() {
            modalUser.classList.remove('modal-user--open')
        }

        function handleStopPropagation(e) {
            e.stopPropagation()
        }

        app.addEventListener('click', removeModalUser)
        header.addEventListener('click', removeModalUser)

        userName.addEventListener('click', handleStopPropagation)
        modalUser.addEventListener('click', handleStopPropagation)

    }, [])

    useEffect(() => {
        handleClickUser()
    }, [handleClickUser])

    useEffect(() => {
        headerMobile()
    },[headerMobile])

    useEffect(() => {
        const header = document.querySelector('.header')
        window.addEventListener('scroll', function(){
            header.classList.toggle('shrink', window.scrollY > 0)
        })
    },[])


    return (
        <header>
            <div className='header'>
                <div className='header__container'>
                    <i className="fas fa-bars header__menu__icon-open"></i>
                    <ul className='nav'>
                        <li className='nav__item'>
                            <NavLink activeClassName="nav__active" exact to='/'>
                                <i className='bx bx-home nav__icon'></i>
                                Trang chủ
                            </NavLink>
                        </li>
                        <li className='nav__item'>
                            <NavLink activeClassName="nav__active" to='/danh-muc'>
                                <i className='bx bx-category nav__icon'></i>
                                Sản phẩm
                            </NavLink>
                        </li>
                        {/* <li className='nav__item'>
                            <NavLink activeClassName="nav__active" to='/phu-kien'>Phụ kiện</NavLink>
                        </li>
                        <li className='nav__item'>
                            <NavLink activeClassName="nav__active" to='/lien-he'>Liên hệ</NavLink>
                        </li> */}
                    </ul>
                    <i className="fas fa-times header__menu__icon-close"></i>
                    <div className='header__logo'>
                        <NavLink to='/'>
                            <img src={logo} alt=''/>
                        </NavLink>
                    </div>
                    <div className='header__menu-right'>
                        <NavLink className='cart__link' to='/gio-hang'><i className='bx bx-cart'></i>
                            {carts.length > 0 ? <span className='cart__link__notification'>{carts.length}</span> : ''}
                        </NavLink>
                        {/* <NavLink to='/dang-nhap' className='header__menu-right--center'>{user.length > 0 ? user[0].displayName : 'Đăng nhập'}</NavLink> */}
                        {/* <NavLink to='#1'>Đăng ký</NavLink> */}
                        <div className='header__menu__user'>
                            <img src={logo} alt='' />
                            <p className='header__menu__user'>Lương Tuyên Quang</p>
                            <i className='bx bxs-down-arrow'></i>
                            <div className='header__menu__user__info'>
                                <NavLink to='#1' className='header__menu__user__info__title'>Tài khoản của tôi</NavLink>
                                <NavLink to='/gio-hang' className='header__menu__user__info__title'>Đơn mua</NavLink>
                                <div className='header__menu__user__info__title header__menu__user__logout'>Đăng xuất</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

const mapStateToProps = state => {
    return {
        carts: state.cartReducer,
        user: state.userReducer
    }
}

export default connect(mapStateToProps, null)(Header)