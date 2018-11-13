import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from './Common/Search';

class Landing extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="cover bg-left bg-center-l">
                        <div className="bg-black-80 pb5 pb6-m pb7-l">
                            <div className="dtc w2 v-mid pa3"></div>
                            <div className="tc-l mt4 mt5-m mt6-l ph3">
                                <h1 className="f2 f1-l fw2 white-90 mb0 lh-title">This is your super impressive headline</h1>
                                <h2 className="fw1 f3 white-80 mt3 mb4">Now a subheadline where explain your wonderful new startup even
                    more</h2>
                                <a className="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3" href="/">Call to
                    Action</a>
                                <span className="dib v-mid ph3 white-70 mb3">or</span>
                                <a className="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3" href="">Secondary call to
                    action</a>
                            </div>
                        </div>
                    </div>
                </div>
                <Search navigation={this.props.history} />
            </div>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    const { isAuthenticated, user } = auth;

    return { isAuthenticated, user };
}


export default connect(mapStateToProps, null)(Landing);
