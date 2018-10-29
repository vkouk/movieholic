import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/movieActions';
import MovieList from './MovieList';

class Movie extends Component {
    componentDidMount() {
        this.props.fetchMovies();
    }

    render() {
        return (
            <MovieList
                movies={this.props.movies}
            />
        );
    }
}

const mapStateToProps = ({ movie }) => {
    const { movies } = movie;

    return { movies };
}

export default connect(mapStateToProps, { fetchMovies })(Movie);
