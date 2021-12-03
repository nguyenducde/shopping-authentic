import images from '../assets/images/Logo-2.png'

function UserInfo() {
    return (
        <div className='info-user'>
            <img src={images} alt='' />
            <div className='info-user__info'>
                <div className='info-user__group'>
                    <i className='bx bx-user'></i>
                    <p>Họ tên:</p>
                    <span>Lương Tuyên Quang</span>
                </div>
                <div className='info-user__group'>
                    <i className='bx bx-envelope'></i>
                    <p>Email:</p>
                    <span>luongtuyenquang@gmail.com</span>
                </div>
            </div>
        </div>
    )
}

export default UserInfo