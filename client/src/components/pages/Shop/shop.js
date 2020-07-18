import React, { Component } from "react";
import "./style.css";
import shirt from '../../../images/redshirt.jpg';


class Shop extends Component {
    render() {
        return (
            <div className="container-fluid p-0 m-0">
                <div className="welcome-header">
                    <img className="rounded float-left" src="" alt=""/>
                    <h2 className="welcome">Welcome to our online store</h2>
                    <div className="jumbotron jumbotron-fluid container">
                        {/* link to id called all-products
                        <a href="#all-products">All products</a> */}
                        <div className="row">
                            <div className="col-sm-3">Categories
                            <ul>
                                <a href="#female-clothes"><li>Female</li></a>
                                <a href="#male-clothes"><li>Male</li></a>
                            </ul>
                            </div>
                            <div className="col-sm-9">Products
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row prow">
                    <div className="col-sm-6">
                    <img src={shirt} alt=""/>
                    </div>
                    <div className="col-sm-6">
                        pid
                        size + quantity dropdown
                        price
                        purchase quantity and confirm btn 
                    </div>
                </div>
            </div>
        );
    } 
}

export default Shop;