import React from "react";

const Table = ({ data }) => {
  return (
    <div className="card mb-4">
      <div className="card-header pb-0">
        <h6>Authors Table</h6>
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
              {data.map((author, index) => (
                <tr key={index}>
                  <td>
                    <div className="d-flex px-2 py-1">
                      <div>
                        <img
                          src={author.image}
                          className="avatar avatar-sm me-3"
                          alt={`user${index + 1}`}
                        />
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="mb-0 text-sm">{author.name}</h6>
                        <p className="text-xs text-secondary mb-0">
                          {author.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="text-xs font-weight-bold mb-0">
                      {author.role}
                    </p>
                    <p className="text-xs text-secondary mb-0">
                      {author.department}
                    </p>
                  </td>
                  <td className="align-middle text-center text-sm">
                    <span
                      className={`badge badge-sm ${author.status === "Online"
                          ? "bg-gradient-success"
                          : "bg-gradient-secondary"
                        }`}
                    >
                      {author.status}
                    </span>
                  </td>
                  <td className="align-middle text-center">
                    <span className="text-secondary text-xs font-weight-bold">
                      {author.employmentDate}
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Table;
