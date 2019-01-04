import React, { Component } from "react";
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import reducers from '../reducers';
import MainApp from "../MainApp";

export default class Setup extends Component {

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <MainApp />
      </Provider>
    );
  }
}