import React from "react";

const BillingCard = ({ name, company, email, vatNumber, onDelete, onEdit }) => {
  return (
    <li className="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
      <div className="d-flex flex-column">
        <h6 className="mb-3 text-sm">{name}</h6>
        <span className="mb-2 text-xs">
          Company Name:{" "}
          <span className="text-dark font-weight-bold ms-sm-2">{company}</span>
        </span>
        <span className="mb-2 text-xs">
          Email Address:{" "}
          <span className="text-dark ms-sm-2 font-weight-bold">{email}</span>
        </span>
        <span className="text-xs">
          VAT Number:{" "}
          <span className="text-dark ms-sm-2 font-weight-bold">{vatNumber}</span>
        </span>
      </div>
      <div className="ms-auto text-end">
        <button
          className="btn btn-link text-danger text-gradient px-3 mb-0"
          onClick={onDelete}
        >
          <i className="far fa-trash-alt me-2" />
          Delete
        </button>
        <button
          className="btn btn-link text-dark px-3 mb-0"
          onClick={onEdit}
        >
          <i className="fas fa-pencil-alt text-dark me-2" aria-hidden="true" />
          Edit
        </button>
      </div>
    </li>
  );
};

export default BillingCard;