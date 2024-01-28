import React, { Component } from "react";
import { Button } from "../../Common/Button/Button.component";
import './Register.component.css'

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
        console.log("constructor at first")
    }

    // init
    componentDidMount = () => {
        // api call
        // data prepare
        console.log("init stage at third")
    }
    
    // update
    componentDidUpdate = () => {
        console.log("update stage at fourth")
    }
    // delete
    componentWillUnmount = () => {
        console.log("delete at last")
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
        var errorMsg;
        switch (fieldName) {
            case 'username':
                errorMsg = this.state.data[fieldName]
                    ? this.state.data[fieldName].match(/^[a-z]/)
                        ? this.state.data[fieldName].length > 3
                            ? ''
                            : 'username must be atleast 3 character'
                        : 'username must start with alphabet'
                    : 'required field'
                break;
            case 'email':
                errorMsg = this.state.data[fieldName]
                    ? ''
                    : 'required field'
                break;
            case 'password':
                errorMsg = this.state.data['confirmPassword']
                    ? this.state.data['confirmPassword'] === this.state.data[fieldName]
                        ? ""
                        : ' password didnot match with confirm password'
                    : this.state.data[fieldName]
                        ? this.state.data[fieldName].match(/[a-z]/)
                            ? this.state.data[fieldName].match(/[A-Z]/)
                                ? this.state.data[fieldName].match(/[0-9]/)
                                    ? this.state.data[fieldName].match(/[!@#$%^&*]/)
                                        ? this.state.data[fieldName].length < 8
                                            ? 'password must containt atleast 8 character'
                                            : this.state.data[fieldName].length > 30
                                                ? 'password must contain maximum 30 character'
                                                : ''
                                        : 'password must contain atleast one special character'
                                    : 'password must contain atleast one number'
                                : 'password must contain atleast one uppercase alphabet'
                            : 'password must contain atleat one lowercase alphabet'
                        : 'required filed'
                break
            case 'confirmPassword':
                errorMsg = this.state.data['password']
                    ? this.state.data['password'] === this.state.data[fieldName]
                        ? ""
                        : 'confirm password didnot match with password'
                    : this.state.data[fieldName]
                        ? this.state.data[fieldName].match(/[a-z]/)
                            ? this.state.data[fieldName].match(/[A-Z]/)
                                ? this.state.data[fieldName].match(/[0-9]/)
                                    ? this.state.data[fieldName].match(/[!@#$%^&*]/)
                                        ? this.state.data[fieldName].length < 8
                                            ? 'confirm password must containt atleast 8 character'
                                            : this.state.data[fieldName].length > 30
                                                ? 'confirm password must contain maximum 30 character'
                                                : ''
                                        : 'confirm password must contain atleast one special character'
                                    : 'confirm password must contain atleast one number'
                                : 'confirm password must contain atleast one uppercase alphabet'
                            : 'confirm password must contain atleat one lowercase alphabet'
                        : 'required filed'
                break;

        }
        this.setState(previousError => ({
            error: {
                ...previousError.error,
                [fieldName]: errorMsg
            }
        }), () => {
            // console.log(this.state.error)
            var err;
            err = Object
                .values(this.state.error)
                .filter(err => err)
            // .filter(function(item){
            //     if(item){
            //         return item;
            //     }
            // })
            // console.log(err)
            // if (err.length == 0) {
            //     this.setState({
            //         isValidForm: true
            //     })
            // }
            // else {
            //     this.setState({
            //         isValidForm: false
            //     })
            // }

            this.setState({
                isValidForm: err.length === 0
            })
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
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
        console.log("render at second")
        return (
            <div>
                <form className="my-5" onSubmit={this.handleSubmit} >
                    <label className="fs-4">username</label>
                    <input type="text" name="username" className="form-control form-control-lg mb-3" onChange={this.handleChange} />
                    <p className="text-danger">{this.state.error.username}</p>

                    <label className="fs-4">email</label>
                    <input type="text" name="email" className="form-control form-control-lg mb-3" onChange={this.handleChange} />
                    <p>{this.state.error.email}</p>

                    <label className="fs-4">password</label>
                    <input type="text" name="password" className="form-control form-control-lg mb-3" onChange={this.handleChange} />
                    <p className="text-danger">{this.state.error.password}</p>

                    <label className="fs-4">confirmPassword</label>
                    <input type="text" name="confirmPassword" className="form-control form-control-lg mb-3" onChange={this.handleChange} />
                    <p className="text-danger">{this.state.error.confirmPassword}</p>

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
                        isValidForm={!this.state.isValidForm}
                    ></Button>
                </form>
            </div>
        )
    }
}