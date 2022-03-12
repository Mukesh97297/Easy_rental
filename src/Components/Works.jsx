import React from 'react';
import search from '../images/search.svg';
import ccard from '../images/c-card.svg';
import key from '../images/key.svg'

function Works() {
    return (

        <div className="works py-5">
            <div className="container text-white py-5">
                <div>
                    <li style={{ fontSize: "30px" }}><strong>How It Works</strong></li>
                </div>
                <div className="text-center py-3">
                    <h1><strong>Purchasing Rental</strong></h1>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 py-5">
                    <div className="col mb-5">
                        <div className="card bg-dark text-center">
                            <div className="container">
                                <div>
                                    <img src={search} width="100" height="148" alt='' />
                                </div>
                                <div>
                                    <h4>Search Listing</h4>
                                </div>
                                <div className="text-muted py-2">
                                    <p style={{ fontSize: "15px" }}>We have plenty of listings to search through and offer safe, trustworthy transactions for every customer. Get your bot and setup for a drop in an instant.
                                    </p>
                                </div>
                                <div className="mb-0 pt-3">
                                    <a href="/" className="btn btn-secondary w-25" style={{ fontSize: "20px" }} type="button">1</a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card bg-dark text-center">
                            <div className="container">
                                <div>
                                    <img src={ccard} width="90" height="129"  alt='' />
                                </div>
                                <div className="py-3">
                                    <h4>Purchasing Listing</h4>
                                </div>
                                <div className="text-muted">
                                    <p style={{ fontSize: "15px" }}>With the click of a buon, purchase rentals through our website and get access to any bot. Don't be afraid of scams or tricks, Easy Rentals vets every key we sell to make sure it is up to our standard.</p>
                                </div>
                                <div className="mb-0">
                                    <a href="/" className="btn btn-secondary w-25" style={{ fontSize: "20px" }} type="button">2</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card bg-dark text-center">
                            <div className="container">
                                <div>
                                    <img src={key} width="100" height="149" alt='' />
                                </div>
                                <div>
                                    <h4>Search Listing</h4>
                                </div>
                                <div className="text-muted py-2">
                                    <p style={{ fontSize: "15px" }}>We have plenty of listings to search through and offer safe, trustworthy transactions for every customer. Get your bot and setup for a drop in an instant.
                                    </p>
                                </div>
                                <div className="mb-0 pt-4">
                                    <a href="/" className="btn btn-secondary w-25" style={{ fontSize: "20px", marginBottom: "0", paddingBottom: "0" }} type="button">3</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Works
