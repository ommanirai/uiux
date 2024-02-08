import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            {/* // <!-- navbar start --> */}
            <div className="row bg-info p-4">
                <div className="col-md-3 text-center fs-2">
                    <Link className="navbar-brand" to="index.html">ourStore</Link>
                </div>
                <div className="col-md-6">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-warning" type="submit">Search</button>
                    </form>
                </div>
                <div className="col-md-3 fs-3 d-flex justify-content-evenly">
                    <Link to="login.html" className="text-dark"><i className="bi bi-box-arrow-in-right"></i></Link>
                    <Link to="register.html" className="text-dark"><i className="bi bi-person-add"></i></Link>
                    <Link to="cart.html" className="text-dark"><i className="bi bi-cart"></i></Link>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg bg-secondary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-evenly">
                            <li className="nav-item">
                                <Link className="nav-link active text-light" aria-current="page" to="index.html">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-light" aria-current="page" to="/product">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-light" aria-current="page" to="blog.html">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-light" aria-current="page" to="about.html">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-light" aria-current="page" to="contact.html">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <!-- navbar end --> */}
        </div>
    )
}

export default Navbar



