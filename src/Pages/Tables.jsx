import React from "react";
import Sidebar from "../Components/Sidebar";
import team2 from "../Assets/img/team-2.jpg"
import team3 from "../Assets/img/team-3.jpg"
import team4 from "../Assets/img/team-4.jpg"
import spotify from "../Assets/img/small-logos/logo-spotify.svg"
import invision from "../Assets/img/small-logos/logo-invision.svg"
import jira from "../Assets/img/small-logos/logo-jira.svg"
import slack from "../Assets/img/small-logos/logo-slack.svg"
import webdev from "../Assets/img/small-logos/logo-webdev.svg"
import xd from "../Assets/img/small-logos/logo-xd.svg"
import AuthorsTable from "../ReusableComponents/Tables/AuthorsTable"
import ProjectsTable from "../ReusableComponents/Tables/ProjectsTable";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Tables = () => {

  const authorsData = [
    {
      name: "John Michael",
      email: "john@creative-tim.com",
      role: "Manager",
      department: "Organization",
      status: "Online",
      employmentDate: "23/04/18",
      image: team2
    },
    {
      name: "Alexa Liras",
      email: "alexa@creative-tim.com",
      role: "Programmer",
      department: "Developer",
      status: "Offline",
      employmentDate: "11/01/19",
      image: team3,
    },
    {
      name: "Laurent  Perrier",
      email: "laurent@creative-tim.com",
      role: "Programmer",
      department: "Developer",
      status: "Online",
      employmentDate: "19/09/17",
      image: team4,
    },
    {
      name: "Michael Levi",
      email: "michael@creative-tim.com",
      role: "Programmer",
      department: "Developer",
      status: "Offline",
      employmentDate: "24/12/08",
      image: team3,
    },
    {
      name: "Richard  Gran",
      email: "richard@creative-tim.com",
      role: "Programmer",
      department: "Developer",
      status: "Online",
      employmentDate: "04/10/21",
      image: team2,
    },
    {
      name: "Miriam  Eric",
      email: "miriam@creative-tim.com",
      role: "Programmer",
      department: "Developer",
      status: "Offline",
      employmentDate: "10/09/20",
      image: team4,
    },

  ];
  const projectsData = [
    { name: 'Spotify', image: spotify, budget: '$2,500', status: 'working', completion: 60 },
    { name: 'Invision', image: invision, budget: '$5,000', status: 'done', completion: 100 },
    { name: 'Jira', image: jira, budget: '$3,400', status: 'canceled', completion: 30 },
    { name: 'Slack', image: slack, budget: '$1,000', status: 'canceled', completion: 0 },
    { name: 'Webdev', image: webdev, budget: '$14,000', status: 'working', completion: 80 },
    { name: 'Adobe XD', image: xd, budget: '$2,300', status: 'done', completion: 100 },
  ];
  return <div>
    <>
      <Sidebar />

      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        {/* Navbar */}
        {/* <nav
          className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
          id="navbarBlur"
          navbar-scroll="true"
        >
          <div className="container-fluid py-1 px-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                <li className="breadcrumb-item text-sm">
                  <a className="opacity-5 text-dark" href="javascript:;">
                    Pages
                  </a>
                </li>
                <li
                  className="breadcrumb-item text-sm text-dark active"
                  aria-current="page"
                >
                  Tables
                </li>
              </ol>
              <h6 className="font-weight-bolder mb-0">Tables</h6>
            </nav>
            <div
              className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
              id="navbar"
            >
              <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                <div className="input-group">
                  <span className="input-group-text text-body">
                    <i className="fas fa-search" aria-hidden="true" />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type here..."
                  />
                </div>
              </div>
              <ul className="navbar-nav  justify-content-end">
                <li className="nav-item d-flex align-items-center">
                  <a
                    className="btn btn-outline-primary btn-sm mb-0 me-3"
                    target="_blank"
                    href="https://www.creative-tim.com/builder?ref=navbar-soft-ui-dashboard"
                  >
                    Online Builder
                  </a>
                </li>
                <li className="nav-item d-flex align-items-center">
                  <a
                    href="javascript:;"
                    className="nav-link text-body font-weight-bold px-0"
                  >
                    <i className="fa fa-user me-sm-1" />
                    <span className="d-sm-inline d-none">Sign In</span>
                  </a>
                </li>
                <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                  <a
                    href="javascript:;"
                    className="nav-link text-body p-0"
                    id="iconNavbarSidenav"
                  >
                    <div className="sidenav-toggler-inner">
                      <i className="sidenav-toggler-line" />
                      <i className="sidenav-toggler-line" />
                      <i className="sidenav-toggler-line" />
                    </div>
                  </a>
                </li>
                <li className="nav-item px-3 d-flex align-items-center">
                  <a href="javascript:;" className="nav-link text-body p-0">
                    <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer" />
                  </a>
                </li>
                <li className="nav-item dropdown pe-2 d-flex align-items-center">
                  <a
                    href="javascript:;"
                    className="nav-link text-body p-0"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-bell cursor-pointer" />
                  </a>
                  <ul
                    className="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li className="mb-2">
                      <a
                        className="dropdown-item border-radius-md"
                        href="javascript:;"
                      >
                        <div className="d-flex py-1">
                          <div className="my-auto">
                            <img
                              src="../assets/img/team-2.jpg"
                              className="avatar avatar-sm  me-3 "
                            />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="text-sm font-weight-normal mb-1">
                              <span className="font-weight-bold">New message</span>{" "}
                              from Laur
                            </h6>
                            <p className="text-xs text-secondary mb-0 ">
                              <i className="fa fa-clock me-1" />
                              13 minutes ago
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        className="dropdown-item border-radius-md"
                        href="javascript:;"
                      >
                        <div className="d-flex py-1">
                          <div className="my-auto">
                            <img
                              src="../assets/img/small-logos/logo-spotify.svg"
                              className="avatar avatar-sm bg-gradient-dark  me-3 "
                            />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="text-sm font-weight-normal mb-1">
                              <span className="font-weight-bold">New album</span> by
                              Travis Scott
                            </h6>
                            <p className="text-xs text-secondary mb-0 ">
                              <i className="fa fa-clock me-1" />1 day
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item border-radius-md"
                        href="javascript:;"
                      >
                        <div className="d-flex py-1">
                          <div className="avatar avatar-sm bg-gradient-secondary  me-3  my-auto">
                            <svg
                              width="12px"
                              height="12px"
                              viewBox="0 0 43 36"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <title>credit-card</title>
                              <g
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <g
                                  transform="translate(-2169.000000, -745.000000)"
                                  fill="#FFFFFF"
                                  fillRule="nonzero"
                                >
                                  <g transform="translate(1716.000000, 291.000000)">
                                    <g transform="translate(453.000000, 454.000000)">
                                      <path
                                        className="color-background"
                                        d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                        opacity="0.593633743"
                                      />
                                      <path
                                        className="color-background"
                                        d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                                      />
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="text-sm font-weight-normal mb-1">
                              Payment successfully completed
                            </h6>
                            <p className="text-xs text-secondary mb-0 ">
                              <i className="fa fa-clock me-1" />2 days
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}
        <Navbar pageTitle="Tables"/>
        {/* End Navbar */}

        {/* AuthorsTables start */}
        <div className="container-fluid py-4">
          {/* <div className="row">
            <div className="col-12">
              <div className="card mb-4">
                <div className="card-header pb-0">
                  <h6>Authors table</h6>
                </div>
                <div className="card-body px-0 pt-0 pb-2">
                  <div className="table-responsive p-0">
                    <table className="table align-items-center mb-0">
                      <thead>
                        <tr>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Author
                          </th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                            Function
                          </th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Status
                          </th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Employed
                          </th>
                          <th className="text-secondary opacity-7" />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex px-2 py-1">
                              <div>
                                <img
                                  src={team2}
                                  className="avatar avatar-sm me-3"
                                  alt="user1"
                                />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm">John Michael</h6>
                                <p className="text-xs text-secondary mb-0">
                                  john@creative-tim.com
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-xs font-weight-bold mb-0">Manager</p>
                            <p className="text-xs text-secondary mb-0">
                              Organization
                            </p>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <span className="badge badge-sm bg-gradient-success">
                              Online
                            </span>
                          </td>
                          <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">
                              23/04/18
                            </span>
                          </td>
                          <td className="align-middle">
                            <a
                              href="javascript:;"
                              className="text-secondary font-weight-bold text-xs"
                              data-toggle="tooltip"
                              data-original-title="Edit user"
                            >
                              Edit
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-2 py-1">
                              <div>
                                <img
                                  src={team3}
                                  className="avatar avatar-sm me-3"
                                  alt="user2"
                                />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm">Alexa Liras</h6>
                                <p className="text-xs text-secondary mb-0">
                                  alexa@creative-tim.com
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-xs font-weight-bold mb-0">
                              Programator
                            </p>
                            <p className="text-xs text-secondary mb-0">Developer</p>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <span className="badge badge-sm bg-gradient-secondary">
                              Offline
                            </span>
                          </td>
                          <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">
                              11/01/19
                            </span>
                          </td>
                          <td className="align-middle">
                            <a
                              href="javascript:;"
                              className="text-secondary font-weight-bold text-xs"
                              data-toggle="tooltip"
                              data-original-title="Edit user"
                            >
                              Edit
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-2 py-1">
                              <div>
                                <img
                                  src={team4}
                                  className="avatar avatar-sm me-3"
                                  alt="user3"
                                />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm">Laurent Perrier</h6>
                                <p className="text-xs text-secondary mb-0">
                                  laurent@creative-tim.com
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-xs font-weight-bold mb-0">
                              Executive
                            </p>
                            <p className="text-xs text-secondary mb-0">Projects</p>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <span className="badge badge-sm bg-gradient-success">
                              Online
                            </span>
                          </td>
                          <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">
                              19/09/17
                            </span>
                          </td>
                          <td className="align-middle">
                            <a
                              href="javascript:;"
                              className="text-secondary font-weight-bold text-xs"
                              data-toggle="tooltip"
                              data-original-title="Edit user"
                            >
                              Edit
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-2 py-1">
                              <div>
                                <img
                                  src={team3}
                                  className="avatar avatar-sm me-3"
                                  alt="user4"
                                />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm">Michael Levi</h6>
                                <p className="text-xs text-secondary mb-0">
                                  michael@creative-tim.com
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-xs font-weight-bold mb-0">
                              Programator
                            </p>
                            <p className="text-xs text-secondary mb-0">Developer</p>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <span className="badge badge-sm bg-gradient-success">
                              Online
                            </span>
                          </td>
                          <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">
                              24/12/08
                            </span>
                          </td>
                          <td className="align-middle">
                            <a
                              href="javascript:;"
                              className="text-secondary font-weight-bold text-xs"
                              data-toggle="tooltip"
                              data-original-title="Edit user"
                            >
                              Edit
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-2 py-1">
                              <div>
                                <img
                                  src={team2}
                                  className="avatar avatar-sm me-3"
                                  alt="user5"
                                />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm">Richard Gran</h6>
                                <p className="text-xs text-secondary mb-0">
                                  richard@creative-tim.com
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-xs font-weight-bold mb-0">Manager</p>
                            <p className="text-xs text-secondary mb-0">Executive</p>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <span className="badge badge-sm bg-gradient-secondary">
                              Offline
                            </span>
                          </td>
                          <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">
                              04/10/21
                            </span>
                          </td>
                          <td className="align-middle">
                            <a
                              href="javascript:;"
                              className="text-secondary font-weight-bold text-xs"
                              data-toggle="tooltip"
                              data-original-title="Edit user"
                            >
                              Edit
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-2 py-1">
                              <div>
                                <img
                                  src={team4}
                                  className="avatar avatar-sm me-3"
                                  alt="user6"
                                />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm">Miriam Eric</h6>
                                <p className="text-xs text-secondary mb-0">
                                  miriam@creative-tim.com
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-xs font-weight-bold mb-0">
                              Programtor
                            </p>
                            <p className="text-xs text-secondary mb-0">Developer</p>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <span className="badge badge-sm bg-gradient-secondary">
                              Offline
                            </span>
                          </td>
                          <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">
                              14/09/20
                            </span>
                          </td>
                          <td className="align-middle">
                            <a
                              href="javascript:;"
                              className="text-secondary font-weight-bold text-xs"
                              data-toggle="tooltip"
                              data-original-title="Edit user"
                            >
                              Edit
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="row">
            <div className="col-12">
              <AuthorsTable data={authorsData} />
            </div>
          </div>
          {/* AuthorsTables end */}


          {/* ProjectsTableData start */}
          {/* <div className="row">
            <div className="col-12">
              <div className="card mb-4">
                <div className="card-header pb-0">
                  <h6>Projects table</h6>
                </div>
                <div className="card-body px-0 pt-0 pb-2">
                  <div className="table-responsive p-0">
                    <table className="table align-items-center justify-content-center mb-0">
                      <thead>
                        <tr>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Project
                          </th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                            Budget
                          </th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                            Status
                          </th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">
                            Completion
                          </th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex px-2">
                              <div>
                                <img
                                  src={spotify}
                                  className="avatar avatar-sm rounded-circle me-2"
                                  alt="spotify"
                                />
                              </div>
                              <div className="my-auto">
                                <h6 className="mb-0 text-sm">Spotify</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-sm font-weight-bold mb-0">$2,500</p>
                          </td>
                          <td>
                            <span className="text-xs font-weight-bold">
                              working
                            </span>
                          </td>
                          <td className="align-middle text-center">
                            <div className="d-flex align-items-center justify-content-center">
                              <span className="me-2 text-xs font-weight-bold">
                                60%
                              </span>
                              <div>
                                <div className="progress">
                                  <div
                                    className="progress-bar bg-gradient-info"
                                    role="progressbar"
                                    aria-valuenow={60}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                    style={{ width: "60%" }}
                                  />
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle">
                            <button className="btn btn-link text-secondary mb-0">
                              <i className="fa fa-ellipsis-v text-xs" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-2">
                              <div>
                                <img
                                  src={invision}
                                  className="avatar avatar-sm rounded-circle me-2"
                                  alt="invision"
                                />
                              </div>
                              <div className="my-auto">
                                <h6 className="mb-0 text-sm">Invision</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-sm font-weight-bold mb-0">$5,000</p>
                          </td>
                          <td>
                            <span className="text-xs font-weight-bold">done</span>
                          </td>
                          <td className="align-middle text-center">
                            <div className="d-flex align-items-center justify-content-center">
                              <span className="me-2 text-xs font-weight-bold">
                                100%
                              </span>
                              <div>
                                <div className="progress">
                                  <div
                                    className="progress-bar bg-gradient-success"
                                    role="progressbar"
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                    style={{ width: "100%" }}
                                  />
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle">
                            <button
                              className="btn btn-link text-secondary mb-0"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="fa fa-ellipsis-v text-xs" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-2">
                              <div>
                                <img
                                  src={jira}
                                  className="avatar avatar-sm rounded-circle me-2"
                                  alt="jira"
                                />
                              </div>
                              <div className="my-auto">
                                <h6 className="mb-0 text-sm">Jira</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-sm font-weight-bold mb-0">$3,400</p>
                          </td>
                          <td>
                            <span className="text-xs font-weight-bold">
                              canceled
                            </span>
                          </td>
                          <td className="align-middle text-center">
                            <div className="d-flex align-items-center justify-content-center">
                              <span className="me-2 text-xs font-weight-bold">
                                30%
                              </span>
                              <div>
                                <div className="progress">
                                  <div
                                    className="progress-bar bg-gradient-danger"
                                    role="progressbar"
                                    aria-valuenow={30}
                                    aria-valuemin={0}
                                    aria-valuemax={30}
                                    style={{ width: "30%" }}
                                  />
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle">
                            <button
                              className="btn btn-link text-secondary mb-0"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="fa fa-ellipsis-v text-xs" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-2">
                              <div>
                                <img
                                  src={slack}
                                  className="avatar avatar-sm rounded-circle me-2"
                                  alt="slack"
                                />
                              </div>
                              <div className="my-auto">
                                <h6 className="mb-0 text-sm">Slack</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-sm font-weight-bold mb-0">$1,000</p>
                          </td>
                          <td>
                            <span className="text-xs font-weight-bold">
                              canceled
                            </span>
                          </td>
                          <td className="align-middle text-center">
                            <div className="d-flex align-items-center justify-content-center">
                              <span className="me-2 text-xs font-weight-bold">
                                0%
                              </span>
                              <div>
                                <div className="progress">
                                  <div
                                    className="progress-bar bg-gradient-success"
                                    role="progressbar"
                                    aria-valuenow={0}
                                    aria-valuemin={0}
                                    aria-valuemax={0}
                                    style={{ width: "0%" }}
                                  />
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle">
                            <button
                              className="btn btn-link text-secondary mb-0"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="fa fa-ellipsis-v text-xs" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-2">
                              <div>
                                <img
                                  src={webdev}
                                  className="avatar avatar-sm rounded-circle me-2"
                                  alt="webdev"
                                />
                              </div>
                              <div className="my-auto">
                                <h6 className="mb-0 text-sm">Webdev</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-sm font-weight-bold mb-0">$14,000</p>
                          </td>
                          <td>
                            <span className="text-xs font-weight-bold">
                              working
                            </span>
                          </td>
                          <td className="align-middle text-center">
                            <div className="d-flex align-items-center justify-content-center">
                              <span className="me-2 text-xs font-weight-bold">
                                80%
                              </span>
                              <div>
                                <div className="progress">
                                  <div
                                    className="progress-bar bg-gradient-info"
                                    role="progressbar"
                                    aria-valuenow={80}
                                    aria-valuemin={0}
                                    aria-valuemax={80}
                                    style={{ width: "80%" }}
                                  />
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle">
                            <button
                              className="btn btn-link text-secondary mb-0"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="fa fa-ellipsis-v text-xs" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-2">
                              <div>
                                <img
                                  src={xd}
                                  className="avatar avatar-sm rounded-circle me-2"
                                  alt="xd"
                                />
                              </div>
                              <div className="my-auto">
                                <h6 className="mb-0 text-sm">Adobe XD</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-sm font-weight-bold mb-0">$2,300</p>
                          </td>
                          <td>
                            <span className="text-xs font-weight-bold">done</span>
                          </td>
                          <td className="align-middle text-center">
                            <div className="d-flex align-items-center justify-content-center">
                              <span className="me-2 text-xs font-weight-bold">
                                100%
                              </span>
                              <div>
                                <div className="progress">
                                  <div
                                    className="progress-bar bg-gradient-success"
                                    role="progressbar"
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                    style={{ width: "100%" }}
                                  />
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle">
                            <button
                              className="btn btn-link text-secondary mb-0"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="fa fa-ellipsis-v text-xs" />
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="row">
            <div className="col-12">
              <ProjectsTable projects={projectsData} />
            </div>
          </div>
          {/* ProjectsTableData  end*/}

          <Footer />
        </div>
      </main>
      {/* <div className="fixed-plugin">
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
            End Toggle Button
          </div>
          <hr className="horizontal dark my-1" />
          <div className="card-body pt-sm-3 pt-0">
            Sidebar Backgrounds
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
            Sidenav Type
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
            Navbar Fixed
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
      </div> */}
    </>

  </div>;
};

export default Tables;
