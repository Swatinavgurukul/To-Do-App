import React, { Component } from 'react';
import './App.css';

class Todo extends Component {
  constructor(props){
    super(props)
    this.state={
      item:'',
      todoItems : []
    }
    this.onChangeHandler=this.onChangeHandler.bind(this)
    this.addData=this.addData.bind(this)
    this.delete=this.delete.bind(this)
  
  }
  
  onChangeHandler(event){
    this.props
    // console.log(event);
    var inputVar = event.target.value;
    // console.log(inputVar);
    this.setState({
      item:inputVar
    })
  }
  addData(){
    var inputVar = this.state.item;
    // console.log(inputVar)
    var itemInstance = this.state.todoItems;
    // console.log(itemInstance)
    itemInstance.push(inputVar);
    // console.log(itemInstance)
    this.setState({
      todoItems:itemInstance  
    })
    console.log(this.state.todoItems)
  }

  delete(){
    var id = event.target.id;
    var itemInstance = this.state.todoItems;
    itemInstance.splice(id,1);
    this.setState({
      todoItems:itemInstance  
    })
  }
  render() {
    var itemList = this.state.todoItems.map((e,i)=>
     <li key={i}>{e} <span onClick={this.delete} id={i}>-</span></li>)
    return (
    <div>
    <div className="header"> React js ToDo App</div>
    <div className="body">
      
        <ul>
          {itemList}
          </ul>
          </div>
    <div className="box">
        <input type="text" 
          value={this.state.item}  
          onChange={this.onChangeHandler}/>
          {/* <p>{this.state.item}</p> */}
        <button onClick={this.addData}>Add</button>
    </div>
    </div>
    );
  }
}

export default Todo;