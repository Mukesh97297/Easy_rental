import React from 'react';

function Footer() {
    return (
        <div style={{backgroundColor:"#1c1c1c"}}>
            <div className="footer"style={{borderTop:"2px solid gray"}}>
                <div className="container text-white">
                    <div className="row row-cols-sm-4">
                        <div className="col-lg-3 py-3">
                            <div>
                                <h1><strong>Easy Rentals</strong></h1>
                            </div>
                            <div className="text-secondary">
                                <p>© 2020 Easy Rentals, LLC. All rights reserved.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 py-5">
                            <ul>
                                <h5>Navigation</h5>
                                <a href="/" className="text-secondary">All Bots</a><br/>
                                <a href="/" className="text-secondary">How It Works</a><br/>
                                <a href="/" className="text-secondary">Calender</a><br/>
                            </ul>
                        </div>
                        <div className="col-lg-3 py-5">
                            <ul>
                                <h5>Legel</h5>
                                <a href="/" className="text-secondary">Term Of Service</a><br/>
                                <a href="/" className="text-secondary">Privacy Policy</a><br/>
                                <a href="/" className="text-secondary">Return Policy</a><br/>
                            </ul>
                        </div>
                        <div className=" col-lg-3 py-5">
                            <ul>
                                <h5>Social</h5>
                                <a href="/" className="text-secondary">Join Our Discord</a><br/>
                                <a href="/" className="text-secondary"><i className="fa fa-twitter"></i> Follow Our Twitter</a><br/>
                                <a href="/" className="text-secondary"><i className="fa fa-instagram"></i> Follow Us To Instagram</a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;
