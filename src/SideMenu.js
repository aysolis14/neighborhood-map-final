import React, { Component } from 'react';
import RestaurantList from './RestaurantList.js';
import './Styles.css';


class SideMenu extends Component {
    state = {
        query: '',
        restaurants: []
    }

    venueFilter = () => {
        if(this.state.query.trim() !== "") {
            let restaurants = this.props.venues.filter(venue => venue.name.toLowerCase().includes(this.state.query.toLowerCase()))
            return restaurants
        }
        return this.props.venues
    }

    updateQuery = (event) => {
        this.setState({
            query: event.target.value
        })

        let markers = this.props.venues.map(venue => {
            let matchFound = venue.name.toLowerCase().includes(event.target.value.toLowerCase())
            let marker = this.props.markers.find(element => element.id === venue.id);
            if(matchFound) {
                marker.isVisible = true;
            } else {
                marker.isVisible = false;
            }
            return marker;
        });
        this.props.updateState({markers})
    }

    render() {
        return (
            <div className="sideMenu" aria-label="listitem" tabIndex="1">
            {/*checks toggle open and close*/}
                {this.props.menuOpen && 
                    <nav className="navbar navbar-light bg-light" id="sidebar">
                        <span className="sidebar-span" id="sidebar-span" tabIndex="2">
                        Local Grubs
                        {/*list of filtered restarunts*/}
                        <form className="form-inline align-items-center col-auto"> 
                        <input id="search" className="form-control mr-sm-1" type="search" placeholder="Filter Restaurants" value={this.state.query} onChange={this.updateQuery} aria-label="filter"/>
                        <RestaurantList 
                        {...this.props}
                        venues={this.venueFilter()}
                        sideMenuClick={this.props.sideMenuClick}
                         />
                        </form>    
                        </span>
                    </nav>
                }
            </div>
        )
    }
}

export default SideMenu; 