import React from "react";
import { Component } from "react";
import './Login.component.css'
import { Button } from "../../Common/Button/Button.component";

export class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            usernameError: '',
            passwordError: '',
            isSubmitting: false,
            isValidForm: false
        }
    }

    handleChange = (event) => {
        // console.log(event.target.value)
        const { name, value } = event.target;
        // console.log(name)
        // console.log(value)
        this.setState({
            [name]: value
        }, () => {
            // console.log(this.state)
            this.validateForm(name)
        })
    }

    validateForm = (FieldName) => {
        var errMsg;
        var errorField = FieldName + "Error"
        errMsg = this.state[FieldName]
            ? ""
            : "required filed"
        this.setState({
            [errorField]: errMsg
        }, () => {
            console.log(this.state)
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({
            isSubmitting: true
        })
        setTimeout(() => {
            this.setState({
                isSubmitting: false
            })
        }, 3000);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="" className="">Username</label>
                    <input type="text" name="username" onChange={this.handleChange} />
                    <p style={{ color: 'red' }}>{this.state.usernameError}</p>
                    <label>Password</label>
                    <input type="password" name="password" onChange={this.handleChange} />
                    <p style={{ color: 'red' }} >{this.state.passwordError}</p>
                    <div className="btn">
                        <Button
                            isSubmitting={this.state.isSubmitting}
                            enabledLabel="Login"
                            disabledLabel="LoginingIn..."
                            isValidForm={this.state.username && this.state.password}
                        ></Button>
                    </div>
                </form>
            </div>
        )
    }
}