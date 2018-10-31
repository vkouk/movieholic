import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../Common/SingleDetailItem';
import { getMovie } from '../../actions';
import PrivateRoute from '../Common/PrivateRoute';

class MovieDetail extends Component {
    componentDidMount() {
        this.props.getMovie(this.props.match.params.title);
    }

    render() {
        return (
            <MovieItem {...this.props.movie.movie} />
        );
    }
}

const mapStateToProps = ({ movie }) => {
    return { movie };
}

export default PrivateRoute(connect(mapStateToProps, { getMovie })(MovieDetail));