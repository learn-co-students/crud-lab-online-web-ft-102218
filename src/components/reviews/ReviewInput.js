import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(){
      super();
      this.state = {
        text: ""
      }
  }

  handleInput = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addReview({ text: this.state.text, restaurantId: this.props.restaurantId })

  }

  render() {
    return (
      <div>
        <br />
        <form onSubmit={this.handleSubmit}>
          <label>Leave a Review: </label><br />
          <input onChange={this.handleInput} type="text" value={this.state.text} /><br />
          <input type="submit" value="Add Review" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
