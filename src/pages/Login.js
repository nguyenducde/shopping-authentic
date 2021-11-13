import Helmet from '../components/Helmet'
import avatar_login from '../assets/images/login.png'
import avatar__wave from '../assets/images/login_wave.png'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export default function Login(){


    useEffect(() => {
        const input = document.querySelectorAll('.login__info__group__content__input')
        
        function addcl(){
            let parent = this.parentNode.parentNode;
	        parent.classList.add("focus");
        }
        
        function remcl(){
            let parent = this.parentNode.parentNode;
            if(this.value === ""){
                parent.classList.remove("focus");
        }
    }

        input.forEach(input => {
            input.addEventListener("focus", addcl);
            input.addEventListener("blur", remcl);
        })
    })

    return (
        <Helmet title='Đăng nhập'>
            <div className='login'>
                <div className='login__image'>
                    <img className='login__image__wave' src={avatar__wave} alt='' />
                    <img className='login__image__logo' src={avatar_login} alt='' />
                </div>
                <div className='login__info'>
                    <form action='index.html'>
                        <h2 className='login__info__title'>ĐĂNG NHẬP</h2>
                        <div className='login__info__group'>
                            <i className='fas fa-user login__info__group__content__icon'></i>
                            <div className='login__info__group__content'>
                                <h3 className='login__info__group__content__name'>Tài khoản</h3>
                                <input type='text' className='login__info__group__content__input' />
                            </div>
                        </div>
                        <div className='login__info__group'>
                            <i className='fas fa-lock login__info__group__content__icon'></i>
                            <div className='login__info__group__content'>
                                <input type='password' className='login__info__group__content__input' />
                                <h3 className='login__info__group__content__name'>Mật khẩu</h3>
                            </div>
                        </div>
                        <button className='login__info__submit'>ĐĂNG NHẬP</button>
                        <div className='login__info__forgetPass'>
                            <a href='#1' className='login__info__forgetPass__link'>Quên mật khẩu</a>
                        </div>
                        <h3 className='login__info__or'>HOẶC</h3>
                        <div className='login__info__social'>
                            <i className='fab fa-facebook-f'></i>
                            <i className='fab fa-google'></i>
                        </div>
                        <div className='login__info__register'>
                            Bạn chưa có tài khoản? <a className='login__info__register__link' href='#1'>Đăng ký tại đây</a>
                        </div>
                    </form>
                </div>
            </div>
        </Helmet>
    )
}