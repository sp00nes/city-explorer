// import '../css/cityInfo.css';
import React, { Component } from 'react';

class CityInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <>
        <ul>
          <li>Name: {this.props.cityData.display_name || ''}</li>
          <li>latitude: {this.props.cityData.lat || ''}</li>
          <li>Longitude: {this.props.cityData.lon || ''}</li>
          <li>Forecast: {this.props.cityForecast.description || ''}</li>
        </ul>
      </>
    );
  }

}


export default CityInfo
