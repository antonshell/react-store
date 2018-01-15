import React, { Component } from 'react';
import ProductApi from '../api/ProductApi'
import ReviewsApi from '../api/ReviewsApi'
import ReviewCard from '../ReviewCard'

class Product extends Component {

    render() {

        let productId = parseInt(this.props.match.params.id, 10);
        let product = ProductApi.get(productId);

        let reviews = ReviewsApi.all();

        return (
            <div className="container">

                <div className="row">

                    <div className="col-lg-3">
                        <h1 className="my-4">Shop Name</h1>
                        <div className="list-group">
                            <a href="#" className="list-group-item active">Category 1</a>
                            <a href="#" className="list-group-item">Category 2</a>
                            <a href="#" className="list-group-item">Category 3</a>
                        </div>
                    </div>

                    <div className="col-lg-9">

                        <div className="card mt-4">
                            <img className="card-img-top img-fluid" src="http://placehold.it/900x400" alt=""/>
                                <div className="card-body">
                                    <h3 className="card-title">{product.name}</h3>
                                    <h4>{product.price}</h4>
                                    <p className="card-text">{product.description}</p>
                                    <span className="text-warning">★ ★ ★ ★ ☆</span>
                                    4.0 stars
                                </div>
                        </div>

                        <div className="card card-outline-secondary my-4">
                            <div className="card-header">
                                Product Reviews
                            </div>
                            <div className="card-body">
                                {reviews.map(function(review, i){
                                    return <ReviewCard review={review} key={i} />;
                                })}
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

export default Product;