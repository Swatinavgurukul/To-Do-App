import React, { Component } from 'react';
import Todo from './todo';
import './App.css';
// import DeletTodo from './Components/deletItem';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Todo />
      </div>
        
    );
  }
}

export default App;
