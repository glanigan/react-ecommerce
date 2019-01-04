import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import './index.css'

import configureStore from './store'
import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={configureStore}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
