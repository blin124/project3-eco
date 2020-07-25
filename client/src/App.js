import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/pages/Landing/Landing";
import Register from "./components/Register/register";
import Login from "./components/Login/login";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Other from "./components/pages/Other/Other";
import Profile from "./components/Profile/profile";
import Shop from "./components/pages/Shop/shop";
import Cart from "./components/pages/Cart/cart";
// import Admin from "./layout/Admin";

import "./App.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStore from "./utils/context/GlobalStore";


class App extends Component {

    render() {
        return (
            <GlobalStore.GlobalProvider>
                <Router>
                    <div className="container-fluid pl-0 pr-0 m-0">
                        <Navbar />
                        <Route exact path="/" component={Landing} />
                        <div className='container-fluid m-0 p-0'>
                            <Route exact path="/register" component={Register} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/profile" component={Profile} />
                            <Route exact path="/dashboard" component={Dashboard} />
                            <Route exact path="/other" component={Other} />
                            <Route exact path="/shop" component={Shop} />
                            <Route exact path="/cart" component={Cart} />
                        </div>
                    </div>
                </Router>
            </GlobalStore.GlobalProvider>
        );
    }
}
export default App;
