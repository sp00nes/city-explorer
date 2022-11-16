// import '../css/cityImage.css';
import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'

class CityImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <>
        <Image src={this.props.imgSrc} className='img-map' alt='image of searched map' fluid />
      </>
    );
  }

}
export default CityImage
