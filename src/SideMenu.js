import React, { Component } from 'react';

class SideMenu extends Component {
    state = {
        query: '',
        locations: []
    }

    venueFilter = () => {
        if(this.state.query.trim() !== "") {
            let locations = this.props.venues.filter(venue => venue.name.toLowerCase().includes(this.state.query.toLowerCase()))
            return locations
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
                marker.isVisbile = true;
            } else {
                marker.isVisbile = false;
            }
            return marker;
        });
        this.props.updateToState({markers})
    }

    render() {
        return (
            <div className="sideMenu" role="listitem" tabIndex="1">
            {this.props.menuOpen && 
                <nav className="navbar" id="navMenu">
                    <span className="navbar-span" id="navbar-span">
                    Local Locations
                    <form>
                        <input type="search" placeholder="Filter Locations" value={this.state.query} onChange={this.updateQuery}/>
                    </form>
                    </span>
                </nav>
            }
            </div>
        )
    }
}

export default SideMenu;