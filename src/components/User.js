import React, {Component} from 'react'
import {FaPencilAlt} from 'react-icons/fa';
import {FaTrash} from 'react-icons/fa'
import {roles} from '../constants/general'

class User extends Component {

    constructor(props) {
        super(props);
        this.edit = this.edit.bind(this);
        this.remove = this.remove.bind(this);
        this.roleChange = this.roleChange.bind(this);
        this.state = {
            editing: false,
            edited: {}
        }
    }

    roleChange(event) {
        this.props.onRoleChange({role: event.target.value})
    }

    edit() {
        this.setState(state => ({...state, editing: true, edited: {name: this.props.name, role: this.props.role}}))
    }

    remove() {
        this.props.onRemove(this.props.id);
    }

    render() {
        return this.state.editing ? (
            <div className="user">
                <h3>{this.props.name}</h3>
                <div>
                    Role:
                    <select value={this.props.role} onChange={this.roleChange}>
                        {Object.keys(roles).map(key => (
                            <option value={key}>{roles[key].label}</option>
                        ))}
                    </select>
                </div>
                <div>
                    Name: <input ref={input => this._newName = input}/>
                </div>

                <div>
                    <button onClick={this.save}><FaPencilAlt/> Save</button>
                </div>
            </div>
        ) : (
            <div className="user">
                <h3>{this.props.name}</h3>
                <div>
                    Role: {this.props.role}
                </div>
                <div>
                    <button onClick={this.edit}><FaPencilAlt/> Edit</button>
                    <button onClick={this.remove}><FaTrash/> Remove</button>
                </div>
            </div>
        )
    }
}

export default User;