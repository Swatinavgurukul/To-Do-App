import React from 'react';
import './index.css';
const Checkbox = props => (
    <input type="checkbox" {...props} />
  )
class CheckBoxTodo extends React.Component {
    state = { checked: false }
    handleCheckboxChange = event =>
      this.setState({ checked: event.target.checked })
      
    render() {
       
            var msg;
            if (this.state.checked) {
              msg = "done";
            } else {
              msg = "pending";
            }
      return (
        <div className="chackbox">
         
            <Checkbox
              checked={this.state.checked}
              onChange={this.handleCheckboxChange}
    />
    <p>todo is {msg}.</p>
           
         
        </div>    
      ) 
    }
  }

  export default CheckBoxTodo;

  // added checkbox to check todo is pending or done
