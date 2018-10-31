import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSeries } from '../../actions';
import SerieList from '../Common/ListItem';
import PrivateRoute from '../Common/PrivateRoute';

class Serie extends Component {
    componentDidMount() {
        this.props.fetchSeries();
    }

    renderContent = () => {
        if (this.props.series.length === 0 || this.props.series.length === null) {
            return (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 text-center pt-2">
                            <p>No content found.</p>
                        </div>
                    </div>
                </div>
            );
        } else {
            return <SerieList
                location={this.props.location.pathname}
                data={this.props.series}
            />
        }
    };

    render() {
        return this.renderContent();
    }
}

const mapStateToProps = ({ serie }) => {
    const { series } = serie;

    return { series };
}

export default PrivateRoute(connect(mapStateToProps, { fetchSeries })(Serie));
