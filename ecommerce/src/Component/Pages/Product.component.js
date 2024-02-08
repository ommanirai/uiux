import React from 'react'
import './Product.component.css'

const Product = () => {
    return (
        <>
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 mx-3 mb-5">
                <div className="col my-5">
                    <div className="card shadow-lg">
                        <div className="image-block">
                            <img src="assets/images/shoes1.jpg" className="card-img-top image-zoom" alt="..." height="300px"
                                width="300px" />
                        </div>
                        <div className="card-body">
                            <h1 className="card-title">Jordan</h1>
                            <h5>Rs. 4000</h5>
                            <p className="card-text" style={{ height: "80px;" }}>This is a longer card with supporting text below as a
                                natural lead-in to
                                additional content. This content is a little bit longer.</p>
                            <div className="text-center">
                                <div className="btn btn-warning">Add to Cart</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product