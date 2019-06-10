import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    const { restaurants } = this.props;
    return(
      <ul>
        { restaurants.map((restaurant, i) => <Restaurant key={i} restaurant={restaurant} delete={this.props.delete}/>) }
      </ul>
    );
  }
};

export default Restaurants;