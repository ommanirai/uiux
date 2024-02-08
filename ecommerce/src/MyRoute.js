import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Pages/Home.component";
import Navbar from "./Component/Common/Navbar.component";
import Footer from "./Component/Common/Footer.component";
import Count from "./Component/Pages/Count.component";
import Product from "./Component/Pages/Product.component";

export const MyRoute = (props) => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/count" element={<Count />} /> */}
                <Route path="/product" element={<Product/>}/>
            </Routes>
            <Footer />
        </Router>
    )
}