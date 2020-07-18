import React, { Component } from "react";
import "./style.css"

class AdminCard extends Component {
    render() {
        return (
            <div className="dashboardCard card cardBackground">
                <div className="card-body">
                    <h4 className="card-subtitle">Admin card</h4>
                    <p className="card-text">description</p>
                    <a href="/admin" className="card-link bottomLink">Edit Shop as Admin</a>
                </div>
            </div>
        );
    }
}

export default AdminCard;