import React from 'react';

export default ({ record }) => {
    return (
        <div className="dashboard__col">
            <div className="dashboard__item">
                {record.title} {record._id}
            </div>
            <div className="dashboard__item">
                {record.count}
            </div>
        </div>
    )
};