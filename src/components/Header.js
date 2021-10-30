import { NavLink } from "react-router-dom";
import logo from '../assets/images/Logo-2.png'

export default function Header(){
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
                                <NavLink activeClassName="nav__active" to='/category'>Sản phẩm</NavLink>
                            </li>
                            <li className='nav__item'>
                                <NavLink activeClassName="nav__active" to='/accessories'>Phụ kiện</NavLink>
                            </li>
                            <li className='nav__item'>
                                <NavLink activeClassName="nav__active" to='/contact'>Liên hệ</NavLink>
                            </li>
                        </ul>
                        <div className='header__menu-right'>
                            <i className="fas fa-search header__menu-right-icon"></i>
                            <i className="fas fa-shopping-bag header__menu-right-icon"></i>
                            <i className="fas fa-user header__menu-right-icon"></i>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}