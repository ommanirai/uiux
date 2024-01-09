import React from "react";
import { Component } from "react";
import './Login.component.css'

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

    validateForm = (FieldName) =>{

    }

    render() {
        return (
            <div>
                <form>
                    <label>Username</label>
                    <input type="text" name="username" onChange={this.handleChange} />
                    <label>Password</label>
                    <input type="password" name="password" onChange={this.handleChange} />
                    <div className="btn">
                        <button >Login</button>
                    </div>
                </form>
            </div>
        )
    }
}