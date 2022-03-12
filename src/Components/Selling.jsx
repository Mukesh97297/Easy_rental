import React from 'react';
import envelope from '../images/envelope.svg';
import person from '../images/person.svg';
import money from '../images/money.svg'
function Selling() {
    return (
        <div style={{ backgroundColor: "#1c1c1c" }}>
            <div className="container text-white" >
                <div className="text-center"><h1><strong>Selling Rental</strong></h1></div>
                <div className="row row-cols-1 row-cols-md-2  row-cols-lg-3 text-center py-5">
                    <div className="col mb-5">
                        <div className="card bg-dark text-center">
                            <div className="container">
                                <div>
                                    <img src={envelope} height="150" width="100" alt='' />
                                </div>
                                <div>
                                    <h4>Cashout</h4>
                                </div>
                                <div className="text-muted">
                                    <p style={{ fontSize: "15px" }}>Using our dashboard, create lisngs with
                                        custom prices, license keys, download links,
                                        guides, and meframes all with a couple clicks.
                                    </p>
                                </div>
                                <div className="mb-0">
                                    <a href="/" className="btn btn-secondary w-25" type="button">1</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card text-center bg-dark">
                            <div className="container">
                                <div>
                                     <img src={person} height="154" width="100" alt='' />
                                </div>
                                <div>
                                    <h4>Sit Back And Relax</h4>
                                </div>
                                <div className="text-muted">
                                    <p style={{ fontSize: "15px" }}>Once your bot is listed, we can take it from
                                        there. Using our millions in traffic, we connect
                                        you the seller, with new buyers every hour.
                                    </p>
                                </div>
                                <div className="mb-0">
                                    <a href="/" className="btn btn-secondary w-25" type="button">2</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card text-center bg-dark ">
                            <div className="container">
                                <div>
                                    <img src={money} height="154" width="100" alt=''/>
                                </div>
                                <div>
                                    <h4>Create Listing</h4>
                                </div>
                                <div className="text-muted">
                                    <p style={{ fontSize: "15px" }}>That's it! We now send your payout straight to
                                        your back account.
                                    </p>
                                </div>
                                <div className="mb-0 pt-3">
                                    <a href="/" className="btn btn-secondary w-25" type="button">3</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Selling;
