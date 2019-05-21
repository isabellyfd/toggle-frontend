import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import storeWithMiddleware from './store';
import reducers from './reducer';
import App from './App';

ReactDOM.render(
    <Provider store={storeWithMiddleware(reducers)}>
        <App />
    </Provider>
, document.getElementById('root'));
