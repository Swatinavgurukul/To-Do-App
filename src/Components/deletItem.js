// import React, { Component } from 'react';

// class DeletTodo extends Component {
//   constructor(props){
//     super(props)
//     this.state={
//       item:'',
//       todoItems : [],
     
//     }

//     this.delete=this.delete.bind(this)
// }
// delete(id) {
//     var itemInstance = this.state.todoItems;
//     itemInstance.splice(id,1);
//     this.setState({
//       todoItems:itemInstance  
//     });
//   }

//   render() {

//     return (
//     <div> 
    
//     <div className="body">
//     <ul>
//     {this.state.todoItems.map((e,i)=>
//      <li key={i}>{e}<span onClick={this.delete} id={i}>--</span></li>)}</ul>
//     </div>
    
//     </div>
   
//     );
//   }
// }

// export default DeletTodo;