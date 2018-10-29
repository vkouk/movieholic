import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';
import Landing from '../components/Landing';
import Register from '../components/Auth/Register';
import Login from '../components/Auth/Login';
import Profile from '../components/Profile/Profile';

export default () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Route exact path="/" component={Landing} />
                <Route path="/profile/:id" component={Profile} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Footer />
            </div>
        </BrowserRouter>
    );
};

