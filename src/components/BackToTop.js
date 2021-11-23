import $ from "jquery"
import { useEffect } from "react"
window.jQuery = $
window.jquery = $

function BackToTop() {

    useEffect(() => {
        const backTop = document.querySelector('.back-top')

        const handleScroll = () => {
            backTop.classList.toggle('back-top', window.scrollY > 500)
            backTop.style.display = 'block'
        }

        const handleScrollToTop = () => {
            $('html,body').animate({scrollTop:0}, "slow")
        }
        
        window.addEventListener('scroll',handleScroll)
        backTop.addEventListener('click', handleScrollToTop)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            backTop.removeEventListener('click', handleScrollToTop)
        }
    }, [])

    return (
        <div className="back-top">
            <i className="fas fa-chevron-up back-top-icon"></i>
        </div>
    )
}

export default BackToTop