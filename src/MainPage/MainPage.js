import React, { Component } from 'react';
import Header from './Header/Header.js';
import SideMenu from '.SideMenu/SideMenu.js';
import Map from '.Map/Map.js';

import './MainPage/MainPage.css';

class MainPage extends Component {
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
    }
}