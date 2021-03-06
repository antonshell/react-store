import React, { Component } from 'react';
import ProductApi from '../api/ProductApi'
import ProductCard from '../ProductCard'

class Home extends Component {

    render() {

        let products = ProductApi.all();

        return (
            <div className="container">

                <div className="row">

                    <div className="col-lg-3">

                        <h1 className="my-4">Shop Name</h1>
                        <div className="list-group">
                            <a href="#" className="list-group-item">Category 1</a>
                            <a href="#" className="list-group-item">Category 2</a>
                            <a href="#" className="list-group-item">Category 3</a>
                        </div>

                    </div>

                    <div className="col-lg-9">

                        <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1" className=""></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2" className=""></li>
                            </ol>
                            <div className="carousel-inner" role="listbox">
                                <div className="carousel-item active">
                                    <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="First slide"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="Second slide"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="Third slide"/>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>

                        <div className="row">
                            {products.map(function(product, i){
                                return <ProductCard product={product} key={i} />;
                            })}
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

export default Home;