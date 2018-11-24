import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserRecommendations, clearRecommendations } from '../../actions';
import RecommendationList from '../Common/ListItem';
import Login from '../Auth/Login';
import Register from '../Auth/Register';

class Recommendation extends Component {
    componentDidMount() {
        if (this.props.isAuthenticated) {
            this.props.getUserRecommendations({ userId: this.props.user._id });
        } else {
            this.props.clearRecommendations();
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.isAuthenticated !== prevProps.isAuthenticated) {
            this.props.clearRecommendations();
        }
    }

    renderContent = () => {
        const { recommendations, isHeaderVisible, location, isAuthenticated, error, selectedIndex, onSelectChange } = this.props;
        if ((Object.keys(recommendations).length === 0) || (recommendations.suggestedMovies.length === 0 && recommendations.suggestedSeries.length === 0)) {
            return (
                !isAuthenticated ?
                    <div className="container">
                        <div className="row pt-4 pb-4">
                            <div className="col-sm-6 text-center">
                                Please <span className="btn btn--home" onClick={() => onSelectChange(0)}>Login</span> / <span className="btn btn--home" onClick={() => onSelectChange(1)}>Register</span> to browse movieholic.
                            </div>
                            <div className="col-sm-6">
                                {selectedIndex === null ? null : selectedIndex === 0 ? <Login /> : <Register />}
                            </div>
                        </div>
                    </div>
                    :
                    <div className="container-fluid">
                        <div className="row pt-2">
                            <div className="col-sm-12 text-center">
                                <p>No recommendations found for you. Visit <Link to={'/movies'} className="btn btn--home">Movies</Link> or <Link to={'/series'} className="btn btn--home">Series</Link> and rent some.</p>
                                {error && <p>{error}</p>}
                            </div>
                        </div>
                    </div>
            );
        } else {
            return (
                <div>
                    <RecommendationList
                        isHeaderVisible={isHeaderVisible}
                        location={location.pathname}
                        data={recommendations.suggestedMovies}
                        headerTitle={'Recommended Movies'}
                    />
                    <RecommendationList
                        isHeaderVisible={isHeaderVisible}
                        location={location.pathname}
                        data={recommendations.suggestedSeries}
                        headerTitle={'Recommended Series'}
                    />
                </div>
            );
        }
    };

    render() {
        return this.renderContent();
    }
}

const mapStateToProps = ({ auth, recommendation }) => {
    const { recommendations, error } = recommendation;
    const { user, isAuthenticated } = auth;

    return { user, isAuthenticated, recommendations, error };
}

export default connect(mapStateToProps, { getUserRecommendations, clearRecommendations })(withRouter(Recommendation));