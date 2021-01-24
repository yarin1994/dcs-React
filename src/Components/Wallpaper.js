import React, { useState } from 'react';
import img from '../Images/Scene.png';
import './wallPaper.css';
import Form from './Form';
import HooksUserList from './HooksUserList';
import usersData from './../Data/users.json';
import { v4 as uuid } from 'uuid';

const Wallpaper = () => {
    const [users, setUsers] = useState(usersData);
    const [userInf, setUser] = useState('');


    const insertUser = (date, userName, city) => {
        setUsers([...users, { id: uuid(), date, userName, city }]);
        
    }

    const editUser = (userInf) => {
        setUser({ id: userInf.id, date: userInf.date, userName: userInf.userName, city: userInf.city});   
    }

    const removeUser = (id) => {
        setUsers(users.filter(users => users.id !== id));
    }

    const detailsUpdate = (userDetails, id) => {
        setUsers(users.map(p => p.id !== id ? p : userDetails));
        setUser('');
    }

    return (
        <div>
            <img src={img} alt="scene" className="wallpaper" />
            <div className="rectangle">
                <HooksUserList editUser={editUser} removeUser={removeUser} data={users} />
            </div>
            <Form insertUser={insertUser} detailsUpdate={detailsUpdate} userInf={userInf} setUser={setUser} />
        </div>
    );
}

export default Wallpaper;