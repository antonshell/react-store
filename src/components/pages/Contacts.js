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

                        <h2 className="text-center">Contacts</h2>

                        <p>
                            3481 Melrose Place
                            Beverly Hills, CA 90210
                        </p>

                        <p>
                            P: (123) 456-7890
                        </p>

                        <p>
                            E: name@example.com
                        </p>

                        <p>
                            H: Monday - Friday: 9:00 AM to 5:00 PM
                        </p>

                        <br/><br/>

                    </div>

                </div>

            </div>
        );
    }
}

export default Product;