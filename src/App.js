import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
