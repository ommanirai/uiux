import React from "react";
import './Navbar.component.css'

export const Navbar = (props) => {
    // console.log(props)
    // ui logic goes here
    var header = props.isLoggedIn
        ? <ul>
            <li>Home</li>
            <li>Product</li>
            <li>Gallery</li>
            <li>Logout</li>
        </ul>
        : <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Login</li>
            <li>Register</li>
        </ul>
    return (
        <>
            {
                header
            }
        </>
    )
}