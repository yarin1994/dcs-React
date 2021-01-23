import React from 'react';
import './userList.css'
// import data from '../Data/users.json';
import { Fab } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';






const HooksUserList = ({ data, editUser, removeUser }) => {
    
    return (

        data.map((item, i) => { 
            return (
                <div className="details">
                    <h5>{i+1}</h5>
                    <h5>{item.date}</h5>
                    <h5>{item.name}</h5>
                    <h5>{item.city}</h5>
                    <span className="buttons">
                        <Fab className="right" size="small" color="secondary" aria-label="update" onClick={editUser} variant="round" >
                            <EditIcon />
                        </Fab>
                        <Fab className="right"  size="small" color="secondary" aria-label="delete" onClick={() => removeUser(item.id)} variant="round">
                            <DeleteIcon />
                        </Fab>
                    </span>
                </div>
            )
        })
    )
};

export default HooksUserList;