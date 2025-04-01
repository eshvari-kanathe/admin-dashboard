import React from "react";
import logo from "../Assets/img/logo-ct-dark.png"
import { Link, useNavigate } from "react-router-dom";
import List from "../ReusableComponents/List";

const
    Sidebar = () => {
        const navigate = useNavigate()
        return (
            <aside
                className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 "
                id="sidenav-main">
                <div className="sidenav-header">
                    <i
                        className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
                        aria-hidden="true"
                        id="iconSidenav"
                    />
                    <a
                        className="navbar-brand m-0"
                        href=" https://demos.creative-tim.com/soft-ui-dashboard/pages/dashboard.html "
                        target="_blank"
                    >

                        <img
                            src={logo}
                            className="navbar-brand-img h-100"
                            alt="main_logo"
                        />
                        <span className="ms-1 font-weight-bold">Soft UI Dashboard 3</span>
                    </a>
                </div>
                <hr className="horizontal dark mt-0" />
                <div
                    className="collapse navbar-collapse  w-auto "
                    id="sidenav-collapse-main"
                >
                    <ul className="navbar-nav">



                        <List
                            title="Dashboard"
                            onClick={() => navigate("/dashboard")}
                            listClass="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center"
                        />
                        <List
                            title="Tables"
                            onClick={() => navigate("/tables")}
                            listClass="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center"
                        />
                        <List
                            title="Billing"
                            onClick={() => navigate("/billing")}
                            listClass="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center"
                        />

                     
                   
                        <List
                            title="Sign up"
                            onClick={() => navigate("/signup")}
                            listClass="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center"
                        />

    <List
                            title="Sign in"
                            onClick={() => navigate("/signin")}
                            listClass="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center"
                        /> 


                    </ul>
                </div>
                <div className="sidenav-footer mx-3 ">
                    <div
                        className="card card-background shadow-none card-background-mask-secondary"
                        id="sidenavCard"
                    >
                        <div
                            className="full-background"
                            style={{
                                backgroundImage:
                                    'url("../assets/img/curved-images/white-curved.jpg")'
                            }}
                        />
                        <div className="card-body text-start p-3 w-100">
                            <div className="icon icon-shape icon-sm bg-white shadow text-center mb-3 d-flex align-items-center justify-content-center border-radius-md">
                                <i
                                    className="ni ni-diamond text-dark text-gradient text-lg top-0"
                                    aria-hidden="true"
                                    id="sidenavCardIcon"
                                />
                            </div>
                            <div className="docs-info">
                                <h6 className="text-white up mb-0">Need help?</h6>
                                <p className="text-xs font-weight-bold">Please check our docs</p>
                                <Link to="/dashboard" target="_blank"
                                    className="btn btn-white btn-sm w-100 mb-0"
                                >
                                    Documentation
                                </Link>
                            </div>
                        </div>
                    </div>
                    <a
                        className="btn btn-primary mt-3 w-100"
                        href="https://www.creative-tim.com/product/soft-ui-dashboard-pro?ref=sidebarfree"
                    >
                        Upgrade to pro
                    </a>
                </div>
            </aside>
        )

    };

export default Sidebar;

