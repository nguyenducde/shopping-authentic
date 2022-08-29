import PropTypes from 'prop-types'

export default function Helmet(props){

    document.title = 'Yolo - ' + props.title

    return (
        <div>
            {props.children}
        </div>
    )
}

Helmet.propType = {
    title: PropTypes.string.isRequired
}