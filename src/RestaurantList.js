import React from 'react';
import VenueList from './VenueList.js';

const RestaurantList = (props) => {
    return (
        <ul className="list-unstyled" aria-label="listitem" tabIndex="3">
        {/*renders list of restautants dynamically*/}
            {props.venues && props.venues.map((element, index) => (
                <VenueList
                key = {index}
                {...element}
                sideMenuClick={props.sideMenuClick}
                />
            ))}
        </ul>
    )
}

export default RestaurantList; 