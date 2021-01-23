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
    const [userInf, setUser] = useState('');


    const insertUser = (date, userName, city) => {
        setUsers([...users, { id: uuid(), date, userName, city }]);
    }

    const editUser = (userInf) => {
        const state = {
            saveMode: true,
            save: "Save",
            edit: "Update"
        }
        // setUser([...users, {id: userInf.id, date, userName, city}]);
        setUser({ id: userInf.id, date: userInf.date, userName: userInf.userName, city: userInf.city });
        // insertUser(item.date, item.userName, item.city);
        // console.log(userInf);
    }

    const removeUser = (id) => {
        setUsers(users.filter(users => users.id !== id));
    }

    const detailsUpdate = (userDetails, id) => {
        console.log(userDetails);
        // setUser( {id: userId, date: date, userName: name, city: city});
        setUsers(users.map(p => p.id !== id ? p : userDetails));
        // console.log("hello");/
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