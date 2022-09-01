import { connect } from 'react-redux'
import { useHistory } from 'react-router'

function User({ user }) {
    const history = useHistory()

    return (
        <>
            {user.isLogin ? (
                <div className='info-user'>
                    <img src={user.photo} alt='' />
                    <div className='info-user__info'>
                        <div className='info-user__group'>
                            <i className='bx bx-user'></i>
                            <p>Họ tên:</p>
                            <span>{user.name}</span>
                        </div>
                        <div className='info-user__group'>
                            <i className='bx bx-envelope'></i>
                            <p>Email:</p>
                            <span>{user.email}</span>
                        </div>
                    </div>
                </div>
            ) : (
                history.push('dang-nhap')
            )}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer,
    }
}

export default connect(mapStateToProps, null)(User)
