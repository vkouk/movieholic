import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserRecommendations, clearRecommendations } from '../../actions';
import RecommendationList from '../Common/ListItem';

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
        const { recommendations, isHeaderVisible, location, isAuthenticated, error } = this.props;
        if (Object.keys(recommendations).length === 0) {
            return (
                !isAuthenticated ?
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12 text-center pt-2">
                                Please <Link className="btn btn--home" to={'/login'}>Login</Link> to see your recommends.
                            </div>
                        </div>
                    </div>
                    :
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12 text-center pt-2">
                                {error}
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