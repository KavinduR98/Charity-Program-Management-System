import React from 'react';
import home from "../assets/homeView.jpg";

const HomeView = () => {
    return (
        <div className="col-lg-12 col-md-12 col-12 col-sm-12">
            <div className="image">
                <img src={home} alt="homeImage" style={{width:"100%", maxHeight:"700px" , opacity:"0.6", position:"absolute", top:"0",bottom:"0",left:"0",right:"0"}}/>
            </div>
            <div className="row" style={{ marginTop: "250px" }}>
                <div className="col-lg-12 col-md-12 col-12 col-sm-12">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-3 col-sm-3"></div>
                        <div className="col-lg-6 col-md-6 col-6 col-sm-6">
                            <div className="row" style={{ marginBottom: "20px" }}>
                                <div className="col-lg-6 col-md-6 col-6 col-sm-6">
                                    <a href='/all_donors'>
                                        <div className="card" style={{ height: "7rem", borderRadius:"25px" }}>
                                            <div className="card-body">
                                                <p className="card-text" style={{ fontSize: "25px" }}>Donor Management</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-6 col-md-6 col-6 col-sm-6">
                                    <a href='/all_vols'>
                                        <div className="card" style={{ height: "7rem", borderRadius:"25px" }}>
                                            <div className="card-body">
                                                <p className="card-text" style={{ fontSize: "25px" }}>Volunteer Management</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-6 col-sm-6">
                                    <div className="card" style={{  borderRadius:"25px" }}>
                                        <a href='/all_donations'>
                                            <div className="card-body" style={{ height: "7rem", borderRadius:"25px" }}>
                                                <p className="card-text" style={{ fontSize: "25px" }}>Donations Management</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-6 col-sm-6">
                                    <a href='/all_benes'>
                                        <div className="card" style={{  borderRadius:"25px" }}>
                                            <div className="card-body" style={{ height: "7rem"}}>
                                                <p className="card-text" style={{ fontSize: "25px" }}>Beneficiary Management</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-3 col-sm-3"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeView;


