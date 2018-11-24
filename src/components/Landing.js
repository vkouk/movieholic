import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Search from './Common/Search';
import Recommendation from './Recommendation/Recommendation';

class Landing extends Component {
    state = {
        selectedIndex: null
    };

    onSelectChange = value => this.setState({ selectedIndex: value });;

    render() {
        return (
            <div>
                <div className="hero">
                    <div className="cover bg-left bg-center-l hero__bg">
                        <div className="bg-black-80 pb5 pb6-m pb7-l hero__container">
                            <div className="dtc w2 v-mid pa3"></div>
                            <div className="tc-l mt4 mt5-m mt6-l ph3">
                                <h1 className="f2 f1-l fw2 white-90 mb0 lh-title">movieholic - Rent hasn't become easier</h1>
                                <h2 className="fw1 f3 white-80 mt3 mb4">Search &amp; Rent for your favorite movies &amp; series.</h2>
                                <Link className="hero__link f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3" to={'/movies'}>Movies</Link>
                                <span className="dib v-mid ph3 white-70 mb3">or</span>
                                <Link className="hero__link f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3" to={'/series'}>Series</Link>
                                <h2 className="fw1 f3 white-80 mt3 mb4">Below are all your recommended movies &amp; series, and search to browse new one!</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <Search navigation={this.props.history} />
                <Recommendation isHeaderVisible={this.props.isHeaderVisible} selectedIndex={this.state.selectedIndex} onSelectChange={this.onSelectChange} />
            </div>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    const { isAuthenticated, user } = auth;

    return { isAuthenticated, user };
}


export default connect(mapStateToProps, null)(withRouter(Landing));
