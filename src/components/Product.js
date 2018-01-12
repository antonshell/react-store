import React, { Component } from 'react';
import ProductApi from './api/ProductApi'

class Product extends Component {

    render() {

        let productId = parseInt(this.props.match.params.id, 10);
        let product = ProductApi.get(productId);

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
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                                <small className="text-muted">Posted by Anonymous on 3/1/17</small>
                                <hr/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                                    <small className="text-muted">Posted by Anonymous on 3/1/17</small>
                                    <hr/>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                                        <small className="text-muted">Posted by Anonymous on 3/1/17</small>
                                        <hr/>
                                            <a href="#" className="btn btn-success">Leave a Review</a>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

export default Product;