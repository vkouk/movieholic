import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserRecommendations } from '../../actions';
import RecommendationList from '../Common/ListItem';
import Spinner from '../Common/Spinner';

class Recommendation extends Component {
    componentDidMount() {
        if (this.props.isAuthenticated) {
            this.props.getUserRecommendations({ userId: this.props.user._id });
        }
    }

    renderContent = () => {
        if ((this.props.recommendations.suggestedMovies.length === 0 || this.props.recommendations.suggestedMovies.length === null) && (this.props.recommendations.suggestedSeries.length === 0 || this.props.recommendations.suggestedSeries.length === null)) {
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
            return (
                <div>
                    <RecommendationList
                        isHeaderVisible={this.props.isHeaderVisible}
                        location={this.props.location.pathname}
                        data={this.props.recommendations.suggestedMovies}
                    />
                    <RecommendationList
                        isHeaderVisible={this.props.isHeaderVisible}
                        location={this.props.location.pathname}
                        data={this.props.recommendations.suggestedSeries}
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
    const { recommendations } = recommendation;
    const { user, isAuthenticated } = auth;

    return { user, isAuthenticated, recommendations };
}

export default connect(mapStateToProps, { getUserRecommendations })(withRouter(Recommendation));