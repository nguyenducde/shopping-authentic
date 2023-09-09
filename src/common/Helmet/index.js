import PropTypes from 'prop-types'

export default function Helmet(props){

    document.title = 'Shop Authentic - ' + props.title

    return (
        <div>
            {props.children}
        </div>
    )
}

Helmet.propType = {
    title: PropTypes.string.isRequired
}