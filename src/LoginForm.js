import React, {Component} from "react";

export default class LoginForm extends Component {
    render() {
        return(
            <form className="loginForm">
                <h3 id="loginHeader">Login</h3>
                <div>
                    <input placeholder="Username"></input>
                    <br></br>
                    <label>Enter your username or email.</label>
                </div>
                <div>
                    <input placeholder="Password"></input>
                    <br></br>
                    <label>Password should be 8-12 characters.</label>
                </div>
                <button id="loginButton" class="btn btn-warning">Let me in</button>
            </form>
        )
    }
}