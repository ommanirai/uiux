import React from "react";
import './Navbar.component.css'
import { Link } from "react-router-dom";

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
            <li>
                <Link to={'/'} className="text-decoration-none text-dark">Home</Link>
            </li>
            <li><Link to={'/about'} className="text-decoration-none text-dark">About</Link></li>
            <li><Link to={'/contact'} className="text-decoration-none text-dark">Contact</Link></li>
            <li><Link to={'/login'} className="text-decoration-none text-dark">Login</Link></li>
            <li><Link to={'/register'} className="text-decoration-none text-dark">Register</Link></li>
        </ul>
    return (
        <>
            {
                header
            }
        </>
    )
}