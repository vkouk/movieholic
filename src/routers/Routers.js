import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Landing from '../components/Landing';
import Register from '../components/Register';
import Login from '../components/Login';

export default () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Route exact path="/" component={Landing} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Footer />
            </div>
        </BrowserRouter>
    );
};

