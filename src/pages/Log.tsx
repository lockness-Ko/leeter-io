import { ReactNode } from 'react';
import React from 'react';
import '../App.css'

type LogProps = {};

export class Log extends React.Component {
    constructor(props: LogProps) {
        super(props);

        this.state = {
            username: '',
            password: '',
            totp: '',
            signup: false
        };

        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSigninChange = this.handleSigninChange.bind(this);
        this.handleTotpChange = this.handleTotpChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsernameChange(e: any) {
        this.setState({
            username: e.target.value
        });
    }

    handlePasswordChange(e: any) {
        this.setState({
            password: e.target.value
        });
    }

    handleTotpChange(e: any) {
        this.setState({
            totp: e.target.value
        });
    }

    handleSigninChange(e: any) {
        this.setState({
            signup: e.target.value === "on" ? true : false
        });
    }

    handleSubmit(e: any) {
        alert(JSON.stringify(this.state));
        e.preventDefault();
    }

    render(): ReactNode {
        return (
            <>
                <div className="App-header">
                    <h2>Login/Sign-up</h2>
                    <div className='Login-form'>
                        <input type="text" onChange={this.handleUsernameChange} className='Login-input' name="username" id="LoginUsername" placeholder='Your username..' /><br />
                        <input type="password" onChange={this.handlePasswordChange} className='Login-input' name="password" id="LoginPassword" placeholder='Your password..' /><br />
                        <input type="password" onChange={this.handleTotpChange} className='Login-input' name="totp" id="LoginTOTP" placeholder='TOTP secret or code..' /><br />
                        <hr />
                        <input type="checkbox" onChange={this.handleSigninChange} name="signup" id="LoginSignup" /><span className='Login-checktext'>Sign-up</span>
                        <button className='Login-button' onClick={this.handleSubmit}>Login</button>
                    </div>
                </div>
            </>
        )
    }
}