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
            usernameErr: '',
            passwordErr: '',
            isSubmitting: false
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

    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({
            isSubmitting: true
        })
        setTimeout(() => {
            this.setState({
                isSubmitting:false
            })
        }, 3000);
    }


    render() {
       

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input type="text" name="username" onChange={this.handleChange} />
                    <label>Password</label>
                    <input type="password" name="password" onChange={this.handleChange} />
                    <div className="btn">
                        <Button
                            isSubmitting={this.state.isSubmitting}
                            enabledLabel = "Login"
                            disabledLabel = "LoginingIn..."
                        ></Button>
                        <Button
                            isSubmitting={this.state.isSubmitting}
                            // enabledLabel = "Login"
                            // disabledLabel = "LoginingIn..."
                        ></Button>
                    </div>
                </form>
            </div>
        )
    }
}