import ExploreForm from './ExploreForm';
import '../css/App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <>
        <ExploreForm/>
      </>
    );
  }

}

export default App
