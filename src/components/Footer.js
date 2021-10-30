import { NavLink } from 'react-router-dom'
import logo from '../assets/images/Logo-2.png'

export default function Footer(){
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer-group'>
                    <div className='footer-group__item'>
                        <h3 className='footer-group__item-heading'>TỔNG ĐÀI HỖ TRỢ</h3>
                        <p className='footer-group__item-content'>Liên hệ đặt hàng: <span>0123456789</span></p>
                        <p className='footer-group__item-content'>Thắc mắc đơn hàng: <span>0123456789</span></p>
                        <p className='footer-group__item-content'>Góp ý, khiếu nại: <span>0123456789</span></p>
                    </div>
                    <div className='footer-group__item'>
                        <h3 className='footer-group__item-heading'>VỀ YOLO</h3>
                        <NavLink to='/about' className='footer-group__item-content footer-group__item-content-link'>Giới thiệu</NavLink>
                        <NavLink to='/about' className='footer-group__item-content footer-group__item-content-link'>Liên hệ</NavLink>
                        <NavLink to='/about' className='footer-group__item-content footer-group__item-content-link'>Tuyển dụng</NavLink>
                        <NavLink to='/about' className='footer-group__item-content footer-group__item-content-link'>Tin tức</NavLink>
                        <NavLink to='/about' className='footer-group__item-content footer-group__item-content-link'>Hệ thống của hàng</NavLink>
                    </div>
                    <div className='footer-group__item'>
                        <h3 className='footer-group__item-heading'>CHĂM SÓC KHÁCH HÀNG</h3>
                        <NavLink to='/about' className='footer-group__item-content footer-group__item-content-link'>Chính sách đổi trả</NavLink>
                        <NavLink to='/about' className='footer-group__item-content footer-group__item-content-link'>Chính sách bảo hành</NavLink>
                        <NavLink to='/about' className='footer-group__item-content footer-group__item-content-link'>Chính sách hoàn tiền</NavLink>
                    </div>
                    <div className='footer-group__item'>
                        <img src={logo} alt='' className='footer__logo' />
                        <p className='footer-group__item-content'>Hướng đến mục tiêu mang lại niềm vui thời trang cho hàng triệu con người Việt. 
                            Hãy cùng Yolo hướng đến cuộc sống nặng độn, tích cực hơn.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}