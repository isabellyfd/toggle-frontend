import { createStore, applyMiddleware } from 'redux';

const storeWithMiddleware = applyMiddleware()(createStore);

export default storeWithMiddleware;