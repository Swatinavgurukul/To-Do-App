import React, { Component } from 'react';
// import './App.css';

class AddTodo extends Component {
  constructor(props){
    super(props)
    this.state={
      item:'',
      todoItems : [],
     
    }
    this.onChangeHandler=this.onChangeHandler.bind(this)
    this.addData=this.addData.bind(this)

  }
onChangeHandler(event){
    var inputVar = event.target.value;
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
    // console.log(this.state.todoItems)
  }

  

  render() {
    var itemList = this.state.todoItems.map((e,i)=>
    <li key={i}>{e}</li>)

    return (
    <div> 
    <div className="header"> React js ToDo App</div>
    <div className="body">
    <ul>
        {itemList}
    </ul>
    </div>
    <div className="footer">
        <input type="text" 
          value={this.state.item}  
          onChange={this.onChangeHandler}/>
        <button onClick={this.addData}>+</button>
    </div>
    </div>
    );
  }
}

export default AddTodo;