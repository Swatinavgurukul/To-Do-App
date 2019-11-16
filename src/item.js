import React, {Component} from 'react';

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
    }

    keyDown(e) {
        if (e.key === 'Enter') {
            this.props.onUpdate(e.target.value);
            this.setState({editing: false});
        }//jhgf
    }

    render() {
        return (<li>
            <div onDoubleClick={() => this.setState({editing: true})}>
                {this.state.editing && <input onKeyDown={e => this.keyDown(e)} />}
                {!this.state.editing && this.props.text}
                <span onClick={this.props.onDelete}>--</span>
            </div>
        </li>)
    }
}