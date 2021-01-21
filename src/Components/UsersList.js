import React, { Component } from 'react';
import User from './User';
import usersData from './../Data/users.json';
import { Container, Fab } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import './userList.css';
class UsersList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
        this.eachUser = this.eachUser.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.add = this.add.bind(this);
        this.nextId = this.nextId.bind(this);
    }

    componentDidMount() {
        usersData.map(item => this.add({ id: item.id, dt: item.date, nm: item.name, ct: item.city }))
    }

    // NEEDS TO MOVE TO FORM.JS
    add({ id = null, dt = 'default date', nm = 'default name', ct = 'default city' }) {
        this.setState(prevState => ({
            users: [
                ...prevState.users, {
                    id: id !== null ? id : this.nextId(prevState.users),
                    date: dt,
                    name: nm,
                    city: ct
                }]
        }))
    }

    // PROBABLY THIS ONE AS WELL
    nextId(users = []) {
        let max = users.reduce((prev, curr) => prev.id > curr.id ? prev.id : curr.id, 0);
        return ++max;
    }

    delete(id) {
        this.setState(prevState => ({
            users: prevState.users.filter(user => user.id !== id)
        }))
    }

    update(newUser, i) {
        console.log(`update ${i}: newUser ${newUser}`);

        this.setState(prevState => ({
            users: prevState.users.map(
                user => user.id !== i ? user : { ...user, user: newUser }
            )
        }));
    }

    eachUser(item, i) {
        return <User key={i} index={item.id} onChange={this.update} onDelete={this.delete}>

            <div className="details">
                <h5>{i + 1}</h5>
                <h5>{item.date}</h5>
                <h5>{item.name}</h5>
                <h5>{item.city}</h5>
                <span className="buttons">
                    <Fab className="right" size="small" color="secondary" aria-label="update" onClick={this.update} variant="round" >
                        <EditIcon />
                    </Fab>
                    <Fab className="right" size="small" color="secondary" aria-label="delete" onClick={this.delete} variant="round">
                        <DeleteIcon />
                    </Fab>
                </span>
            </div>


        </User>
    }

    render() {
        return (
            <div className="rectangle">
                {this.state.users.map(this.eachUser)}
                {/* <Fab size="large" color="secondary" aria-label="add" onClick={this.add} variant="extended">
                    <AddIcon/>Save
                </Fab> */}
            </div>
        )
    }
}

export default UsersList;