import React from 'react';
import MovieListItem from './MovieListItem';

export default ({ movies }) => {
    return (
        <div className="container">
            <div className="row">
                {movies.map(movie => {
                    return (
                        <MovieListItem
                            key={movie._id}
                            {...movie}
                        />
                    )
                })}
            </div>
        </div>
    );
};
