import React from "react";
import moment from "moment";

export default ({ record }) => {
  return (
    <div className="dashboard__col">
      {record.title && <div className="dashboard__item">{record.title}</div>}
      {record.count && (
        <div className="dashboard__item">{record.count} times rented</div>
      )}
      {record.username && (
        <div className="dashboard__item">{record.username}</div>
      )}
      {record.joinedAt && (
        <div className="dashboard__item">
          Joined at: {moment(record.joinedAt).format("DD/MM/YYYY")}
        </div>
      )}
      {record.dateOrdered && record.rentalFee && (
        <div className="dashboard__item">
          {moment(record.dateOrdered).format("DD/MM/YYYY")} - Rental Fee: €
          {record.rentalFee.toFixed(2)}
        </div>
      )}
      {record.movies && record.series && (
        <div className="dashboard__item">
          Total rented items: {record.movies.length + record.series.length}
        </div>
      )}
    </div>
  );
};
