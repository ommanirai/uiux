import React from 'react'

const Navbar = () => {
    return (
        <div>
            {/* // <!-- navbar start --> */}
            <div className="row bg-info p-4">
                <div className="col-md-3 text-center fs-2">
                    <a className="navbar-brand" href="index.html">ourStore</a>
                </div>
                <div className="col-md-6">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-warning" type="submit">Search</button>
                    </form>
                </div>
                <div className="col-md-3 fs-3 d-flex justify-content-evenly">
                    <a href="login.html" className="text-dark"><i className="bi bi-box-arrow-in-right"></i></a>
                    <a href="register.html" className="text-dark"><i className="bi bi-person-add"></i></a>
                    <a href="cart.html" className="text-dark"><i className="bi bi-cart"></i></a>
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
                                <a className="nav-link active text-light" aria-current="page" href="index.html">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-light" aria-current="page" href="product.html">Product</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-light" aria-current="page" href="blog.html">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-light" aria-current="page" href="about.html">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-light" aria-current="page" href="contact.html">Contact</a>
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



