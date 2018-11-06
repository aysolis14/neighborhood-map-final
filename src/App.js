import React, { Component } from 'react';
import Map from './Map.js';
import './App.css';
import './Styles.css';
import Header from './Header.js';
import SideMenu from './SideMenu.js';
import SquareAPI from './SquareApi.js';



class App extends Component {
    state = {
        sideMenuOpen: true,
        venues: [],
        markers: [],
        updateState: element => {
            this.setState(element)
        }
    }

    toggleMenu = () => {
        this.setState(state => ({
            sideMenuOpen: !state.sideMenuOpen
        }
        ))
    }

    markersClose = () => {
        let markers = this.state.markers.map(marker => {
            marker.isOpen = false;
            return marker;
        })
        this.setState({ markers: Object.assign(this.state.markers, markers)})
    }

    markersClick = (marker) => {
        this.markersClose()
        marker.isOpen = true;
        this.setState({
            markers: Object.assign(this.state.markers, marker)
        });
        let venue = this.state.venues.find(venue => venue.id === marker.id)
        SquareAPI.getVenueDetails(marker.id).then(res => {
            let fresh = Object.assign(venue, res.response.venue)
            this.setState({ venues: Object.assign(this.state.venues, fresh)})
        })
    }

    sideMenuClick = venue => {
        let marker = this.state.markers.find(element => element.id === venue.id);
        this.markersClick(marker)
    }
    componentDidMount() {
        SquareAPI.search({
            ll: "33.5827606,-101.8777916",
            query: "restaurant",
            limit: 10
        }).then(allVenues => {
            let { venues } = allVenues.response;
            let markers = venues.map(venue => {
                return {
                    lat: venue.location.lat,
                    lng: venue.location.lng, 
                    isOpen: false,
                    isVisible: true, 
                    id: venue.id
                }
            });
            this.setState({ venues, markers })
        });
    }
    render() {
        return (
        <div className="App">
            <Header toggle={this.toggle}/>
            <SideMenu sideMenuOpen={this.state.sideMenuOpen} {...this.state} sideMenuClick={this.sideMenuClick}/>
            <Map {...this.state} markersClick={this.markersClick}/>
        </div>
      );
    }
}

export default App; 
