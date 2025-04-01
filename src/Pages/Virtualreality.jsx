import React from "react";
import Sidebar from "../Components/Sidebar";

const Virtualreality = () => {
  return <div>
    <>
      <Sidebar />
      <div
        className="border-radius-xl mt-3 mx-3 position-relative"
        style={{
          backgroundImage: 'url("../assets/img/vr-bg.jpg")',
          backgroundSize: "cover"
        }}
      >
        <main className="main-content mt-1 border-radius-lg">
          <div className="section min-vh-85 position-relative transform-scale-0 transform-scale-md-7">
            <div className="container">
              <div className="row pt-10">
                <div className="col-lg-1 col-md-1 pt-5 pt-lg-0 ms-lg-5 text-center">
                  <a
                    href="javascript:;"
                    className="avatar avatar-md border-0"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title="My Profile"
                  >
                    <img
                      className="border-radius-lg"
                      alt="Image placeholder"
                      src="../assets/img/team-1.jpg"
                    />
                  </a>
                  <button
                    className="btn btn-white border-radius-lg p-2 mt-2"
                    type="button"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title="Home"
                  >
                    <i className="fas fa-home p-2" />
                  </button>
                  <button
                    className="btn btn-white border-radius-lg p-2"
                    type="button"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title="Search"
                  >
                    <i className="fas fa-search p-2" />
                  </button>
                  <button
                    className="btn btn-white border-radius-lg p-2"
                    type="button"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title="Minimize"
                  >
                    <i className="fas fa-ellipsis-h p-2" />
                  </button>
                </div>
                <div className="col-lg-8 col-md-11">
                  <div className="d-flex">
                    <div className="me-auto">
                      <h1 className="display-1 font-weight-bold mt-n4 mb-0">
                        28°C
                      </h1>
                      <h6 className="text-uppercase mb-0 ms-1">Cloudy</h6>
                    </div>
                    <div className="ms-auto">
                      <img
                        className="w-50 float-end mt-lg-n4"
                        src="../assets/img/small-logos/icon-sun-cloud.png"
                        alt="image sun"
                      />
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-lg-4 col-md-4">
                      <div className="card move-on-hover overflow-hidden">
                        <div className="card-body">
                          <div className="d-flex">
                            <h6 className="mb-0 me-3">08:00</h6>
                            <h6 className="mb-0">
                              Synk up with Mark
                              <small className="text-secondary font-weight-normal">
                                Hangouts
                              </small>
                            </h6>
                          </div>
                          <hr className="horizontal dark" />
                          <div className="d-flex">
                            <h6 className="mb-0 me-3">09:30</h6>
                            <h6 className="mb-0">
                              Gym <br />
                              <small className="text-secondary font-weight-normal">
                                World Class
                              </small>
                            </h6>
                          </div>
                          <hr className="horizontal dark" />
                          <div className="d-flex">
                            <h6 className="mb-0 me-3">11:00</h6>
                            <h6 className="mb-0">
                              Design Review
                              <br />
                              <small className="text-secondary font-weight-normal">
                                Zoom
                              </small>
                            </h6>
                          </div>
                        </div>
                        <a
                          href="javascript:;"
                          className="bg-gray-100 w-100 text-center py-1"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Show More"
                        >
                          <i className="fas fa-chevron-down text-primary" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 mt-4 mt-sm-0">
                      <div className="card bg-gradient-dark move-on-hover">
                        <div className="card-body">
                          <div className="d-flex">
                            <h5 className="mb-0 text-white">To Do</h5>
                            <div className="ms-auto">
                              <h1 className="text-white text-end mb-0 mt-n2">7</h1>
                              <p className="text-sm mb-0 text-white">items</p>
                            </div>
                          </div>
                          <p className="text-white mb-0">Shopping</p>
                          <p className="mb-0 text-white">Meeting</p>
                        </div>
                        <a
                          href="javascript:;"
                          className="w-100 text-center py-1"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Show More"
                        >
                          <i className="fas fa-chevron-down text-white" />
                        </a>
                      </div>
                      <div className="card move-on-hover mt-4">
                        <div className="card-body">
                          <div className="d-flex">
                            <p className="mb-0">Emails (21)</p>
                            <a
                              href="javascript:;"
                              className="ms-auto"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Check your emails"
                            >
                              Check
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 mt-4 mt-sm-0">
                      <div className="card card-background card-background-mask-primary move-on-hover align-items-start">
                        <div className="cursor-pointer">
                          <div
                            className="full-background"
                            style={{
                              backgroundImage:
                                'url("../assets/img/curved-images/curved1.jpg")'
                            }}
                          />
                          <div className="card-body">
                            <h5 className="text-white mb-0">Some Kind Of Blues</h5>
                            <p className="text-white text-sm">Deftones</p>
                            <div className="d-flex mt-5">
                              <button
                                className="btn btn-outline-white rounded-circle p-2 mb-0"
                                type="button"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Prev"
                              >
                                <i className="fas fa-backward p-2" />
                              </button>
                              <button
                                className="btn btn-outline-white rounded-circle p-2 mx-2 mb-0"
                                type="button"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Pause"
                              >
                                <i className="fas fa-play p-2" />
                              </button>
                              <button
                                className="btn btn-outline-white rounded-circle p-2 mb-0"
                                type="button"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Next"
                              >
                                <i className="fas fa-forward p-2" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card move-on-hover mt-4">
                        <div className="card-body">
                          <div className="d-flex">
                            <p className="my-auto">Messages</p>
                            <div className="ms-auto">
                              <div className="avatar-group">
                                <a
                                  href="javascript:;"
                                  className="avatar avatar-sm border-0 rounded-circle"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="2 New Messages"
                                >
                                  <img
                                    alt="Image placeholder"
                                    src="../assets/img/team-1.jpg"
                                  />
                                </a>
                                <a
                                  href="javascript:;"
                                  className="avatar avatar-sm border-0 rounded-circle"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="1 New Message"
                                >
                                  <img
                                    alt="Image placeholder"
                                    src="../assets/img/team-2.jpg"
                                  />
                                </a>
                                <a
                                  href="javascript:;"
                                  className="avatar avatar-sm border-0 rounded-circle"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="13 New Messages"
                                >
                                  <img
                                    alt="Image placeholder"
                                    src="../assets/img/team-3.jpg"
                                  />
                                </a>
                                <a
                                  href="javascript:;"
                                  className="avatar avatar-sm border-0 rounded-circle"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="7 New Messages"
                                >
                                  <img
                                    alt="Image placeholder"
                                    src="../assets/img/team-4.jpg"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <footer className="footer pt-3  ">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6 mb-lg-0 mb-4">
              <div className="copyright text-center text-sm text-muted text-lg-start">
                © , made with <i className="fa fa-heart" /> by
                <a
                  href="https://www.creative-tim.com"
                  className="font-weight-bold"
                  target="_blank"
                >
                  Creative Tim
                </a>
                for a better web.
              </div>
            </div>
            <div className="col-lg-6">
              <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                <li className="nav-item">
                  <a
                    href="https://www.creative-tim.com"
                    className="nav-link text-muted"
                    target="_blank"
                  >
                    Creative Tim
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://www.creative-tim.com/presentation"
                    className="nav-link text-muted"
                    target="_blank"
                  >
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://www.creative-tim.com/blog"
                    className="nav-link text-muted"
                    target="_blank"
                  >
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://www.creative-tim.com/license"
                    className="nav-link pe-0 text-muted"
                    target="_blank"
                  >
                    License
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="fixed-plugin">
        <a className="fixed-plugin-button text-dark position-fixed px-3 py-2">
          <i className="fa fa-cog py-2"> </i>
        </a>
        <div className="card shadow-lg ">
          <div className="card-header pb-0 pt-3 ">
            <div className="float-start">
              <h5 className="mt-3 mb-0">Soft UI Configurator</h5>
              <p>See our dashboard options.</p>
            </div>
            <div className="float-end mt-4">
              <button className="btn btn-link text-dark p-0 fixed-plugin-close-button">
                <i className="fa fa-close" />
              </button>
            </div>
            {/* End Toggle Button */}
          </div>
          <hr className="horizontal dark my-1" />
          <div className="card-body pt-sm-3 pt-0">
            {/* Sidebar Backgrounds */}
            <div>
              <h6 className="mb-0">Sidebar Colors</h6>
            </div>
            <a
              href="javascript:void(0)"
              className="switch-trigger background-color"
            >
              <div className="badge-colors my-2 text-start">
                <span
                  className="badge filter bg-primary active"
                  data-color="primary"
                  onclick="sidebarColor(this)"
                />
                <span
                  className="badge filter bg-gradient-dark"
                  data-color="dark"
                  onclick="sidebarColor(this)"
                />
                <span
                  className="badge filter bg-gradient-info"
                  data-color="info"
                  onclick="sidebarColor(this)"
                />
                <span
                  className="badge filter bg-gradient-success"
                  data-color="success"
                  onclick="sidebarColor(this)"
                />
                <span
                  className="badge filter bg-gradient-warning"
                  data-color="warning"
                  onclick="sidebarColor(this)"
                />
                <span
                  className="badge filter bg-gradient-danger"
                  data-color="danger"
                  onclick="sidebarColor(this)"
                />
              </div>
            </a>
            {/* Sidenav Type */}
            <div className="mt-3">
              <h6 className="mb-0">Sidenav Type</h6>
              <p className="text-sm">Choose between 2 different sidenav types.</p>
            </div>
            <div className="d-flex">
              <button
                className="btn btn-primary w-100 px-3 mb-2 active"
                data-class="bg-transparent"
                onclick="sidebarType(this)"
              >
                Transparent
              </button>
              <button
                className="btn btn-primary w-100 px-3 mb-2 ms-2"
                data-class="bg-white"
                onclick="sidebarType(this)"
              >
                White
              </button>
            </div>
            <p className="text-sm d-xl-none d-block mt-2">
              You can change the sidenav type just on desktop view.
            </p>
            {/* Navbar Fixed */}
            <div className="mt-3">
              <h6 className="mb-0">Navbar Fixed</h6>
            </div>
            <div className="form-check form-switch ps-0">
              <input
                className="form-check-input mt-1 ms-auto"
                type="checkbox"
                id="navbarFixed"
                onclick="navbarFixed(this)"
              />
            </div>
            <hr className="horizontal dark my-sm-4" />
            <a
              className="btn bg-gradient-dark w-100"
              href="https://www.creative-tim.com/product/soft-ui-dashboard"
            >
              Free Download
            </a>
            <a
              className="btn btn-outline-dark w-100"
              href="https://www.creative-tim.com/learning-lab/bootstrap/license/soft-ui-dashboard"
            >
              View documentation
            </a>
            <div className="w-100 text-center">
              <a
                className="github-button"
                href="https://github.com/creativetimofficial/soft-ui-dashboard"
                data-icon="octicon-star"
                data-size="large"
                data-show-count="true"
                aria-label="Star creativetimofficial/soft-ui-dashboard on GitHub"
              >
                Star
              </a>
              <h6 className="mt-3">Thank you for sharing!</h6>
              <a
                href="https://twitter.com/intent/tweet?text=Check%20Soft%20UI%20Dashboard%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23bootstrap5&url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fsoft-ui-dashboard"
                className="btn btn-dark mb-0 me-2"
                target="_blank"
              >
                <i className="fab fa-twitter me-1" aria-hidden="true" /> Tweet
              </a>
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/soft-ui-dashboard"
                className="btn btn-dark mb-0 me-2"
                target="_blank"
              >
                <i className="fab fa-facebook-square me-1" aria-hidden="true" />{" "}
                Share
              </a>
            </div>
          </div>
        </div>
      </div>
     
    </>

  </div>;
};

export default Virtualreality;


