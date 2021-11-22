import $ from "jquery"
import { useEffect } from "react"
window.jQuery = $
window.jquery = $

function BackToTop() {

    useEffect(() => {
        const backTop = document.querySelector('.back-top')
        window.addEventListener('scroll', function(){
            backTop.style.display = 'block'
            backTop.classList.toggle('back-top', window.scrollY > 400)
        })
        
        backTop.addEventListener('click', function(){
            // event.preventDefault();
            $('html,body').animate({scrollTop:0}, "slow");
        })
    }, [])

    return (
        <div className="back-top">
            <i className="fas fa-chevron-up back-top-icon"></i>
        </div>
    )
}

export default BackToTop