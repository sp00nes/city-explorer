import React, { Component } from 'react';
import ExploreForm from './ExploreForm';
import CityImage from './CityImage';
import CityInfo from './CityInfo';
import '../css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: {},
      cityForecast: {},
      imgSrc: ``,
    }
  }

  //sends data too parent
  getData = (cityData, cityForecast, imgSrc) => {
    this.setState({
      cityData: cityData,
      cityForecast: cityForecast,
      imgSrc: imgSrc,
    });
  }

  render() {
    return (
      <>
        <ExploreForm
          getData={this.getData}
        />
        <CityInfo
          cityData={this.state.cityData}
          cityForecast={this.state.cityForecast}
        />
        <CityImage
          imgSrc={this.state.imgSrc}
        />
      </>
    );
  }

}

export default App
