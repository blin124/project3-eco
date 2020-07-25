import React, { useEffect, useState } from "react";
import "./style.css";
import logo from '../../../images/logo.png';
import shirt from '../../../images/redshirt.jpg';
import API from "../../../utils/API";
import GlobalStore from "../../../utils/context/GlobalStore";

function Shop(props) {

    const [products, setProducts] = useState([])
    const [formObject, setFormObject] = useState({})
    const [count, setCount] = useState({})
    const store = GlobalStore.useGlobalContext()

    console.log({store});

  // Load all Products and store them with setProducts
    useEffect(() => {
        loadProducts()
        setCount(1)
    }, [])

  // products --
  // Loads all Products and sets them to Products
    function loadProducts() {
        console.log( "hi this aint working"
        );
        API.getProducts()
        .then(res => 
            setProducts(res.data)
        )
        .catch(err => console.log(err));
    };

    function addToCart() {
        
    }

        console.log(props);
        return (
            
            <div className="container-fluid p-0 m-0">
                <div className="welcome-header">
                    <img className="rounded float-left" src={logo} alt=""/>
                    <h2 className="welcome">Welcome to our online store</h2>
                    {/* link to id called all-products
                    <a href="#all-products">All products</a> */}
                    <div className="row">
                        
                        <div className="col-sm-12">Products
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                <th scope="col">Product</th>
                                <th scope="col">Description</th>
                                <th scope="col">Price</th>
                                {/* {store.auth.authState.isLoggedIn && ( */}
                                    <th scope="col">Action</th>
                                {/* )} */}
                                </tr>
                            </thead>
                            <tbody>
                            {/* products */}
                                {console.log(products)}
                                {products.map(product => {
                                return (
                                    <tr>
                                    <td scope="row">{product.name}</td>
                                    <td scope="row">description</td>
                                    <td scope="row">$ {product.price}</td>
                                    {/* {store.auth.authState.isLoggedIn && ( */}
                                        <td scope="row"><button className="btn" onClick={addToCart}>Add to cart</button></td>
                                   
                                    {/* )} */}
                                    </tr>
                                );
                                })}
                            </tbody>
                            </table>
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

export default Shop;