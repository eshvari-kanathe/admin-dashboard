import React from "react";
import Sidebar from "../Components/Sidebar";
import "../Assets/img/apple-icon.png"
import "../Assets/img/favicon.png"
import "../Assets/css/nucleo-icons.css"
import "../Assets/css/nucleo-svg.css"
import "../Assets/css/soft-ui-dashboard.css"
import curved14 from "../Assets/img/curved-images/curved14.jpg"
import mastercard from "../Assets/img/logos/mastercard.png"
import visa from "../Assets/img/logos/visa.png"
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Button from "../ReusableComponents/Button";
import BillingCard from "../ReusableComponents/BillingCard";

const Billing = () => {
  const billingData = [
    {
      name: "Oliver Liam",
      company: "Viking Burrito",
      email: "oliver@burrito.com",
      vatNumber: "FRB1235476",
    },
    {
      name: "Lucas Harper",
      company: "Stone Tech Zone",
      email: "lucas@stone-tech.com",
      vatNumber: "FRB1235476",
    },
    {
      name: "Ethan James",
      company: "Fiber Notion",
      email: "ethan@fiber.com",
      vatNumber: "FRB1235476",
    },
  ];
  const handleDelete = (name) => {
    alert(`Delete action triggered for ${name}`);
  };

  const handleEdit = (name) => {
    alert(`Edit action triggered for ${name}`);
  };
  return (
    <>
      <Sidebar />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        {/* Navbar */}
        <Navbar pageTitle="Billing" />
        {/* End Navbar */}

        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-xl-6 mb-xl-0 mb-4">
                  <div className="card bg-transparent shadow-xl">
                    <div
                      className="overflow-hidden position-relative border-radius-xl"
                      style={{ backgroundImage: `url(${curved14})` }}
                    >
                      <span className="mask bg-gradient-dark" />
                      <div className="card-body position-relative z-index-1 p-3">
                        <i className="fas fa-wifi text-white p-2" />
                        <h5 className="text-white mt-4 mb-5 pb-2">
                          4562&nbsp;&nbsp;&nbsp;1122&nbsp;&nbsp;&nbsp;4594&nbsp;&nbsp;&nbsp;7852
                        </h5>
                        <div className="d-flex">
                          <div className="d-flex">
                            <div className="me-4">
                              <p className="text-white text-sm opacity-8 mb-0">
                                Card Holder
                              </p>
                              <h6 className="text-white mb-0">Jack Peterson</h6>
                            </div>
                            <div>
                              <p className="text-white text-sm opacity-8 mb-0">
                                Expires
                              </p>
                              <h6 className="text-white mb-0">11/22</h6>
                            </div>
                          </div>
                          <div className="ms-auto w-20 d-flex align-items-end justify-content-end">
                            <img
                              className="w-60 mt-2"
                              src={mastercard}
                              alt="logo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="card">
                        <div className="card-header mx-4 p-3 text-center">
                          <div className="icon icon-shape icon-lg bg-primary shadow text-center border-radius-lg">
                            <i className="fas fa-landmark opacity-10" />
                          </div>
                        </div>
                        <div className="card-body pt-0 p-3 text-center">
                          <h6 className="text-center mb-0">Salary</h6>
                          <span className="text-xs">Belong Interactive</span>
                          <hr className="horizontal dark my-3" />
                          <h5 className="mb-0">+$2000</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mt-md-0 mt-4">
                      <div className="card">
                        <div className="card-header mx-4 p-3 text-center">
                          <div className="icon icon-shape icon-lg bg-primary shadow text-center border-radius-lg">
                            <i className="fab fa-paypal opacity-10" />
                          </div>
                        </div>
                        <div className="card-body pt-0 p-3 text-center">
                          <h6 className="text-center mb-0">Paypal</h6>
                          <span className="text-xs">Freelance Payment</span>
                          <hr className="horizontal dark my-3" />
                          <h5 className="mb-0">$455.00</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mb-lg-0 mb-4">
                  <div className="card mt-4">
                    <div className="card-header pb-0 p-3">
                      <div className="row">
                        <div className="col-6 d-flex align-items-center">
                          <h6 className="mb-0">Payment Method</h6>
                        </div>
                        <div className="col-6 text-end">
                          <a
                            className="btn bg-gradient-dark mb-0"
                            href="javascript:;"
                          >
                            <i className="fas fa-plus" />
                            &nbsp;&nbsp;Add New Card
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body p-3">
                      <div className="row">
                        <div className="col-md-6 mb-md-0 mb-4">
                          <div className="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row">
                            <img
                              className="w-10 me-3 mb-0"
                              src={mastercard}
                              alt="logo"
                            />
                            <h6 className="mb-0">
                              ****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;7852
                            </h6>
                            <i
                              className="fas fa-pencil-alt ms-auto text-dark cursor-pointer"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Edit Card"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row">
                            <img
                              className="w-10 me-3 mb-0"
                              src={visa}
                              alt="logo"
                            />
                            <h6 className="mb-0">
                              ****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;5248
                            </h6>
                            <i
                              className="fas fa-pencil-alt ms-auto text-dark cursor-pointer"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Edit Card"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card h-100">
                <div className="card-header pb-0 p-3">
                  <div className="row">
                    <div className="col-6 d-flex align-items-center">
                      <h6 className="mb-0">Invoices</h6>
                    </div>
                    <div className="col-6 text-end">
                      <Button
                        label="View All"
                        className="btn btn-outline-primary btn-sm mb-"
                      />
                    </div>
                  </div>
                </div>
                <div className="card-body p-3 pb-0">
                  <ul className="list-group">
                    <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                      <div className="d-flex flex-column">
                        <h6 className="mb-1 text-dark font-weight-bold text-sm">
                          March, 01, 2020
                        </h6>
                        <span className="text-xs">#MS-415646</span>
                      </div>
                      <div className="d-flex align-items-center text-sm">
                        $180
                        <Button
                          icon="file-pdf"
                          label="PDF"
                          className="btn-link text-dark text-sm mb-0 px-0 ms-4"

                        />

                      </div>
                    </li>
                    <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                      <div className="d-flex flex-column">
                        <h6 className="text-dark mb-1 font-weight-bold text-sm">
                          February, 10, 2021
                        </h6>
                        <span className="text-xs">#RV-126749</span>
                      </div>
                      <div className="d-flex align-items-center text-sm">
                        $250
                   
                        <Button
                          icon="file-pdf"
                          label="PDF"
                          className="btn-link text-dark text-sm mb-0 px-0 ms-4"

                        />
                      </div>
                    </li>
                    <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                      <div className="d-flex flex-column">
                        <h6 className="text-dark mb-1 font-weight-bold text-sm">
                          April, 05, 2020
                        </h6>
                        <span className="text-xs">#FB-212562</span>
                      </div>
                      <div className="d-flex align-items-center text-sm">
                        $560
                        <Button
                          icon="file-pdf"
                          label="PDF"
                          className="btn-link text-dark text-sm mb-0 px-0 ms-4"

                        />
                      </div>
                    </li>
                    <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                      <div className="d-flex flex-column">
                        <h6 className="text-dark mb-1 font-weight-bold text-sm">
                          June, 25, 2019
                        </h6>
                        <span className="text-xs">#QW-103578</span>
                      </div>
                      <div className="d-flex align-items-center text-sm">
                        $120
                        <Button
                          icon="file-pdf"
                          label="PDF"
                          className="btn-link text-dark text-sm mb-0 px-0 ms-4"

                        />
                      </div>
                    </li>
                    <li className="list-group-item border-0 d-flex justify-content-between ps-0 border-radius-lg">
                      <div className="d-flex flex-column">
                        <h6 className="text-dark mb-1 font-weight-bold text-sm">
                          March, 01, 2019
                        </h6>
                        <span className="text-xs">#AR-803481</span>
                      </div>
                      <div className="d-flex align-items-center text-sm">
                        $300
                        <Button
                          icon="file-pdf"
                          label="PDF"
                          className="btn-link text-dark text-sm mb-0 px-0 ms-4"

                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
          
            <div className="col-md-7 mt-4">
              <div className="card">
                <div className="card-header pb-0 px-3">
                  <h6 className="mb-0">Billing Information</h6>
                </div>
                <div className="card-body pt-4 p-3">
                  <ul className="list-group">
                    {billingData.map((item, index) => (
                      <BillingCard
                        key={index}
                        name={item.name}
                        company={item.company}
                        email={item.email}
                        vatNumber={item.vatNumber}
                        onDelete={() => handleDelete(item.name)}
                        onEdit={() => handleEdit(item.name)}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-5 mt-4">
              <div className="card h-100 mb-4">
                <div className="card-header pb-0 px-3">
                  <div className="row">
                    <div className="col-md-6">
                      <h6 className="mb-0">Your Transaction's</h6>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end align-items-center">
                      <i className="far fa-calendar-alt me-2" />
                      <small>23 - 30 March 2020</small>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-4 p-3">
                  <h6 className="text-uppercase text-body text-xs font-weight-bolder mb-3">
                    Newest
                  </h6>
                  <ul className="list-group">
                    <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                      <div className="d-flex align-items-center">
                        <Button
                          icon="arrow-down"
                          className="btn-icon-only btn-rounded btn-outline-danger mb-0 me-3 btn-sm d-flex align-items-center justify-content-center"

                        />
                        <div className="d-flex flex-column">
                          <h6 className="mb-1 text-dark text-sm">Netflix</h6>
                          <span className="text-xs">
                            27 March 2020, at 12:30 PM
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center text-danger text-gradient text-sm font-weight-bold">
                        - $ 2,500
                      </div>
                    </li>
                    <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                      <div className="d-flex align-items-center">

                        <Button
                          icon="arrow-up" // Icon for the button
                          className="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 btn-sm d-flex align-items-center justify-content-center"
                        />

                        <div className="d-flex flex-column">
                          <h6 className="mb-1 text-dark text-sm">Apple</h6>
                          <span className="text-xs">
                            27 March 2020, at 04:30 AM
                          </span>
                        </div>
                      </div>

                      <div className="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
                        + $ 2,000
                      </div>
                    </li>
                  </ul>
                  <h6 className="text-uppercase text-body text-xs font-weight-bolder my-3">
                    Yesterday
                  </h6>
                  <ul className="list-group">
                    <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                      <div className="d-flex align-items-center">

                        <Button
                          icon="arrow-up" // Icon for the button
                          className="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 btn-sm d-flex align-items-center justify-content-center"
                        />

                        <div className="d-flex flex-column">
                          <h6 className="mb-1 text-dark text-sm">Stripe</h6>
                          <span className="text-xs">
                            26 March 2020, at 13:45 PM
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
                        + $ 750
                      </div>
                    </li>
                    <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                      <div className="d-flex align-items-center">
                        <Button
                          icon="arrow-up"
                          className="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 btn-sm d-flex align-items-center justify-content-center"
                        />

                        <div className="d-flex flex-column">
                          <h6 className="mb-1 text-dark text-sm">HubSpot</h6>
                          <span className="text-xs">
                            26 March 2020, at 12:30 PM
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
                        + $ 1,000
                      </div>
                    </li>
                    <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                      <div className="d-flex align-items-center">
                        {/* <button className="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 btn-sm d-flex align-items-center justify-content-center">
                          <i className="fas fa-arrow-up" />
                        </button> */}
                        <Button
                          icon="arrow-up"
                          className="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 btn-sm d-flex align-items-center justify-content-center"
                        />
                        <div className="d-flex flex-column">
                          <h6 className="mb-1 text-dark text-sm">Creative Tim</h6>
                          <span className="text-xs">
                            26 March 2020, at 08:30 AM
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
                        + $ 2,500
                      </div>
                    </li>
                    <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                      <div className="d-flex align-items-center">
                        {/* <button className="btn btn-icon-only btn-rounded btn-outline-dark mb-0 me-3 btn-sm d-flex align-items-center justify-content-center">
                          <i className="fas fa-exclamation" />
                        </button> */}
                        <Button
                          icon="exclamation"
                          className="btn btn-icon-only btn-rounded btn-outline-dark mb-0 me-3 btn-sm d-flex align-items-center justify-content-center"
                        />
                        <div className="d-flex flex-column">
                          <h6 className="mb-1 text-dark text-sm">Webflow</h6>
                          <span className="text-xs">
                            26 March 2020, at 05:00 AM
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center text-dark text-sm font-weight-bold">
                        Pending
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </main>
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
              {/* <button className="btn btn-link text-dark p-0 fixed-plugin-close-button">
                <i className="fa fa-close" />
              </button> */}
              <Button
                icon="close"
                className="btn btn-link text-dark p-0 fixed-plugin-close-button"
              />

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
  )
};

export default Billing;