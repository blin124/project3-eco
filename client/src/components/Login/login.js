import React, { Component, useState } from "react";
import { loginUser } from '../UserFunctions/userFunctions';
import GlobalStore from "../../utils/context/GlobalStore";

class Login extends Component {

    // const store = GlobalStore.useGlobalContext()
// step 1 - change component into functional component -- fixed
// step 2 - think how to add items to cart - depends on model hmmm.... find a way to add a cart to users

    constructor () {
        super()
         this.state = {
            email: '',
            password: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        // clg res
        // ideally inside response we want user_id
        loginUser(user).then(res => {
            // store.auth.dispatchAuth({type:'set-user', payload: res.data})
            if(res) {
                this.props.history.push('/dashboard');
            }
            else {
                console.log("Incorrect email or password");
            }
        })
    }

    render() {
        
        return ( 
            <div className='container'>
            <div className='row'>
                <div className='col-md-6 mt-5 mx-auto'>
                    <form noValidate onSubmit={ this.onSubmit }>
                        <h1 className='h3 mb-3 font-weight normal'>Please Sign in</h1>
                        <div className='form-group'>
                            <label htmlFor='email'>Email Address</label>
                            <input type='email'
                            className='form-control'
                            name='email'
                            placeholder='Enter Email'
                            value={ this.state.email }
                            onChange={ this.onChange }
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <input type='password'
                            className='form-control'
                            name='password'
                            placeholder='Enter Password'
                            value={ this.state.password }
                            onChange={ this.onChange }
                            />
                        </div>
                        <button type='submit' className='btn btn-lg btn-primary btn-block'>
                            Sign in
                        </button>
                    </form>
                </div>
            </div>
        </div>
        )
    }    
}

export default Login;