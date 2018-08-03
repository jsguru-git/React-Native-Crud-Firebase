/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';
import Router from './src/Router';

export default class App extends Component<{}> {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyC1slGKXVFy9DTm9Mwnk7fG9O-rOA-7fNg",
      authDomain: "poc-realtime-132a6.firebaseapp.com",
      databaseURL: "https://poc-realtime-132a6.firebaseio.com",
      projectId: "poc-realtime-132a6",
      storageBucket: "poc-realtime-132a6.appspot.com",
      messagingSenderId: "393298275637"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);  
    }
  }

  render() { 
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}
