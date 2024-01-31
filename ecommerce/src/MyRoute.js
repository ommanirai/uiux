import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Pages/Home.component";
import Navbar from "./Component/Common/Navbar.component";
import Footer from "./Component/Common/Footer.component";

export const MyRoute = (props) => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </Router>
    )
}