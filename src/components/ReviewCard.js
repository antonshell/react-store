import React, { Component } from 'react';

class ReviewCard extends Component {
    render() {

        let review = this.props.review;

        return (
            <div className="review-card">
                <p>{review.message}</p>
                <small className="text-muted">Posted by {review.name} on {review.created}</small>
                <hr/>
            </div>
        );
    }
}

export default ReviewCard;