import React, { Component } from 'react';
import Error from './Error.js';
import './Styles.css';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";

//Taken from https://tomchentw.github.io/react-google-maps/
const MyMapComponent = withScriptjs(withGoogleMap((props) =>
        <GoogleMap 
            defaultZoom = {12}
            defaultCenter = {
            {   lat: 33.5809341, lng: -101.884977 }}
            defaultAnimation = {2}
            
        >
        { /*written by Forrest Walker - https://www.youtube.com/watch?v=cJ3sAG2Ybq4&index=4&list=PL4rQq4MQP1crXuPtruu_eijgOUUXhcUCP */}
        {props.markers && props.markers.filter(marker => marker.isVisible).map((marker, index) => {
            let venueInfo =  props.venues.find(venue => venue.id === marker.id)
           return <Marker key = {
               index
           }
           position = {
               {
                   lat: marker.lat,
                   lng: marker.lng
               }
           }
           animation = {
               marker.isOpen === true ? 1 : 2
           }
           onClick = {
               () => props.markersClick(marker)
           } >
                {marker.isOpen && (
                <InfoWindow>
                    <div>
                        <p>{venueInfo.name}</p>
                        <p>{venueInfo.location.address}</p>
                        <p id="fourInfo">provided by <span id="fourTitle">Foursquare</span></p>
                    </div>
                </InfoWindow>)}
            </Marker>
        })
        }
        </GoogleMap>
))

class Map extends Component {

    componentDidUpdate() {
        /* error handler in case of failure*/
        window.gm_authFailure = () => {
            alert('Oops! looks like there was an issue loading the map')
        };
    }

    render() {
        return(
            <Error {...this.props}>
                <MyMapComponent
                /* spread operator for the array props */
                    {...this.props}
                    isMarkerShown
                /* the url to render GOOGLE MAPS */
                    googleMapURL =  "https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDJ95Nr_HKsHk7RB6dXB1qwdIYqwbsTgAc"
                    loadingElement = { <div style = {{ height: `100%` }}/>}
                    containerElement = { <div style = {{ height: `400px` }}/>}
                /* sets the relative total height of the window */
                    mapElement = {<div style = {{ height: `100vh` }}/>}
                    role="application" 
                />
            </Error>
        )
    }
}

export default Map;