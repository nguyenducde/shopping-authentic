import $ from 'jquery'
import { useEffect } from 'react'
import ScrollToTop from '../common/ScrollToTop'
window.jQuery = $
window.jquery = $

function BackToTop() {
    useEffect(() => {
        const backTop = document.querySelector('.back-top')

        const handleShowIcon = () => {
            backTop.classList.toggle('back-top', window.scrollY > 500)
            backTop.style.display = 'block'
        }

        window.addEventListener('scroll', handleShowIcon)
        backTop.addEventListener('click', ScrollToTop)

        return () => {
            window.removeEventListener('scroll', handleShowIcon)
            backTop.removeEventListener('click', ScrollToTop)
        }
    }, [])

    return (
        <div className='back-top'>
            <i className='fas fa-chevron-up back-top-icon'></i>
        </div>
    )
}

export default BackToTop
