import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../components/Common/Header';
import Landing from '../components/Landing';
import Register from '../components/Auth/Register';
import Login from '../components/Auth/Login';
import Profile from '../components/Profile/Profile';
import Movie from '../components/Movie/Movie';
import Serie from '../components/Serie/Serie';
import MovieDetail from '../components/Movie/MovieDetail';
import SerieDetail from '../components/Serie/SerieDetail';
import Cart from '../components/Cart/Cart';
import ProfileOrdersDetail from '../components/Profile/ProfileOrdersDetail';

export default () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Route exact path="/" component={Landing} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/profile/:id" component={Profile} />
                <Route path="/movies" component={Movie} />
                <Route path="/series" component={Serie} />
                <Route path="/serie/:title" component={SerieDetail} />
                <Route path="/movie/:title" component={MovieDetail} />
                <Route path="/cart" component={Cart} />
                <Route path="/order/:id" component={ProfileOrdersDetail} />
            </div>
        </BrowserRouter>
    );
};

