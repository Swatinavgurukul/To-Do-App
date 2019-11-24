import React, {Component} from 'react';
import CheckBoxTodo from './checkbox';


class UpdateTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            done: false
        }
        this.onCheck = this.onCheck.bind(this);
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

    onCheck(value) {
        this.setState({done: value});
    }

    itemContent() {
        return (<li>
            <div onDoubleClick={() => this.setState({editing: true})}>
            
                {this.state.editing &&  <input defaultValue={this.props.text}  
                 onKeyDown={e => this.keyDown(e)}/>}
                 <CheckBoxTodo checked={this.state.done} onCheck={this.onCheck} />
                {!this.state.editing && this.props.text}
                <span onClick={this.props.onDelete}>--</span>
            
            </div>
            
        </li>);
    }

    render() {
        if (this.state.done && this.props.showDone) return this.itemContent();
        if (!this.state.done && this.props.showPending) return this.itemContent();
        return <div></div>;
    }
}

export default UpdateTodo;