import React, { Component } from 'react';
import './App.css';
import Item from './item';

class Todo extends Component {
  constructor(props){
    super(props)
    this.state={
      item:'',
      todoItems : [],
      isInEditMode:false
    }
    this.onChangeHandler=this.onChangeHandler.bind(this)
    this.addData=this.addData.bind(this)
    this.delete=this.delete.bind(this)
    
  
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

  



  delete(id) {
    var itemInstance = this.state.todoItems;
    itemInstance.splice(id,1);
    this.setState({
      todoItems:itemInstance  
    });
  }

  render() {
    // var itemList = this.state.todoItems.map((e,i)=>
    //  <li key={i}><div onDoubleClick={() => this.editMode(i)}>
    //    {e} <span onClick={this.delete} id={i}>--</span></div>
    // </li>)
    return (
    <div> 
    <div className="header"> React js ToDo App</div>
    <div className="body">
      
        <ul>
          {this.state.todoItems.map((e, i) => <Item key={i} text={e} onDelete={() => this.delete(i)} onUpdate={(v) => this.update(i, v)} />)}
        </ul>
        

          </div>
    <div className="footer">
        <input type="text" 
          value={this.state.item}  
          onChange={this.onChangeHandler}/>
          {/* <p>{this.state.item}</p> */}
        <button onClick={this.addData}>+</button>
    </div>
    </div>
    );
  }
}

export default Todo;