import React from 'react';
import DashboardListItem from './DashboardListItem';

export default ({ data }) => {
    return (
        <div className="dashboard__row">
            {
                data && data.map(record => {
                    return (
                        <DashboardListItem
                            key={record._id}
                            record={record}
                        />
                    );
                })
            }
        </div>
    )
};