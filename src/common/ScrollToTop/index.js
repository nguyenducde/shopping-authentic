import $ from 'jquery'
window.jQuery = $
window.jquery = $

const ScrollToTop = () => {
    $('html,body').animate({ scrollTop: 0 }, 'slow')
}

export default ScrollToTop
