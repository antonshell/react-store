import React, { Component } from 'react';
import ProductApi from '../api/ProductApi'

class Product extends Component {

    render() {
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

                        <br/>

                        <img className="card-img-top img-fluid" src="http://placehold.it/900x400" alt=""/>

                        <br/><br/>

                        <h2 className="text-center">Services</h2>

                        <br/><br/>

                        <div className="row">
                            <div className="col-lg-4 col-sm-6 portfolio-item">
                                <div className="card h-100">
                                    <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                                    <div className="card-body">
                                        <h4 className="card-title">
                                            <a href="#">Service One</a>
                                        </h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 portfolio-item">
                                <div className="card h-100">
                                    <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                                    <div className="card-body">
                                        <h4 className="card-title">
                                            <a href="#">Service Two</a>
                                        </h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 portfolio-item">
                                <div className="card h-100">
                                    <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                                    <div className="card-body">
                                        <h4 className="card-title">
                                            <a href="#">Service Three</a>
                                        </h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <br/><br/>

                    </div>

                </div>

            </div>
        );
    }
}

export default Product;