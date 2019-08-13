import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
/*import * as serviceWorker from './serviceWorker';*/
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux';
import reducer from './reducers/reducer'
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';
//import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
//import {About} from "./About";




const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
//const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
    <Provider store={store}>
        {/*<Router history={history}>
            <Route path='/' component={App}/>
            <Route path='/about' component={About}/>
            <Route path="/tracks/:id" component={Track}/>
        </Router>*/}
        <App/>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
/*serviceWorker.unregister();*/
