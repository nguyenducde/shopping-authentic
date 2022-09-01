import { useEffect } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router'
import graph from 'fb-react-sdk'
import Helmet from '../common/Helmet'
import avatar_login from '../assets/images/login.png'
import avatar__wave from '../assets/images/login_wave.png'
import { facebookProvider, googleProvider } from '../authentication/config/authMethod'
import socialMediaAuth from '../authentication/services/auth'
import { saveAccountUser } from '../redux/actions'

function Login(props) {
    useEffect(() => {
        const input = document.querySelectorAll('.login__info__group__content__input')

        function addcl() {
            let parent = this.parentNode.parentNode
            parent.classList.add('focus')
        }

        function remcl() {
            let parent = this.parentNode.parentNode
            if (this.value === '') {
                parent.classList.remove('focus')
            }
        }

        input.forEach((input) => {
            input.addEventListener('focus', addcl)
            input.addEventListener('blur', remcl)
        })
    })

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const history = useHistory()

    const handleAuth = async (provider) => {
        const res = await socialMediaAuth(provider)
        if (provider.providerId === 'facebook.com') {
            const credential = res.credential
            const accessToken = credential.accessToken
            graph.setAccessToken(accessToken)
            graph.get('/me?fields=id,name,email,picture', function (err, res) {
                props.onAddProductToCart(res)
                history.push('gio-hang')
            })
        } else {
            props.onAddProductToCart(res)
            history.push('gio-hang')
        }
    }

    return (
        <Helmet title='Đăng nhập'>
            <div className='login'>
                <div className='login__image'>
                    <img className='login__image__wave' src={avatar__wave} alt='' />
                    <img className='login__image__logo' src={avatar_login} alt='' />
                </div>
                <div className='login__info'>
                    <form action='/'>
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
                                <input
                                    type='password'
                                    className='login__info__group__content__input'
                                />
                                <h3 className='login__info__group__content__name'>Mật khẩu</h3>
                            </div>
                        </div>
                        <button className='login__info__submit'>ĐĂNG NHẬP</button>
                        <div className='login__info__forgetPass'>
                            {/* <a href='#1' className='login__info__forgetPass__link'>Quên mật khẩu</a> */}
                        </div>
                        <h3 className='login__info__or'>HOẶC</h3>
                        <div className='login__info__social'>
                            <i
                                className='fab fa-facebook-f'
                                style={{ color: '#0d3178' }}
                                onClick={() => handleAuth(facebookProvider)}
                            ></i>
                            <i
                                className='fab fa-google'
                                style={{ color: '#c75454' }}
                                onClick={() => handleAuth(googleProvider)}
                            ></i>
                        </div>
                        <div className='login__info__register'>
                            Bạn chưa có tài khoản?{' '}
                            <NavLink className='login__info__register__link' to='/dang-ky'>
                                Đăng ký tại đây
                            </NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </Helmet>
    )
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProductToCart: (user) => {
            dispatch(saveAccountUser(user))
        },
    }
}

export default connect(null, mapDispatchToProps)(Login)
