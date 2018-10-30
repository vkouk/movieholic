import React from 'react';
import MovieListItem from './Item';

export default ({ data }) => {
    return (
        <div className="container-fluid">
            <div className="row">
                {data.sort((a, b) => a.title !== b.title ? a.title < b.title ? -1 : 1 : 0).map(record => {
                    return (
                        <MovieListItem
                            key={record._id}
                            {...record}
                        />
                    )
                })}
            </div>
        </div>
    );
};
