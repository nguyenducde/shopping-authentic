import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/images/Logo-2.png'

export default function Header(){

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
                            <NavLink to='/dang-nhap'><i className="fas fa-user header__menu-right-icon"></i></NavLink>
                        </div> */}
                        <div className='header__menu-right'>
                            <NavLink to='/dang-nhap'>Đăng nhập</NavLink>
                            <NavLink to='#1'>Đăng ký</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}