import React, { Component } from "react";
import jwt_decode from 'jwt-decode';
import Sidebar from "../../Sidebar/Sidebar";
import DashboardNewsCard from "../../DashboardNewsCard/DashboardNewsCard"
import AdminCard from "../../AdminComponent/AdminCard"
import axios from 'axios'


class DashBoard extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        }
    }

    componentDidMount() {
        axios.get('/api/current-user')
            .then((response) => {
                this.setState({
                    first_name: response.data.first_name,
                    last_name: response.data.last_name,
                    email: response.data.email,
                })
            })

        // const token = localStorage.usertoken;
        // const decoded = jwt_decode(token);
        // this.setState({
        //     first_name: decoded.first_name,
        //     last_name: decoded.last_name,
        //     email: decoded.email
        // })
    }

    renderPage = () => {
        if (this.state.first_name === "admin" && this.state.last_name === "admin") {
            return <AdminCard />
        }
        else {
            return <DashboardNewsCard />
        }
    }
    
    render() {
        return (
            <div className="container-fluid pl-0">
                    <Sidebar />
                    <div>
                        <h1>
                             Welcome { this.state.first_name } { this.state.last_name }
                        </h1>
                        <div className="d-flex flex-row-reverse mr-5">

                            {this.renderPage()}
                        </div>
                    </div>
            </div>
        );
    } 
}

export default DashBoard;