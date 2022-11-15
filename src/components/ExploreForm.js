import React, { Component } from 'react';
import { ListGroup, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import Image from 'react-bootstrap/Image'
import '../css/ExploreForm.css'

class ExploreForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: {},
      city:'',
      imgSrc: ``,
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    let locationInfo = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);
    this.setState({
      cityData: locationInfo.data[0],
      imgSrc: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${locationInfo.data[0].lat},${locationInfo.data[0].lon}&zoom=14`
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
          <li>Name: {this.state.cityData.display_name}</li>
          <li>latitude: {this.state.cityData.lat}</li>
          <li>Longitude: {this.state.cityData.lon}</li>
        </ListGroup>
        <Image src={this.state.imgSrc} className='img-map' alt={this.state.name} fluid/>
      </>
    );
  }

}

export default ExploreForm
