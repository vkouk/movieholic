import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSeries } from '../../actions';
import SerieList from '../Common/ListItem';
import PrivateRoute from '../Common/PrivateRoute';
import Spinner from '../Common/Spinner';

class Serie extends Component {
    componentDidMount() {
        if (this.props.isAuthenticated) {
            this.props.fetchSeries();
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.series.length !== this.props.series.length) {
            this.props.fetchSeries();
        }
    }

    renderContent = () => {
        if (this.props.series.length === 0 || this.props.series.length === null) {
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
            return <SerieList
                isHeaderVisible={this.props.isHeaderVisible}
                isCartVisible={this.props.isCartVisible}
                onCartToggle={this.props.onCartToggle}
                location={this.props.location.pathname}
                data={this.props.series}
            />
        }
    };

    render() {
        return this.renderContent();
    }
}

const mapStateToProps = ({ serie, auth }) => {
    const { series } = serie;
    const { isAuthenticated } = auth;

    return { series, isAuthenticated };
}

export default PrivateRoute(connect(mapStateToProps, { fetchSeries })(withRouter(Serie)));
