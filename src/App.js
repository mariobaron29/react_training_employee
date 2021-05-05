import logo from './logo.svg';
import './App.css';
import Routes from './Routes';
import { Provider } from 'react-redux';
import store from './data/store';
import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />  
      </Provider>
      
    );
  }
}

export default App;
