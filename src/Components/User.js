import React, {Component} from 'react';
import {MdDelete, MdEdit, MdSave} from 'react-icons/md';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

class User extends Component {
    constructor(props){
        super(props);

        this.state = {
            editing: false
        }

        this.save = this.save.bind(this); 
        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);
        this.renderUI = this.renderUI.bind(this);
        this.renderForm = this.renderForm.bind(this);
    }

    edit(){
        this.setState({
            editing: true
        })
    }

    delete(){
        this.props.onDelete(this.props.index);
    }

    save(e){
        e.prevetDefault();

        this.props.onChange(this.newUser.value, this.props.index);

        this.setState({
            editing: false
        })
    }

    renderForm(){
        return(
            <div>
                <form>
                    <textarea ref={input => (this.newUser = input)}/>
                    <button onClick={this.save}><MdSave/></button>
                </form>
            </div>
        )
    }

    renderUI(){
        return(
            <div className="user">
                <div>{this.props.children}</div>
                <span>
                    <button onClick={this.edit}><MdEdit/></button>
                    <button onClick={this.delete}><MdDelete/></button>
                </span>
            </div>
        )
    }

    render(){
        // return this.state.editing ? this.renderForm() : this.renderUI();
        return (
            <div className="user">
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default User;