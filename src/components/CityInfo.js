// import '../css/cityInfo.css';
import React, { Component } from 'react';

class CityInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    // console.log(this.props.serverData.cityCleanedUp.map((elem) => {return (`${elem.description}`)}));
    let forecast = this.props.weatherData.cityCleanedUp.map((elem) => {return (`${elem.description}`)});
    return (
      <>
        <ul>
          <li>Name: {this.props.cityData.display_name}</li>
          <li>latitude: {this.props.cityData.lat}</li>
          <li>Longitude: {this.props.cityData.lon}</li>
          <li>Forecast: {forecast}</li>
        </ul>
      </>
    );
  }

}


export default CityInfo
