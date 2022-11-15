import React, { Component } from 'react';
import { ListGroup, Form, Button } from 'react-bootstrap';
import axios from 'axios';

class ExploreForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: {},
      city:'',
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    let locationInfo = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);
    this.setState({
      cityData: locationInfo.data[0]
    });
  }

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
        <ListGroup>
          Name: {this.state.cityData.display_name} <br/> latitude: {this.state.cityData.lat} Longitude: {this.state.cityData.lon}
        </ListGroup>
      </>
    );
  }

}

export default ExploreForm
