import React from 'react'

const VenueList = (props) => {
    return (
        <li tabIndex="1" onClick={() => props.sideMenuClick(props)}>{props.name}</li>
    )
}

export default VenueList; 