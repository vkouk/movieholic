import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/movieActions';

class Movie extends Component {
    componentDidMount() {
        this.props.fetchMovies();
    }

    render() {
        return (
            <ul>
                {this.props.movies.map(movie => {
                    return (
                        <li key={movie._id}>{movie.title}</li>
                    )
                })}
            </ul>
        );
    }
}

const mapStateToProps = ({ movie }) => {
    const { movies } = movie;

    return { movies };
}

export default connect(mapStateToProps, { fetchMovies })(Movie);
