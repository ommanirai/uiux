import React from 'react'

const Navbar = () => {
    return (
        <div>
            {/* // <!-- navbar start --> */}
            <div class="row bg-info p-4">
                <div class="col-md-3 text-center fs-2">
                    <a class="navbar-brand" href="index.html">ourStore</a>
                </div>
                <div class="col-md-6">
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-warning" type="submit">Search</button>
                    </form>
                </div>
                <div class="col-md-3 fs-3 d-flex justify-content-evenly">
                    <a href="login.html" class="text-dark"><i class="bi bi-box-arrow-in-right"></i></a>
                    <a href="register.html" class="text-dark"><i class="bi bi-person-add"></i></a>
                    <a href="cart.html" class="text-dark"><i class="bi bi-cart"></i></a>
                </div>
            </div>
            <nav class="navbar navbar-expand-lg bg-secondary">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-evenly">
                            <li class="nav-item">
                                <a class="nav-link active text-light" aria-current="page" href="index.html">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active text-light" aria-current="page" href="product.html">Product</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active text-light" aria-current="page" href="blog.html">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active text-light" aria-current="page" href="about.html">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active text-light" aria-current="page" href="contact.html">Contact</a>
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



