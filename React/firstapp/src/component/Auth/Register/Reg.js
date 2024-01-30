import React, { useState } from 'react';
// import React, { useEffect, useState } from "react";
// import './Register.component.css'
// import { Button } from "../../Common/Button/Button.component";

// const defaultForm = {
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     address: '',
//     phone: '',
//     dob: ''
// }

// export const Reg = () => {
//     const [formData, setFormData] = useState({
//         data: {
//             ...defaultForm
//         },
//         error: {
//             ...defaultForm
//         },
//         isSubmitting: true,
//         isValidForm: false,
//     })

//     const [error, setError] = useState({})
//     console.log(error)

//     // useEffect(function () {
//     //     // console.log(formData.data)
//     // }, [formData])

//     const handleChange = e => {
//         const { name, value } = e.target
//         setFormData({
//             data: {
//                 ...formData,
//                 [name]: value
//             }
//         })
//         // console.log(formData)
//     }
//     const formValidation = e => {
//         var errros = {}
//         if (!formData.data.username.match([/^[a-z]/])) {
//             errros.username = "Username must start with alphabet"
//             return false
//         }

//         if (!formData.data.email.match([/^[a-z]/])) {
//             errros.email = "email must start with alphabet"
//             return false
//         }

//         if (!formData.data.password.match([/^[a-z]/])) {
//             errros.password = "Username must start with alphabet"
//             return false
//         }

//         setError(errors)
//         return true;

//     }

//     const handleSubmit = e => {
//         e.preventDefault()
//         if (formValidation()) {
//             return true
//         }

//     }


//     // const [username, setUsername] = useState('')
//     // const [password, setPassword] = useState('')
//     // const [dob, setDob] = useState('')
//     // const [email, setEmail] = useState('')
//     // const [contact, setContact] = useState('')
//     // const [gender, setGender] = useState('')
//     return (
//         <div>
//             <form className="my-5" onSubmit={handleSubmit} >
//                 <label className="fs-4">username</label>
//                 <input type="text" name="username" onChange={handleChange} className="form-control form-control-lg mb-3" />
//                 <p className="text-danger"></p>

//                 <label className="fs-4">email</label>
//                 <input type="text" name="email" className="form-control form-control-lg mb-3" onChange={handleChange} />
//                 <p></p>

//                 <label className="fs-4">password</label>
//                 <input type="text" name="password" className="form-control form-control-lg mb-3" onChange={handleChange} />
//                 <p className="text-danger"></p>

//                 <label className="fs-4">confirmPassword</label>
//                 <input type="text" name="confirmPassword" className="form-control form-control-lg mb-3" onChange={handleChange} />
//                 <p className="text-danger"></p>

//                 <label className="fs-4">address</label>
//                 <input type="text" name="address" className="form-control form-control-lg mb-3" onChange={handleChange} />

//                 <label className="fs-4">dob</label>
//                 <input type="text" name="dob" className="form-control form-control-lg mb-3" onChange={handleChange} />

//                 <label className="fs-4">phone</label>
//                 <input type="text" name="phone" className="form-control form-control-lg mb-3" onChange={handleChange} />
//                 <Button
//                     // isSubmitting={!formData.isSubmitting}
//                     enabledLabel="Signin"
//                     disabledLabel="SigningIn..."
//                 // isValidForm={!formData.isValidForm}
//                 ></Button>
//             </form>
//         </div>
//     )
// }


export const Reg = () => {
    // Initialize form state variables and errors
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [formErrors, setFormErrors] = useState({});

    // Function to handle form input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Function to validate form data
    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!formData.username.trim()) {
            errors.username = 'Username is required';
            isValid = false;
        }

        if (!formData.email.trim()) {
            errors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Invalid email address';
            isValid = false;
        }

        if (!formData.password.trim()) {
            errors.password = 'Password is required';
            isValid = false;
        } else if (formData.password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
            isValid = false;
        }

        if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        if (validateForm()) {
            // Send formData to the server (e.g., using fetch or Axios)
            console.log('Form data to be sent:', formData);
            // Reset form after successful submission (if needed)
            setFormData({
                username: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
            setFormErrors({});
        }
    };

    return (
        <div className='login'>
            <h2 style={{ textAlign: "center" }}>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                    />
                    {formErrors.username && <span>{formErrors.username}</span>}
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    {formErrors.email && <span>{formErrors.email}</span>}
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    {formErrors.password && <span>{formErrors.password}</span>}
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                    />
                    {formErrors.confirmPassword && (
                        <span>{formErrors.confirmPassword}</span>
                    )}
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};