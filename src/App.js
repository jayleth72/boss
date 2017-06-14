import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAcJxIOBRCeq3ZqhcpGtLai_pY8-OCTsy4',
      authDomain: 'boss-4251e.firebaseapp.com',
      databaseURL: 'https://boss-4251e.firebaseio.com',
      projectId: 'boss-4251e',
      storageBucket: 'boss-4251e.appspot.com',
      messagingSenderId: '165093865912'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
