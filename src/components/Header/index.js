import { useEffect, useCallback, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import logo from '../../assets/images/favicon.png'
import { logoutAccountUser } from '../../redux/actions'
import ScrollToTop from '../../common/ScrollToTop'

function Header({ carts, user, onLogoutUser }) {
    const [isCurrentPage, setIsCurrentHomePage] = useState(false)
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

        navItem.forEach((item) => {
            item.addEventListener('click', closeMenu)
        })

        function openMenu() {
            navList.classList.add('nav-active')
            header.classList.add('playing')
            document.body.style.overflow = 'hidden'
        }

        function closeMenu() {
            header.classList.remove('playing')
            navList.classList.remove('nav-active')
            document.body.style.overflow = 'visible'
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
        const menuUser = document.querySelectorAll('.header__menu__user__info__title')

        if (isLogin) {
            userName.addEventListener('click', () => {
                modalUser.classList.toggle('modal-user--open')
            })
        }

        function removeModalUser() {
            if (isLogin) {
                modalUser.classList.remove('modal-user--open')
            }
        }

        if (isLogin) {
            logoutUser.addEventListener('click', () => {
                onLogoutUser(false)
            })
        }
        function handleStopPropagation(e) {
            e.stopPropagation()
        }

        menuUser.forEach((item) => {
            item.addEventListener('click', removeModalUser)
        })

        app.addEventListener('click', removeModalUser)
        header.addEventListener('click', removeModalUser)

        if (isLogin) {
            userName.addEventListener('click', handleStopPropagation)
            modalUser.addEventListener('click', handleStopPropagation)
        }
    }, [isLogin, onLogoutUser])

    useEffect(() => {
        handleClickUser()
    }, [handleClickUser])

    useEffect(() => {
        headerMobile()
    }, [headerMobile])

    useEffect(() => {
        const header = document.querySelector('.header')
        window.addEventListener('scroll', function () {
            header.classList.toggle('shrink', window.scrollY > 0)
        })
    }, [])

    useEffect(() => {
        const logo = document.querySelector('.header__logo')
        logo.addEventListener('click', ScrollToTop)

        return () => {
            logo.removeEventListener('click', ScrollToTop)
        }
    }, [])

    useEffect(() => {
        const homePage = document.querySelector('.home-page')
        const productPage = document.querySelector('.product-page')

        const handleUpdateStateHomePage = () => {
            setIsCurrentHomePage(!isCurrentPage)
        }

        homePage.addEventListener('click', handleUpdateStateHomePage)
        productPage.addEventListener('click', handleUpdateStateHomePage)

        window.scrollTo(0, 0)

        return () => {
            homePage.removeEventListener('click', handleUpdateStateHomePage)
            productPage.removeEventListener('click', handleUpdateStateHomePage)
        }
    }, [isCurrentPage])

    return (
        <header>
            <div className='header'>
                <div className='header__container'>
                    <i className='fas fa-bars header__menu__icon-open'></i>
                    <ul className='nav'>
                        <li className='nav__item'>
                            <NavLink
                                activeClassName='nav__active'
                                exact
                                to='/'
                                className='home-page'
                            >
                                <i className='bx bx-home nav__icon'></i>
                                Trang chủ
                            </NavLink>
                        </li>
                        <li className='nav__item'>
                            <NavLink
                                activeClassName='nav__active'
                                to='/danh-muc'
                                className='product-page'
                            >
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
                    <i className='fas fa-times header__menu__icon-close'></i>
                    <NavLink to='/'>
                        <img src={logo} alt='' className='header__logo' />
                    </NavLink>
                    <div className='header__menu-right'>
                        <NavLink className='cart__link' to='/gio-hang'>
                            <i className='bx bx-cart'></i>
                            {carts.length > 0 ? (
                                <span className='cart__link__notification'>{carts.length}</span>
                            ) : (
                                ''
                            )}
                        </NavLink>
                        {isLogin === false ? (
                            <NavLink to='/dang-nhap' className='header__menu-right--center'>
                                Đăng nhập
                            </NavLink>
                        ) : (
                            <div className='header__menu__user'>
                                <img src={photo} alt='' />
                                <p className='header__menu__user'>{name}</p>
                                <i className='bx bxs-down-arrow'></i>
                                <div className='header__menu__user__info'>
                                    <NavLink to='/user' className='header__menu__user__info__title'>
                                        Thông tin tài khoản
                                    </NavLink>
                                    <NavLink
                                        to='/gio-hang'
                                        className='header__menu__user__info__title'
                                    >
                                        Đơn hàng
                                    </NavLink>
                                    <div className='header__menu__user__info__title header__menu__user__logout'>
                                        Đăng xuất
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        carts: state.cartReducer,
        user: state.userReducer,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onLogoutUser: (boolean) => {
            dispatch(logoutAccountUser(boolean))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
