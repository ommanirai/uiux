import React, { Component } from "react";
import { Button } from "../../Common/Button/Button.component";

const defaultForm = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    phone: '',
    dob: ''
}

export class Register extends Component {
    constructor() {
        super()
        this.state = {
            data: {
                ...defaultForm
            },
            error: {
                ...defaultForm
            },
            isSubmitting: false,
            isValidForm: false
        }
    }
    handleChange = event => {
        const { name, value } = event.target;
        // console.log(name)
        // console.log(value)
        this.setState(previosData => ({
            // [name]:value
            data: {
                ...previosData.data,
                [name]: value
            }
        }), () => {
            // console.log(this.state.data)
            this.validateForm(name)
        })
    }
    validateForm = fieldName => {

    }

    render() {
        return (
            <div>
                <form className="my-5">
                    <label className="fs-4">username</label>
                    <input type="text" name="username" className="form-control form-control-lg mb-3" onChange={this.handleChange} />

                    <label className="fs-4">email</label>
                    <input type="text" name="email" className="form-control form-control-lg mb-3" onChange={this.handleChange} />

                    <label className="fs-4">password</label>
                    <input type="text" name="password" className="form-control form-control-lg mb-3" onChange={this.handleChange} />

                    <label className="fs-4">confirmPassword</label>
                    <input type="text" name="confirmPassword" className="form-control form-control-lg mb-3" onChange={this.handleChange} />

                    <label className="fs-4">address</label>
                    <input type="text" name="address" className="form-control form-control-lg mb-3" onChange={this.handleChange} />

                    <label className="fs-4">dob</label>
                    <input type="text" name="dob" className="form-control form-control-lg mb-3" onChange={this.handleChange} />

                    <label className="fs-4">phone</label>
                    <input type="text" name="phone" className="form-control form-control-lg mb-3" onChange={this.handleChange} />

                    <Button
                        enabledLabel="Register"
                        disabledLabel="Registering..."
                        isSubmitting={this.state.isSubmitting}
                        isValidForm={this.state.isValidForm}
                    ></Button>

                </form>
            </div>
        )
    }
}