import React from 'react';
import './index.css';

const Checkbox = props => (
  <input type="checkbox" {...props} />
)
console.log(Checkbox, "Swati")

class CheckBoxTodo extends React.Component {
  
  handleCheckboxChange = event =>
  this.props.onCheck(event.target.checked);
    render() {
      var msg;
      if (this.props.checked) {
        msg = "done"; 
      } else {
        msg = "pending";
      }
      
      return (
      <div className="chackbox">
        <p className="msg">todo is {msg}.</p>
        <Checkbox
          checked={this.props.checked}
          onChange={this.handleCheckboxChange}
        />
      </div>
      )
    }
  }

  export default CheckBoxTodo;

