import React, { Component } from 'react';
import './App.css';
import AddTodo from './Components/addItems'
// import UpdateTodo from './updateItem'
// import DeletTodo from './Components/deletItem'
class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo/>
        {/* <UpdateTodo/> */}
        {/* <DeletTodo /> */}
      </div>
        
    );
  }
}

export default App;
