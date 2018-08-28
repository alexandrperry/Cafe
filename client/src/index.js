import React, {Fragment } from 'react';
import ReactDOM from 'react-dom';
import './main.sass';
import App from "./components/App";
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas'
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Switch,
    Redirect
} from 'react-router-dom';


const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(rootSaga)







ReactDOM.render(

    <Fragment>
        <Router>
            <Provider store={store}>
                <App/>
            </Provider>
        </Router>
    </Fragment>
    , document.getElementById('app'));

module.hot.accept();