import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux'
import logo from '../assets/images/Logo-2.png'

function Header({carts}){

    useEffect(() => {
        const header = document.querySelector('.header')
        window.addEventListener('scroll', function(){
            header.classList.toggle('shrink', window.scrollY > 0)
        })
    },[])

    return (
        <header>
            <div className='header'>
                <div className='container'>
                    <div className='header__logo'>
                        <NavLink to='/'>
                            <img src={logo} alt=''/>
                        </NavLink>
                    </div>
                    <div className='header__menu'>
                        <div className='header__menu-mobile'>
                            <i className="fas fa-bars"></i>
                        </div>
                        <ul className='nav'>
                            <li className='nav__item'>
                                <NavLink activeClassName="nav__active" exact to='/'>Trang chủ</NavLink>
                            </li>
                            <li className='nav__item'>
                                <NavLink activeClassName="nav__active" to='/danh-muc'>Sản phẩm</NavLink>
                            </li>
                            <li className='nav__item'>
                                <NavLink activeClassName="nav__active" to='/phu-kien'>Phụ kiện</NavLink>
                            </li>
                            <li className='nav__item'>
                                <NavLink activeClassName="nav__active" to='/lien-he'>Liên hệ</NavLink>
                            </li>
                        </ul>
                        {/* <div className='header__menu-right'>
                            <NavLink to='#1'><i className="fas fa-search header__menu-right-icon"></i></NavLink>
                            <NavLink to='#1'><i className="fas fa-shopping-bag header__menu-right-icon"></i></NavLink>
                        </div> */}
                        <div className='header__menu-right'>
                            <NavLink className='cart__link' to='/gio-hang'><i className='bx bx-cart'></i>
                                {carts.length > 0 ? <span className='cart__link__notification'>{carts.length}</span> : ''}
                            </NavLink>
                            <NavLink to='/dang-nhap' className='header__menu-right--center'>Đăng nhập</NavLink>
                            {/* <NavLink to='#1'>Đăng ký</NavLink> */}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

const mapStateToProps = state => {
    return {
        carts: state.cartReducer
    }
}

export default connect(mapStateToProps, null)(Header)