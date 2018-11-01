import React, { Component } from 'react';
import { connect } from 'react-redux';
import SerieItem from '../Common/SingleDetailItem';
import { getSerie } from '../../actions';
import PrivateRoute from '../Common/PrivateRoute';

class SerieDetail extends Component {
    componentDidMount() {
        this.props.getSerie(this.props.match.params.title);
    }

    render() {
        return (
            <SerieItem
                {...this.props.serie.serie}
                user={this.props.user}
            />
        );
    }
}

const mapStateToProps = ({ serie, auth }) => {
    const { user } = auth;

    return { serie, user };
}

export default PrivateRoute(connect(mapStateToProps, { getSerie })(SerieDetail));