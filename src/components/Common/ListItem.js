import React from 'react';
import Item from './Item';

export default ({ data, location }) => {
    return (
        <div className="container-fluid">
            <div className="row">
                {data.sort((a, b) => a.title !== b.title ? a.title < b.title ? -1 : 1 : 0).map(record => {
                    return (
                        <Item
                            key={record._id}
                            location={location}
                            {...record}
                        />
                    )
                })}
            </div>
        </div>
    );
};
