import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <>
        <h1>{this.props.movieData.title}</h1>
        <p>{this.props.movieData.overview}</p>
        <Image src={this.props.movieData.image_url} className='img-map' alt='image of Movie' fluid />
      </>
    );
  }

}
export default Movie
