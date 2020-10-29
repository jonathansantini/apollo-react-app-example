import React from 'react';
import UserName from './components/UserName';
import InterestListings from './components/InterestListings';
import Login from "./components/Login";

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <UserName />
        <InterestListings />
        <Login />
      </div>
    )
  }
}

export default App;
