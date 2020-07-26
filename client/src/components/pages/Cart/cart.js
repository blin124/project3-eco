import React, { useEffect, useState } from "react";
// import "./style.css";
import API from "../../../utils/API";


function Cart(props) {

    const [carts, setCarts] = useState([])
    const [formObject, setFormObject] = useState({})
    const [count, setCount] = useState({})


  // Load all cart and store them with setCart
    useEffect(() => {
        loadCarts()
        setCount(1)
    }, [])

  // carts --
  // Loads all cart and sets them to cart
    function loadCarts() {
        console.log( "hi this aint working"
        );
        API.getCarts()
        .then(res => 
            setCarts(res.data)
        )
        .catch(err => console.log(err));
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
                                {console.log(carts)}
                                {carts.map(cart => {
                                return (
                                    <tr>
                                    <th scope="row">{cart.name}</th>
                                    <th scope="row">description</th>
                                    <th scope="row">$ {cart.price}</th>
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