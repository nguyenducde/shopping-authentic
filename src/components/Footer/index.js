import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/favicon.png'
import ScrollToTop from '../../common/ScrollToTop'

export default function Footer() {
    useEffect(() => {
        const logo = document.querySelector('.footer__logo')
        logo.addEventListener('click', ScrollToTop)

        return () => {
            logo.removeEventListener('click', ScrollToTop)
        }
    }, [])

    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer-group'>
                    <div className='footer-group__item footer-group__item--large'>
                        <h3 className='footer-group__item-heading'>TỔNG ĐÀI HỖ TRỢ</h3>
                        <p className='footer-group__item-content'>
                            Liên hệ với tôi: <span>0365187553</span>
                        </p>
                        <p className='footer-group__item-content'>
                            Email: <span>shopauthenticdalat@gmail.com</span>
                        </p>
                        <p className='footer-group__item-content'>
                            Facebook:
                            <a
                                href='https://www.facebook.com/ShopAuthenticDaLat'
                                rel='noreferrer'
                                target='_blank'
                            >
                                Shop Authentic
                            </a>
                        </p>
                    </div>
                    <div className='footer-group__item'>
                        <h3 className='footer-group__item-heading'>VỀ YOLO</h3>
                        <NavLink
                            to='/about'
                            className='footer-group__item-content footer-group__item-content-link'
                        >
                            Giới thiệu
                        </NavLink>
                        <NavLink
                            to='/about'
                            className='footer-group__item-content footer-group__item-content-link'
                        >
                            Liên hệ
                        </NavLink>
                        <NavLink
                            to='/about'
                            className='footer-group__item-content footer-group__item-content-link'
                        >
                            Tuyển dụng
                        </NavLink>
                        <NavLink
                            to='/about'
                            className='footer-group__item-content footer-group__item-content-link'
                        >
                            Tin tức
                        </NavLink>
                        <NavLink
                            to='/about'
                            className='footer-group__item-content footer-group__item-content-link'
                        >
                            Hệ thống của hàng
                        </NavLink>
                    </div>
                    <div className='footer-group__item'>
                        <h3 className='footer-group__item-heading'>CHĂM SÓC KHÁCH HÀNG</h3>
                        <NavLink
                            to='/about'
                            className='footer-group__item-content footer-group__item-content-link'
                        >
                            Chính sách đổi trả
                        </NavLink>
                        <NavLink
                            to='/about'
                            className='footer-group__item-content footer-group__item-content-link'
                        >
                            Chính sách bảo hành
                        </NavLink>
                        <NavLink
                            to='/about'
                            className='footer-group__item-content footer-group__item-content-link'
                        >
                            Chính sách hoàn tiền
                        </NavLink>
                    </div>
                    <div className='footer-group__item'>
                        <NavLink to='/'>
                            <img src={logo} alt='' className='footer__logo' />
                        </NavLink>
                        <p className='footer-group__item-content'>
                            Hướng đến mục tiêu mang lại niềm vui thời trang cho hàng triệu con người
                            Việt. Hãy cùng Shop Authentic hướng đến cuộc sống nặng độn, tích cực
                            hơn.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
