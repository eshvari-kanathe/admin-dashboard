import React from 'react';

const Card = ({ title, value, icon, date, percentage, color }) => {
  return (
    <div className="col-lg-12 col-md-12 col-12 mt-4 mt-md-0">
      <div className="card">
        <span className={`mask ${color} opacity-10 border-radius-lg`} />
        <div className="card-body p-3 position-relative">
          <div className="row">
            <div className="col-8 text-start">
              <div className="icon icon-shape bg-white shadow text-center border-radius-2xl">
                <i className={`${icon} text-dark text-gradient text-lg opacity-10`} aria-hidden="true" />
              </div>
              <h5 className="text-white font-weight-bolder mb-0 mt-3">{value}</h5>
              <span className="text-white text-sm">{title}</span>
            </div>
            <div className="col-4">
              <div className="dropdown text-end mb-6">
                <a href="javascript:;" className="cursor-pointer" id="dropdownUsers1" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fa fa-ellipsis-h text-white" />
                </a>
                <ul className="dropdown-menu px-2 py-3" aria-labelledby="dropdownUsers1">
                  <li><a className="dropdown-item border-radius-md">Action</a></li>
                  <li><a className="dropdown-item border-radius-md">Another action</a></li>
                  <li><a className="dropdown-item border-radius-md">Something else here</a></li>
                </ul>
              </div>
              <p className="text-white text-sm text-end font-weight-bolder mt-auto mb-0">{percentage}%</p>
              <p className="text-white text-sm text-end">{date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

