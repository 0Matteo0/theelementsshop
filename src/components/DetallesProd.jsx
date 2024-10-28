import React from 'react';
import "../styles/styles.css"

const ProductCard = () => {
    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">Rounded Chair</h3>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-6">
                            <div className="white-box text-center">
                                <img
                                    src="https://www.bootdey.com/image/430x600/00CED1/000000"
                                    alt="Rounded Chair"
                                    className="img-responsive"
                                />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-6">
                            <h4 className="box-title mt-5">Product description</h4>
                            <p>
                                Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. But the majority have suffered alteration in some form, by injected humour.
                            </p>
                            <h2 className="mt-5">
                                $153<small className="text-success">(36% off)</small>
                            </h2>
                            <button
                                className="btn btn-dark btn-rounded mr-1"
                                data-toggle="tooltip"
                                title="Add to cart"
                            >
                                <i className="fa fa-shopping-cart"></i>
                            </button>
                            <button className="btn btn-primary btn-rounded">Buy Now</button>

                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default ProductCard;
