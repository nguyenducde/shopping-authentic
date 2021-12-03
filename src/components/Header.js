import { useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux'
import logo from '../assets/images/Logo-2.png'
import { logoutAccountUser } from "../actions";

function Header({carts, user, onLogoutUser}){

    const isLogin = user.isLogin
    const name = user.name
    const photo = user.photo

    const headerMobile = useCallback(() => {
        const app = document.querySelector('.App')
        const navItem = document.querySelectorAll('.nav__item')
        const iconOpen = document.querySelector('.header__menu__icon-open')
        const iconClose = document.querySelector('.header__menu__icon-close')
        const navList = document.querySelector('.nav')
        const header = document.querySelector('.header')
        
        iconOpen.addEventListener('click', openMenu)
        iconClose.addEventListener('click', closeMenu)
        app.addEventListener('click', closeMenu)

        navItem.forEach(item => {
            item.addEventListener('click', closeMenu)
        })

        function openMenu() {
            navList.classList.add('nav-active')
            header.classList.add('playing')
        }

        function closeMenu() {
            header.classList.remove('playing')
            navList.classList.remove('nav-active')
        }

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
        const logoutUser = document.querySelector('.header__menu__user__logout')

        if(isLogin) {
            userName.addEventListener('click', () => {
                modalUser.classList.toggle('modal-user--open')
            })
        }

        function removeModalUser() {
            if(isLogin) {
            modalUser.classList.remove('modal-user--open')

            }
        }

        if(isLogin) {
            logoutUser.addEventListener('click', () => {
                onLogoutUser(false)
            })
        }
        function handleStopPropagation(e) {
            e.stopPropagation()
        }

        app.addEventListener('click', removeModalUser)
        header.addEventListener('click', removeModalUser)

        if(isLogin) {
            userName.addEventListener('click', handleStopPropagation)
            modalUser.addEventListener('click', handleStopPropagation)
        }
    }, [isLogin, onLogoutUser])

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
                        {
                            isLogin === false 
                            ?
                                <NavLink to='/dang-nhap' className='header__menu-right--center'>Đăng nhập</NavLink>
                            :
                                <div className='header__menu__user'>
                                    <img src={photo} alt='' />
                                    <p className='header__menu__user'>{name}</p>
                                    <i className='bx bxs-down-arrow'></i>
                                    <div className='header__menu__user__info'>
                                        <NavLink to='/user' className='header__menu__user__info__title'>Thông tin tài khoản</NavLink>
                                        <NavLink to='/gio-hang' className='header__menu__user__info__title'>Đơn hàng</NavLink>
                                        <div className='header__menu__user__info__title header__menu__user__logout'>Đăng xuất</div>
                                    </div>
                                </div>
                        }
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

const mapDispatchToProps = (dispatch, props) => {
    return {
        onLogoutUser: boolean => {
            dispatch(logoutAccountUser(boolean))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)