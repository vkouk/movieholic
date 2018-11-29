import React from 'react';

export default ({ record }) => {
    console.log(record)
    return (
        <div className="dashboard__col">
            <div className="dashboard__item">
                {record._id}
            </div>
        </div>
    )
};