import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/movieActions';
import MovieList from '../Common/ListItem';
import PrivateRoute from '../Common/PrivateRoute';
import Spinner from '../Common/Spinner';

class Movie extends Component {
    componentDidMount() {
        this.props.fetchMovies();
    }

    renderContent = () => {
        if (this.props.movies.length === 0 || this.props.movies.length === null) {
            return (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 text-center pt-2">
                            <Spinner />
                        </div>
                    </div>
                </div>
            );
        } else {
            return <MovieList
                location={this.props.location.pathname}
                data={this.props.movies}
            />
        }
    };

    render() {
        return this.renderContent();
    }
}

const mapStateToProps = ({ movie }) => {
    const { movies } = movie;

    return { movies };
}

export default PrivateRoute(connect(mapStateToProps, { fetchMovies })(Movie));