import React from 'react'

const Toggle = (props) => {
    return (
        <button type="button" onClick={props.toggle}>
            <span>X</span>
        </button>
    )
}

export default Toggle;