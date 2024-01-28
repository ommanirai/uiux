import React, { useEffect, useState } from "react";
import './Register.component.css'
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

export const Reg = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        address: '',
        phone: '',
        dob: '',
        isSubmitting: false,
        isValidForm: false,
    })

    useEffect(function () {
        console.log(formData)
    }, [formData])

    const handleChange = e => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
        // console.log(formData)
    }
    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')
    // const [dob, setDob] = useState('')
    // const [email, setEmail] = useState('')
    // const [contact, setContact] = useState('')
    // const [gender, setGender] = useState('')
    return (
        <div>
            <form className="my-5" >
                <label className="fs-4">username</label>
                <input type="text" name="username" onChange={handleChange} className="form-control form-control-lg mb-3" />
                <p className="text-danger"></p>

                <label className="fs-4">email</label>
                <input type="text" name="email" className="form-control form-control-lg mb-3" onChange={handleChange} />
                <p></p>

                <label className="fs-4">password</label>
                <input type="text" name="password" className="form-control form-control-lg mb-3" onChange={handleChange} />
                <p className="text-danger"></p>

                <label className="fs-4">confirmPassword</label>
                <input type="text" name="confirmPassword" className="form-control form-control-lg mb-3" onChange={handleChange} />
                <p className="text-danger"></p>

                <label className="fs-4">address</label>
                <input type="text" name="address" className="form-control form-control-lg mb-3" onChange={handleChange} />

                <label className="fs-4">dob</label>
                <input type="text" name="dob" className="form-control form-control-lg mb-3" onChange={handleChange} />

                <label className="fs-4">phone</label>
                <input type="text" name="phone" className="form-control form-control-lg mb-3" onChange={handleChange} />
                <Button
                    isSubmitting={false}
                    enabledLabel="Signin"
                    disabledLabel="SigningIn..."
                    isValidForm={true}
                ></Button>
            </form>
        </div>
    )
}