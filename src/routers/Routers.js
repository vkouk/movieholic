import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../components/Common/Header';
import Landing from '../components/Landing';
import Register from '../components/Auth/Register';
import Login from '../components/Auth/Login';
import Profile from '../components/Profile/Profile';
import Movie from '../components/Movie/Movie';
import Serie from '../components/Serie/Serie';
import Cart from '../components/Cart/Cart';
import ProfileOrdersDetail from '../components/Profile/ProfileOrdersDetail';

export default ({ isHeaderVisible, onHeaderToggle }) => {
    return (
        <BrowserRouter>
            <div className={`w-100 main ${isHeaderVisible ? 'is-expanded' : ''}`}>
                <Header isHeaderVisible={isHeaderVisible} onHeaderToggle={onHeaderToggle} />
                <Route exact path="/" render={() => <Landing isHeaderVisible={isHeaderVisible} />} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/profile/:id" component={Profile} />
                <Route path="/movies" render={() => <Movie isHeaderVisible={isHeaderVisible} />} />
                <Route path="/series" render={() => <Serie isHeaderVisible={isHeaderVisible} />} />
                <Route path="/cart" component={Cart} />
                <Route path="/order/:id" component={ProfileOrdersDetail} />
            </div>
        </BrowserRouter>
    );
};

