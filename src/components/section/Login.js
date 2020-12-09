import React, { Component } from 'react'
import '../css/Login.css'
export default class Login extends Component {

    constructor(props){
        super(props);
        this.state ={};
    }

    submitLogin(e){

    }

    render() {
        return (
            <div className="row">
                <div className="login">
                    <div>
                        <fieldset><legend>LOGIN</legend> 	
                        	<label for="username">UserName *</label>
                            <input type="text" id="name" name="username" className="login-input" placeholder="Username"></input>
                            <label for="email">Password *</label>
                            <input type="password" id="password" name="password" className="login-input" placeholder="Password"></input>
                          	<button type="button" className="login=btn" onClick={this.submitLogin.bind(this)}>Login</button>
                        </fieldset>
                    </div>
                </div>
            </div>
        )
    }
}

export default class Registration extends Component {

    constructor(props){
        super(props);
        this.state ={};
    }

    submitRegister(e){

    }

    render() {
        return (
            <div className="row">
                <div className="login">
                    <div>
                        <fieldset><legend>Register</legend> 	
                        	<label for="username">UserName *</label>
                            <input type="text" id="name" name="username" className="login-input" placeholder="Username"></input>
                            <label for="email">Password *</label>
                            <input type="password" id="password" name="password" className="login-input" placeholder="Password"></input>
                          	<button type="button" className="login=btn" onClick={this.submitRegister.bind(this)}>Register</button>
                        </fieldset>
                    </div>
                </div>
            </div>
        )
    }
} 