import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';
import '../css/ExploreForm.css'

class ExploreForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city:'',
      isError: false
    }
  }

  handleSubmit = async (event) => {
    try {
      event.preventDefault();
      // call api to get info
      let locationInfo = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);
      let forecastInfo = await axios.get(`http://localhost:3001/weather?lat=${locationInfo.data[0].lat}&lon=${locationInfo.data[0].lon}`);
      // set var to info from api 
      let cityData = locationInfo.data[0];
      let cityForecast = forecastInfo.data[0];
      let imgSrc = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${locationInfo.data[0].lat},${locationInfo.data[0].lon}&zoom=14`;
      // send data up to parent component
      this.props.getData(cityData, cityForecast, imgSrc);
      //handle error
    } catch (error) {
      this.setState({
        errorMessage: error.message,
        isError: true
      });
    }
  }

  //update state when ever there is a change in the input form
  handleCityInput = (event) => {
    this.setState({
      city: event.target.value
    });
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Label> Search Quarry
            <Form.Control name="city" type="text" onChange={this.handleCityInput} />
          </Form.Label>
          <Button type="submit">Explore!</Button>
        </Form>
      </>
    );
  }

}

export default ExploreForm
