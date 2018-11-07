import React from 'react';

const ToggleButton = (props) => {
    return (
        <button type="button" className="btn btn-danger col-xs-2" onClick={props.toggle} aria-pressed="false">
            <span>X</span>
        </button>
    )
}

export default ToggleButton;