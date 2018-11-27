import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../components/Common/Header';
import Landing from '../components/Landing';
import Profile from '../components/Profile/Profile';
import Movie from '../components/Movie/Movie';
import Serie from '../components/Serie/Serie';

export default ({ isHeaderVisible, onHeaderToggle, isCartVisible, onCartToggle }) => {
    return (
        <BrowserRouter>
            <div className={`w-100 main ${isHeaderVisible ? 'is-expanded' : ''}`}>
                <Header isHeaderVisible={isHeaderVisible} onHeaderToggle={onHeaderToggle} isCartVisible={isCartVisible} onCartToggle={onCartToggle} />
                <Route exact path="/" render={() => <Landing isHeaderVisible={isHeaderVisible} />} />
                <Route path="/profile/:id" component={Profile} />
                <Route path="/movies" render={() => <Movie isHeaderVisible={isHeaderVisible} isCartVisible={isCartVisible} onCartToggle={onCartToggle} />} />
                <Route path="/series" render={() => <Serie isHeaderVisible={isHeaderVisible} isCartVisible={isCartVisible} onCartToggle={onCartToggle} />} />
            </div>
        </BrowserRouter>
    );
};

