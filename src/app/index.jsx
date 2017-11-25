import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import reducer from './reducers/reducer'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, hashHistory } from 'react-router-dom';
import Board from "./components/Board";

require('../public/main.scss');

const store = createStore(reducer, applyMiddleware(thunk));

render(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Board></Board>
      </Router>
    </Provider>,
    document.getElementById('root')
);