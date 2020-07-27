import React, { useEffect, useState } from "react";
// import "./style.css";
import API from "../../../utils/API";
import axios from 'axios';


function Cart(props) {

    const [cart, setCart] = useState({
        products: []
    })


  // Load all cart and store them with setCart
    useEffect(() => {
        loadCurrentUserCart()
    }, [])

  // carts --
  // Loads all cart and sets them to cart
    function loadCurrentUserCart() {
        
        axios.post('/api/carts/current-cart')
            .then((res) => {
                console.log({res});
                setCart(res.data)
            })
    };

        console.log(props);
        return (
            <div className="container-fluid p-0 m-0">
                <div className="welcome-header">
                    <h2 className="welcome">Welcome to your shopping CART</h2>
                    {/* link to id called all-carts
                    <a href="#all-carts">All carts</a> */}
                    <div className="row">
                        {/* if (addToCartBtn == true) {
                            
                        } */}
                        <div className="col-sm-12">Carts
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                <th scope="col">Product</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                            {/* carts */}
                                {cart.products.map(product => {
                                return (
                                    <tr>
                                    <th scope="row">{product.name}</th>
                                    <th scope="row">description</th>
                                    <th scope="row">$ {product.price}</th>
                                    </tr>
                                );
                                })}
                            </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    
}

export default Cart;