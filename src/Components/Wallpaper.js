import React, { useState } from 'react';
import img from '../Images/Scene.png';
import './wallPaper.css';

import Form from './Form';
import HooksUserList from './HooksUserList';

import usersData from './../Data/users.json';
import { v4 as uuid } from 'uuid';

// export const context = createContext();

const Wallpaper = () => {
    const [users, setUsers] = useState(usersData);
    // const [newUser, ] = useState('');


    const insertUser = (date, userName, city) => {
        setUsers([...users, {id: uuid(), date, userName, city}]);
    }

    const editUser = () => {
        
    }

    const removeUser = (id) => {
        setUsers(users.filter(users => users.id !== id));
    }

    return (
        <div>
            <img src={img} alt="scene" className="wallpaper" />
            <div className="rectangle">
                <HooksUserList  editUser={editUser} removeUser={removeUser} data={users} />
            </div>
            <Form insertUser={insertUser}/>

        

        </div>
    );
}

export default Wallpaper;