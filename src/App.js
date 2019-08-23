import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'
import UserItem from './components/users/UserItem'
import './App.css';

class App extends Component {
  
  render(){

  const name = 'John Doe';

  return (
    <div className="App">
      
      <Navbar title="Mr" icon="fab fa-github"/>
      <UserItem/>
    </div>
    
  );
  }
}
export default App;
