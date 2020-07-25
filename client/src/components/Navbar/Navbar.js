import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./style.css";
import GlobalStore from "../../utils/context/GlobalStore";


function Navbar (props) {
    const store = GlobalStore.useGlobalContext()
    console.log({store}, "storeclg");

    function logOut(e) {
        e.preventDefault();
        
        store.auth.dispatchAuth({type:'clear-user'});

        localStorage.removeItem('usertoken');

        props.history.push('/');
    }
    
    const loginRegLink = (
        <ul className='navbar-nav list-group list-group-horizontal'>
            <li>
                <Link className='btn btn-sm active mr-1 mb-1' to='/shop'>
                    Shop
                </Link>
            </li>
            <li>
                <Link className='btn btn-sm active mr-1 mb-1' to='/login'>
                    Login
                </Link>
            </li>
            <li>
                <Link className='btn btn-sm active' to='/register'>
                    Register
                </Link>
            </li>
        </ul>
    )
    const userLink = (
        <ul className='navbar-nav list-group list-group-horizontal'>
            <li>
                <Link className='btn btn-sm active mr-1 mb-1' to='/shop'>
                    Shop
                </Link>
            </li>
            <li>
                <Link className='btn btn-sm active mr-1 mb-1' to='/cart'>
                    Cart
                </Link>
            </li>
            <li>
                <Link className='btn btn-sm active mr-1 mb-1' to='/'>
                    Home
                </Link>
            </li>
            <li>
                <Link className='btn btn-sm active mr-1 mb-1' to='/dashboard'>
                    Dashboard
                </Link>
            </li>
            <li>
                {/* <a href="/" rel='noopener noreferrer' onClick={logOut.bind(this)}>
                    Logout
                </a> */}
                <button className="btn btn-sm active" id="logoutBtn" data-toggle="modal" data-target="#logoutModal" onClick={logOut.bind(this)}>
                    <div>Logout</div>
                </button>
            </li>
        </ul>
    )
    return (

            <nav className='navbar navbar-expand-lg'>
                <div className='collapse navbar-collapse d-flex justify-content-end' id='navbar1'>
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>
            </nav>
    )
}

export default withRouter(Navbar);