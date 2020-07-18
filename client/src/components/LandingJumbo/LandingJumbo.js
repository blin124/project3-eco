import React, { Component } from "react";


class LandingJumbo extends Component {
    render() {
        return (
            <div className="jumbotron mt-5 landingJumbo">
                <div className='col-sm-8 mx-auto jumboText'>
                    <h1 className='d-flex justify-content-center companyName'>
                        <div id="name">ACCESS POINT</div>
                    </h1>
                    <h2 className='text-center companySlogan'>Come to your go-to shop and go as you please</h2>
                </div>
            </div>
        );
    } 
}

export default LandingJumbo;