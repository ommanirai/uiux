import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./component/Auth/Login/Login.component";
import { Register } from "./component/Auth/Register/Register.component";

const Home = (props) => {
    return <h1>Home Page</h1>
}

const About = (props) => {
    return <h1>About Page</h1>
}

const Contact = (props) => {
    return <h1>Contact Page</h1>
}

export const MyRoute = (props) => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} ></Route>
                    <Route path="/register" element={<Register />} ></Route>
                </Routes>
            </Router>
        </div>
    )
}