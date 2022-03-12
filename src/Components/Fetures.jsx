import React from 'react';
import cyber from '../images/cyber.svg'
import bot2 from  '../images/bot-2.png'

function Fetures() {
    return (
        <div className="features py-5"style={{backgroundColor:"#1c1c1c"}}>
            <div className="container py-5 text-white">
                <div><li style={{ fontSize: "30px" }}><strong>Features Bots</strong></li></div>
                <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 row-cols-lg-4 text-center py-5">
                    <div className="col mb-5">
                        <div className="card bg-dark">
                            <div className="text-center">
                                <img src={cyber} height="195" width="100"  alt=''/>
                            </div>
                            <div>
                                <a href="/" className="btn btn-secondary w-50" style={{ borderBottom: "5px solid limegreen" }} type="button">CyberAIo</a>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card bg-dark">
                            <div className="text-center py-5">
                                <img src={bot2} height="100" width="100" alt=''/>
                            </div>
                            <div className="mb-0">
                                <a href="/" className="btn btn-secondary w-50" style={{ borderBottom: "5px solid dodgerblue" }} type="button">SoloAIo</a>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card bg-dark">
                            <div className="text-center">
                                <img src={cyber} height="195" width="100" alt=''/>
                            </div>
                            <div className="mb-0">
                                <a href="/" className="btn btn-secondary w-50" style={{ borderBottom: "5px solid limegreen" }} type="button">CyberAIo</a>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card bg-dark">
                            <div className="text-center py-5">
                                <img src={bot2} height="100" width="100" alt='' />
                            </div>
                            <div className="mb-0">
                                <a href="/" className="btn btn-secondary w-50" style={{ borderBottom: "5px solid dodgerblue" }} type="button">SoloAIo</a>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card bg-dark">
                            <div className="text-center">
                                <img src={cyber} height="195" width="100" alt=''/>
                            </div>
                            <div className="mb-0">
                                <a href="/" className="btn btn-secondary w-50" style={{ borderBottom: "5px solid limegreen" }} type="button">CyberAIo</a>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card bg-dark">
                            <div className="text-center py-5">
                                <img src={bot2} height="100" width="100" alt=''/>
                            </div>
                            <div className="mb-0">
                                <a href="/" className="btn btn-secondary w-50" style={{ borderBottom: "5px solid dodgerblue" }} type="button">SoloAIo</a>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card bg-dark">
                            <div className="text-center">
                                <img src={cyber} height="195" width="100" alt='' />
                            </div>
                            <div className="mb-0">
                                <a href="/" className="btn btn-secondary  w-50" style={{ borderBottom: "5px solid limegreen" }} type="button">CyberAIo</a>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card bg-dark">
                            <div className="text-center py-5">
                                <img src={bot2} height="100" width="100" alt='' />
                            </div>
                            <div className="mb-0">
                                <a href="/" className="btn btn-secondary w-50" style={{ borderBottom: "5px solid dodgerblue" }} type="button">SoloAIo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <a href="/" className="btn btn-primary btn-block btn-lg" type="button">+ View All Bots</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
 export default Fetures;
