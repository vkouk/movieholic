import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
