import React from "react";

export default function Checkbox(props){
    const inputRef = React.useRef(null)
    const onChange = () => {
        if(props.onChange){
            props.onChange(inputRef.current)
        }
    }

    return (
        <label className='category__filter__list__group' >
            <input type='checkbox' ref={inputRef} onChange={onChange} checked={props.checked} />
            <span>{props.label}</span>
        </label>
    )
}