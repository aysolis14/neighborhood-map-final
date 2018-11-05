import React, { Component } from 'react';
import './Map/Map.css';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";

//Taken from https://tomchentw.github.io/react-google-maps/
const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom = { 10 }
        defaultCenter = {
            { lat: 33.5809341, lng: -101.884977}
        }
        defaultAnimation = {2}
        >
        {props.markers && props.markers.filter(marker => marker.isVisible.map((marker, index) =>
            let venueInfo = props.venues.find(venue => venue.id === marker.id)
            return <Marker key = {
                index
            }
            position = {
                {
                    lat: marker.lat,
                    lng: marker.lng, 
                }
            }
            animation = {
                marker.isOpen === true ? 1:2
            }
            onClick = {
                () => props.markerClick(marker)
            } >
                {marker.isOpen && (
                    <InfoWindow>
                        <div>
                            <p>{venueInfo.name}</p>
                            <p>{venueInfo.location.address}</p>
                            <p id="fourInfo">info provided by <span id="fourTitle">Foursquare</span></p>
                        </div>
                    </InfoWindow>
                )}
            </Marker>
            ))}
        </GoogleMap>
))

class Map extends Component {
    componentDidUpdate() {
        window.gm_authFailure = () => {
            alert('Oops! There was an error loading the map')
        };
    }

    render() {
        return (
            <Error {...this.props}>
                <MyMapComponent
                {...this.props}
                isMarkerShown
                googleMapUrl = "https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDTYWJ7Nf0Yl1rBUUd0CSWk8QA6ihCdUtk"
                loadingElement = { <div style = {{height: `100%`}}/>}
                containerElement = { <div style = {{height: `400px`}}/>}
                mapElement = {<div style = {{height: `100vh`}}/>}
                role = "application"
                />
            </Error>
        )
    }
}

export default Map; 