import React from 'react'

const VenueList = (props) => {
    return (
        <li aria-label="listitem" tabIndex="1" onClick={() => props.sideMenuClick(props)}>{props.name}</li>
    )
}

export default VenueList; 