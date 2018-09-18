import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from '../components/Landing';

export default () => {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Landing} />
            </div>
        </BrowserRouter>
    );
};

