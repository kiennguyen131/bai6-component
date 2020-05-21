import React, { Component } from 'react';
import "./../css/LoginForm.css"

class LoginForm extends Component {
    render() {
        return (
            <div className="LoginForm">
                <p>Sign in</p>
                <form>
                    <div>
                        <label for="user">Username</label>
                        <br/>
                        <input type="text" id="user" name="user" />
                    </div>
                    <div>
                        <label for="password">Password</label>
                        <br/>
                        <input type="password" id="password" name="password" />
                    </div>
                    <button>Sign in to Coders-X</button>
                </form>
                <div class="checkForm">
                    <input type="checkbox" id="keepSignIn" />
                    <label for="keepSignIn">Keep me sign in</label>
                </div>
                <nav>
                    <a href="#">Forgot username?</a>
                    <a href="#">Forgot password?</a>
                </nav>  
            </div>
        );
    }
}

export default LoginForm;