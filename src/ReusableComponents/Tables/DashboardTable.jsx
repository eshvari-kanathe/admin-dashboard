import React from "react";

const DashboardTable = ({ data }) => {
    return (
        <table className="table align-items-center mb-0">
            <thead>
                <tr>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Companies
                    </th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                        Members
                    </th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Budget
                    </th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Completion
                    </th>
                </tr>
            </thead>
            <tbody>
                {data?.map((item, index) => (
                    <tr key={index}>
                        <td>
                            <div className="d-flex px-2 py-1">
                                <div>
                                    <img
                                        src={item.logo}
                                        className="avatar avatar-sm me-3"
                                        alt={item.company}
                                    />
                                </div>
                                <div className="d-flex flex-column justify-content-center">
                                    <h6 className="mb-0 text-sm">{item.company}</h6>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="avatar-group mt-2">
                                {item.members.map((member, i) => (
                                    <a
                                        key={i}
                                        href="#"
                                        className="avatar avatar-xs rounded-circle"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="bottom"
                                        title={member.name}
                                    >
                                        <img src={member.avatar} alt={member.name} />
                                    </a>
                                ))}
                            </div>
                        </td>
                        <td className="align-middle text-center text-sm">
                            <span className="text-xs font-weight-bold">{item.budget}</span>
                        </td>
                        <td className="align-middle">
                            <div className="progress-wrapper w-75 mx-auto">
                                <div className="progress-info">
                                    <div className="progress-percentage">
                                        <span className="text-xs font-weight-bold">
                                            {item.completion}%
                                        </span>
                                    </div>
                                </div>
                                <div className="progress">
                                    <div
                                        className={`progress-bar bg-gradient-${item.completionColor} w-${item.completion}`}
                                        role="progressbar"
                                        aria-valuenow={item.completion}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DashboardTable;