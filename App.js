import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginAnimation from './src/LoginAnimation';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducers from './src/reducers';
import Router from './Router/router';


export default class App extends React.Component {
  render() {
    const store = createStore(reducers);
    return (
      <Provider store = {store}>
          <Router />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
