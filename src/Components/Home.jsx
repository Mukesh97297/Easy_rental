import React from 'react';
import easyrental from '../images/easy_rental_fig.svg';

function Home() {
    return (
        <div className="main py-5" >
            <div className="container py-5">
                <div className="row mb-5 align-item-center">
                    <div className="col-md-6 py-5">
                        <div>
                            <h1 style={{ color: '#836fff', fontSize: "55px", fontWeight: "900px" }}><strong>Easy Rentals</strong></h1>
                        </div>
                        <div>
                            <p style={{ fontSize: "25px", color: "#836fff" }}>Renting <strong style={{color:"white"}}>Sneaker Bots</strong> Made Easy</p>
                        </div>
                        <div>
                            <a href="/" className="btn btn-lg w-50" role="button" style={{ backgroundColor: "#836fff", fontSize: "10px" }}>Start Rating Now</a>
                        </div>
                    </div>
                    <div className="col-md-6" style={{ width: "100%", maxWidth: "460px", marginLeft: "auto", display: "block" }}>
                        <img src={easyrental} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    )
    }
export default Home;
