import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './Map/Map.js'; 
import MainPage from './MainPage/MainPage.js';
import SideMenu from './SideMenu.js';


class App extends Component {

  state = {
    venues: [],

  }
  render() {
    return (
      <MainPage />
    );
  }
}

export default App;
