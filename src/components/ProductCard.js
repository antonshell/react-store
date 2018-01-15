import React, { Component } from 'react';

class ProductCard extends Component {
    render() {

        let product = this.props.product;

        return (
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                    <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                    <div className="card-body">
                        <h4 className="card-title">
                            <a href={'/product/' + product.id}>{product.name}</a>
                        </h4>
                        <h5>{product.price}</h5>
                        <p className="card-text">{product.description}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">★ ★ ★ ★ ☆</small>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductCard;