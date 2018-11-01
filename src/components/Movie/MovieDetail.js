import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../Common/SingleDetailItem';
import { getMovie, storeRent } from '../../actions';
import PrivateRoute from '../Common/PrivateRoute';

class MovieDetail extends Component {
    componentDidMount() {
        this.props.getMovie(this.props.match.params.title);
    }

    onButtonClick = (e, userId) => {
        e.preventDefault();

        this.props.storeRent(userId);
    };

    render() {
        return (
            <MovieItem
                {...this.props.movie.movie}
                user={this.props.user}
                onButtonClick={this.onButtonClick}
            />
        );
    }
}

const mapStateToProps = ({ movie, auth }) => {
    const { user } = auth;

    return { movie, user };
}

export default PrivateRoute(connect(mapStateToProps, { getMovie, storeRent })(MovieDetail));