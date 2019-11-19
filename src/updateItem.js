import React, {Component} from 'react';


class UpdateTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
    }  

    keyDown(e) {
        if (e.key === 'Enter') {
            if (e.target.value.trim().length !== 0) {
                this.props.onUpdate(e.target.value);
                this.setState({editing: false});
            }else{
                alert('Please update you Todo.')
            }
        }
    }

    render() {
        return (<li>
            <div onDoubleClick={() => this.setState({editing: true})}>
            
                {this.state.editing &&  <input defaultValue={this.props.text}  
                 onKeyDown={e => this.keyDown(e)}/>}
                 {this.props.chekBox}
                {!this.state.editing && this.props.text}

                <span onClick={this.props.onDelete}>Delete</span>
            
            </div>
            
        </li>)
    }
}

export default UpdateTodo;