import React, { Component } from 'react';

class NotFound extends Component {
    render() {
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

                        <h1>Error 404. Page not found</h1>

                    </div>

                </div>

            </div>
        );
    }
}

export default NotFound;