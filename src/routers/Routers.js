import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Landing from '../components/Landing';

export default () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Route exact path="/" component={Landing} />
                <Footer />
            </div>
        </BrowserRouter>
    );
};

