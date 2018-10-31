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
            <SerieItem {...this.props.serie.serie} />
        );
    }
}

const mapStateToProps = ({ serie }) => {
    return { serie };
}

export default PrivateRoute(connect(mapStateToProps, { getSerie })(SerieDetail));