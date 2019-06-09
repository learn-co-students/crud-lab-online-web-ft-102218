import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {
  constructor(props) {
    super(props)
  }

  handleDelete = (event, id) => {
    event.preventDefault()
    this.props.delete(this.props.restaurant.id)
  }

  render() {
    const { restaurant } = this.props;
    return (
      <div>
        <li>
          {restaurant.text}
          <button id={restaurant.id} onClick={(event) => this.handleDelete(event, restaurant.id)}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
