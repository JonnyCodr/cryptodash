import React, { Component } from 'react';
import './App.css';
import AppLayout from './AppLayout';
import AppBar from './AppBar';

class App extends Component {
  render() {
    return (
      <AppLayout>
          <AppBar />
        <p>App Works!</p>
      </AppLayout>
    );
  }
}

export default App;
