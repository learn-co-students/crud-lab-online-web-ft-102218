import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <div>
        <br />
        <ul>
          {this.props.reviews.map((review, i) => <Review key={i} review={review} deleteReview={this.props.deleteReview}/>)}
        </ul>
      </div>
    );
  }
};

export default Reviews;