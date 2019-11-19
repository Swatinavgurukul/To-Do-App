import React, { Component } from 'react';
import './App.css';
import Item from './updateItem';

class Todo extends Component {
  constructor(props){
    super(props)
    this.state={
      item:'',
      todoItems : [],
     
    }
    this.onChangeHandler=this.onChangeHandler.bind(this)
    this.delete=this.delete.bind(this)
    this.submitMessage = this.submitMessage.bind(this);
    this.keyPressed = this.keyPressed.bind(this);
  }
  keyPressed(event) {
    if (event.key === "Enter") {
      this.submitMessage()
    }
  }
  submitMessage() {
    var inputVar = this.state.item;
    if (inputVar.trim().length !== 0){
      var itemInstance = this.state.todoItems;
      // console.log(itemInstance)
      itemInstance.push(inputVar);
      // console.log(itemInstance)
      this.setState({
        todoItems:itemInstance,
        item: '',
      })
    }else{
      alert('Please set your TODO.')
    }
  
  }
  update(i, v) {
    const list = this.state.todoItems;
    list[i] = v;
    this.setState({todoItems: list});
  }
  
  onChangeHandler(event){
    var inputVar = event.target.value;
    this.setState({
      item:inputVar
    })
  }
 
delete(id) {
    var itemInstance = this.state.todoItems;
    itemInstance.splice(id,1);
    this.setState({
      todoItems:itemInstance  
    });
  }


  render() {

    return (
    <div> 
    <div className="header"> React js ToDo App</div>
    <div className="body">
    <input  
          onChange={this.onChangeHandler}
          onKeyPress={this.keyPressed}
          value={this.state.item} 
          />
          <button onClick={this.submitMessage}>Add message</button>
        <ul>
          {this.state.todoItems.map((e, i) => 
          <Item key={i} text={e} 
          onDelete={() => this.delete(i)} 
          onUpdate={(v) => this.update(i, v)} />)}
        </ul>
        
        
    </div>
    <div className="footer">
        <h3>ToDo - App made by Swati Singh </h3>
    </div>
    </div>
    );
  }
}

export default Todo;