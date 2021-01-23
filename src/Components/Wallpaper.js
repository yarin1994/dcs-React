import React, { createContext, useState } from 'react';
import img from '../Images/Scene.png';
import './wallPaper.css';
import Form from './Form';
// import UsersList from './UsersList';
import HooksUserList from './HooksUserList';

import User from './User';
import usersData from './../Data/users.json';
import { v4 as uuidv4 } from 'uuid';

// export const context = createContext();

const Wallpaper = () => {
    const [users, setUsers] = useState(usersData);
    const [user, addUser] = useState('');


    const newUser = (date, name, city) => {
        addUser([...user, {id: uuidv4(), date, name, city}]);
    }

    const editUser = (id) => {

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
            <Form newUser={newUser}/>
            {/* <ListUsers /> */}
            {/* <User/> */}

        </div>
    );
}

export default Wallpaper;