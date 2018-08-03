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
      apiKey: "AIzaSyCkGNieam-jjtjDMyeBUcl1HP0mo6CT-VA",
      authDomain: "ion-taxi-91e02.firebaseapp.com",
      databaseURL: "https://ion-taxi-91e02.firebaseio.com",
      projectId: "ion-taxi-91e02",
      storageBucket: "ion-taxi-91e02.appspot.com",
      messagingSenderId: "736001180248"
    };
    firebase.initializeApp(config);
  }

  render() { 
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}
