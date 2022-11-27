import React, { Component } from 'react';
import ExploreForm from './ExploreForm';
import CityImage from './CityImage';
import Movie from './Movie';
import CityInfo from './CityInfo';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: [],
      cityData: {},
      weatherData: [],
      imgSrc: ``,
    }
  }

  //sends data too parent
  getData = (cityData, weatherData, movieData, imgSrc) => {
    this.setState({
      cityData: cityData,
      weatherData: weatherData,
      movieData: movieData,
      imgSrc: imgSrc,
    });
  }

  render() {
    // console.log(this.state.movieData);
    // console.log(this.state.weatherData)
    let movies = this.state.movieData.map((elem, idx) => {return (<Movie movieData={elem} key={idx}/>)});
    return (
      <>
        <ExploreForm
          getData={this.getData}
        />
        <CityInfo
          cityData={this.state.cityData}
          weatherData={this.state.weatherData}
        />
        <CityImage
          imgSrc={this.state.imgSrc}
        />
        {movies}
      </>
    );
  }

}

export default Main
